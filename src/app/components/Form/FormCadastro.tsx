"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { GoogleLoginButton, LoginButton } from "../Button/button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../lib/firebase";
import { initializeApp } from "firebase/app";
import { Button, Input, Spacer } from "@nextui-org/react";
import { Google } from "react-bootstrap-icons";
import { registrarEmaileSenha } from "../../firebase/auth";

const FormCadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    initializeApp(firebaseConfig);
    const auth = getAuth();

    try {
      // Criar uma nova conta de usuário com e-mail e senha fornecidos
      const userCredential = await registrarEmaileSenha(email, senha);

      console.log("Usuário registrado com sucesso:", userCredential);
      // Aqui você pode redirecionar o usuário para a página inicial ou para outra funcionalidade do seu aplicativo
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error.message);
      // Trate os erros possíveis e exiba mensagens adequadas para o usuário
    }
  };

  return (
    <>
      <Form onSubmit={handleRegister} style={{ minWidth: "360px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            E-mail<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Senha<span className="text-danger"> *</span>
          </Form.Label>
          <Form.Control
            type="password"
            value={senha}
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex flex-column gap-2 mb-3">
          <LoginButton>Começar já</LoginButton>
          <GoogleLoginButton>Entrar com o Google</GoogleLoginButton>
        </div>
        <p className="text-secondary text-center">
          Você já tem uma conta? <Link href="/">Entrar agora</Link>
        </p>
      </Form>
    </>
  );
};

export default FormCadastro;
