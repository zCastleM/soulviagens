import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormLogin from "./Form/FormLogin";
import FormCadastro from "./Form/FormCadastro";
import AuthContext from "../contexts/AuthContext";
import { logoutFirebase } from "../firebase/auth";
import { AirplaneFill } from "react-bootstrap-icons";

const Navigation = () => {
  const user = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Novo estado para controlar o login


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  useEffect(() => {
    setLoggedIn(authContext.isLoggedIn); // Atualizar o estado loggedIn ao carregar o componente e sempre que authContext.isLoggedIn mudar
  }, [authContext.isLoggedIn]);

  function someFunc() {
    handleShow2();
    handleClose();
  }
  function someFunc2() {
    handleClose2();
    handleShow();
  }

  const handleLogout = async () => {
    try {
      await logoutFirebase();
      authContext.logout();
      setLoggedIn(false);
      // Atualize o estado global de autenticação no contexto ou em qualquer outro lugar apropriado
      console.log('Logout bem-sucedido');
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
      // Trate os erros possíveis e exiba mensagens adequadas para o usuário
    }
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    handleClose(); // Fechar o modal após o login bem-sucedido
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-3"
      >
        <Container>
        <Navbar.Brand href="/"><AirplaneFill /> SoulViagens</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/dashboard"
                >
                  Meu perfil
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="/"
                >
                  Destinos
                </Link>
              </Nav.Link>
            </Nav>
            
            <Nav>
            {loggedIn ? (
        <><p className="text-white">Bem vindo!</p>
        <Button className="ms-2" variant="secondary" onClick={handleLogout}>Deslogar</Button></>
      ) : (
        <><p className="text-white">Bem vindo, Visitante!</p><Button className="ms-2" onClick={handleShow}>Login</Button></>
      )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrar na plataforma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin onLoginSuccess={handleLoginSuccess} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">Não tem conta ainda? <Button variant="primary" onClick={someFunc}>Cadastre-se</Button></Modal.Footer>

      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Seu primeiro acesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCadastro />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">Você já tem uma conta? <Button variant="primary" onClick={someFunc2}>Entrar agora</Button></Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
