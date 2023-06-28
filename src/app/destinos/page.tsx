"use client";
import React, { useState } from "react";
import {
  CardGroup,
  Col,
  Card,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Modal,
  Row,
  Button
} from "react-bootstrap";
import { Navbar, Text, useTheme } from '@nextui-org/react';
import Navigation from "../components/navbar";
import { AirplaneFill, BriefcaseFill, BuildingsFill, BusFrontFill, CarFrontFill, Search, Star, StarFill } from "react-bootstrap-icons";
import "./styles.css";

const page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navigation />
      <Container>
      <div>
          <CardGroup className="mb-2">
          <Card className="btn btn-primary rounded border border-primary">
              <Card.Body>
                <BuildingsFill size={56} />
                <Card.Title className="mt-2">Hotéis</Card.Title>
              </Card.Body>
            </Card>
            <Card className="btn btn-primary rounded border border-primary">
              <Card.Body>
                <BuildingsFill size={56} />
                <Card.Title className="mt-2">Hotéis</Card.Title>
              </Card.Body>
            </Card>
            <Card className="btn btn-primary rounded border border-primary">
              <Card.Body>
                <AirplaneFill size={56} />
                <Card.Title className="mt-2">Voos</Card.Title>
              </Card.Body>
            </Card>
            <Card className="btn btn-primary rounded border border-primary">
              <Card.Body>
                <BusFrontFill size={56} />
                <Card.Title className="mt-2">Ônibus</Card.Title>
              </Card.Body>
            </Card>
            <Card className="btn btn-primary rounded border border-primary">
              <Card.Body>
                <CarFrontFill  size={56} />
                <Card.Title className="mt-2">Carros</Card.Title>
              </Card.Body>
            </Card>

          </CardGroup>
        </div>
        Destinos
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Fernando de noronha, São paulo"
            aria-label="Fernando de noronha, São paulo"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            <Search /> Buscar destino
          </Button>
        </InputGroup>

        <div>
          Cards
          <Card className="mb-3 w-100 meu-card" onClick={handleCardClick}>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Card Titles</Card.Title>
                  <Star color="yellow" />
                  <StarFill color="yellow" />
                  <Star />
                  <Star />
                  <Star />
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <CardGroup>
            <Card className="mb-3 meu-card rounded" onClick={handleCardClick}>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>{" "}
            <Card className="mb-3 rounded meu-card" onClick={handleCardClick}>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </CardGroup>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </>
  );
};

export default page;
