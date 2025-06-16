import { NextRequest, NextResponse } from "next/server";
import { ProductType } from "../../../../type";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const { items, email } = reqBody;

    const extractingItems = items.map((item: ProductType) => ({
      quantity: item.quantity || 1, // Added fallback for quantity
      price_data: {
        currency: "usd",
        unit_amount: Math.round(
          item.price * 100 * (1 - item.discountPercentage / 100)
        ),
        product_data: {
          name: item.title,
          description: item.description,
          images: item.images,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Payment session created successfully",
      success: true,
      id: session.id,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
};
