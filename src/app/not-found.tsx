import Container from "@/components/container";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main>
      <Container>
        <section className="my-20 text-center">
            <h2 className="font-semibold text-6xl mb-3">404</h2>
            <h4 className="text-2xl mb-6">Ops! Página não encontrada</h4>
            <Link href="/" className="bg-orange-500 text-white py-2 px-5 rounded-md font-medium hover:bg-orange-600 duration-200">Voltar</Link>
        </section>
      </Container>
    </main>
  );
};

export default NotFound;
