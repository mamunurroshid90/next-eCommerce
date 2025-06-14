import Button from "@/components/Button";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const CancelPage = () => {
  return (
    <Container className="py-10">
      <Title>Your Payment has been cancelled</Title>
      <p className="text-base tracking-wide max-w-3xl mt-1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo autem eum
        nisi esse harum fugit non maiores id debitis dolorem qui veniam aperiam
        quia quibusdam repellat, laudantium, asperiores modi quaerat!
      </p>
      <div className="mt-5 flex items-center gap-x-5">
        <Button href="/" className=" rounded-md">
          Continue Shopping
        </Button>
        <Button href="/cart" className="rounded-md">
          View Cart
        </Button>
      </div>
    </Container>
  );
};

export default CancelPage;
