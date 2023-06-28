"use client";
import React, { useContext, useState } from "react";
import { Form, Toast } from "react-bootstrap";
import { GoogleLoginButton, LoginButton } from "../Button/button";
import { LoginEmailESenha } from "../../firebase/auth";
import { useRouter } from "next/navigation";
import AuthContext from "../../contexts/AuthContext";

const FormLogin = ({ onLoginSuccess }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Verificar se o campo de e-mail está vazio ou contém um e-mail inválido
    if (!email) {
      errors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "E-mail inválido.";
    }

    // Verificar se o campo de senha está vazio
    if (!senha) {
      errors.senha = "Senha é obrigatória.";
    }

    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Validar o formulário
    const formErrors = validateForm();
  
    // Verificar se há erros de validação
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
      await LoginEmailESenha(email, senha); // Função de autenticação assíncrona
      // Atualiza o estado para indicar que o usuário está logado
      authContext.setIsLoggedIn(true);
      console.log("Login bem-sucedido");
      onLoginSuccess();
    } catch (error) {
      console.error("Erro ao autenticar o usuário:", error.message);
      // Trate os erros possíveis e exiba mensagens adequadas para o usuário
    }
  };
  

  return (
    <>
      <Form style={{ minWidth: "360px" }} onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={errors.email} // Adicione a propriedade isInvalid para aplicar estilos de erro
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            isInvalid={errors.senha} // Adicione a propriedade isInvalid para aplicar estilos de erro
            />
            <Form.Control.Feedback type="invalid">{errors.senha}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Permanecer" />
          <a href="#!">Esqueceu a senha?</a>
        </Form.Group>
        <div className="d-flex flex-column gap-2 mb-3">
          <LoginButton>Entrar</LoginButton>
          <GoogleLoginButton>Entrar com o Google</GoogleLoginButton>
        </div>
      </Form>
    </>
  );
};

export default FormLogin;
