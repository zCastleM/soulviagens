'use client'
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";
import Navigation from "../components/navbar";
import { getProfileData, updateProfileData } from "../firebase/auth";
import useAuth from "../firebase/useAuth";

interface ProfileFormData {
  name: string;
  age: string;
  location: string;
  interests: string[];
  // Adicione outros campos necessários do perfil
}

const Page = () => {
  const { user, isLoading } = useAuth();
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    age: "",
    location: "",
    interests: ["Viagens", "Aventura", "Cultura"],
  });

  useEffect(() => {
    if (user) {
      const fetchProfileData = async () => {
        const data = await getProfileData(user.uid);
        setProfileData(data);
        setFormData(data);
      };

      fetchProfileData();
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const selectedInterests = formData.interests.slice();

      if (checked) {
        selectedInterests.push(value);
      } else {
        const index = selectedInterests.indexOf(value);
        if (index !== -1) {
          selectedInterests.splice(index, 1);
        }
      }

      setFormData({
        ...formData,
        interests: selectedInterests,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateProfileData(user.uid, formData);
      setProfileData(formData);
      console.log("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error.message);
    }
  };

  return (
    <>
      <Navigation />
      <Container className="d-flex flex-wrap gap-4">
        <div className="w-100">
          <Card className="p-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  value={formData.age || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Interesses</Form.Label>
                {["Viagens", "Aventura", "Cultura"].map((interest) => (
                  <Form.Check
                    key={interest}
                    type="checkbox"
                    label={interest}
                    name={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                ))}
              </Form.Group>

              <Button variant="primary" type="submit">
                Atualizar
              </Button>
            </Form>
          </Card>
        </div>
        <div className="w-100">
          <h2>Lista Interesses</h2>
          <Card style={{ width: "100%" }}>
            <ListGroup variant="flush">
              {formData.interests.map((interest) => (
                <ListGroup.Item key={interest}>{interest}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
        <div className="w-100 p-2 bg-dark text-white rounded">
          <p className="text-center">Compartilhe sua experiência:</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
      </Container>
    </>
  );
};

export default Page;
