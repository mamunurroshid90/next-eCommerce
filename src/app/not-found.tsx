import { NotFount } from "@/assets";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPages = () => {
  return (
    <Container className="flex flex-col gap-2 items-center">
      <Image src={NotFount} alt="not-found" className=" max-w-60" priority />
      <p className="text-xl font-semibold">Ops! Page not found</p>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/">Back to Home</Link>
      </Button>
    </Container>
  );
};

export default NotFoundPages;
