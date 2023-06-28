'use client'
import Image from "next/image";
import FormLogin from "../components/Form/FormLogin";
import { Text } from "@nextui-org/react";


export default function Home() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center gap-2 flex-column vw-100 vh-100">
      <Image
        src="https://logosvg.com/wp-content/uploads/2016/08/logosvgcom.png"
        alt="Logo"
        width={433}
        height={80}
      />
        <h1>Entrar na plataforma</h1>
        <Text blockquote>Bem-vindo de volta! Preencha para entrar.</Text>
        <p className="text-secondary">
          Bem-vindo de volta! Preencha para entrar.
        </p>
        <FormLogin />
        </div>
    </>
  );
}
