"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { AirplaneFill, BriefcaseFill, BuildingsFill, BusFrontFill, CarFrontFill, Search, Star, StarFill } from "react-bootstrap-icons";
import Navigation from "./components/navbar";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const page = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const db = getFirestore();
      const citiesCollection = collection(db, "cities");
      const citiesSnapshot = await getDocs(citiesCollection);
      const citiesData = citiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCities(citiesData);
    };

    fetchCities();
  }, []);

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
                <BriefcaseFill size={56} />
                <Card.Title className="mt-2">Pacotes</Card.Title>
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
          <Card className="mb-3 w-100 meu-card" onClick={handleCardClick}>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img src="https://www.dicasdeviagem.com/wp-content/uploads/2022/01/baia-dos-porcos-morro-noronha-scaled.jpg" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Fernando de Noronha</Card.Title>
                    <StarFill  color="yellow" />
                  <StarFill color="yellow" />
                  <StarFill  color="yellow"/>
                  <StarFill  color="yellow"/>
                  <Star color="yellow"/>
                  <Card.Text>
                  Dentro da América do Sul, o Brasil é um dos países com a maior quantidade de lugares interessantes e incríveis para visitar. Os turistas que visitam as terras brasileiras geralmente optam por conhecer a região sul e o centro, onde estão localizadas a maioria das atrações. A região norte, porém, também oferece muitos lugares maravilhosos que é preciso conhecer.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <CardGroup>
            <Card className="mb-3 meu-card rounded" onClick={handleCardClick}>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Paris, França - A Cidade Luz</Card.Title>
                    <Card.Text>
                    Paris é conhecida por sua beleza romântica, arquitetura icônica e arte de classe mundial. É lar de pontos turísticos famosos como a Torre Eiffel, o Museu do Louvre e a Catedral de Notre-Dame.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>{" "}
            <Card className="mb-3 rounded meu-card" onClick={handleCardClick}>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img src="https://a.cdn-hotels.com/gdcs/production138/d1142/08366677-a8d0-4979-84d5-b54f93ca00e5.jpg?impolicy=fcrop&w=800&h=533&q=medium" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Nova York, Estados Unidos</Card.Title>
                    <Card.Text>
                    Nova York é uma cidade vibrante, com arranha-céus imponentes, lojas de moda, teatros da Broadway e uma rica diversidade cultural. Visite a Estátua da Liberdade, explore o Central Park e maravilhe-se com as luzes de Times Square.
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
