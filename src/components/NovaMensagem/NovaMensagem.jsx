import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NovaMensagem.css";

function NovaMensagem() {
  const [messages, setMessages] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [timers, setTimers] = useState([]);

  // consome as messages
  useEffect(() => {
    axios
      .get("http://localhost:3001/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  // consome os triggers
  useEffect(() => {
    axios
      .get("http://localhost:3001/triggers")
      .then((res) => setTriggers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // consome os channels
  useEffect(() => {
    axios
      .get("http://localhost:3001/channels")
      .then((res) => setChannels(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {};

  return (
    <Form>
      <Container className="mensagens-container">
        <h2>Mensagens</h2>
        <Link to="/mensagem" className="button-pesquisar">
          <Button>Voltar</Button>
        </Link>

        <Link className="button-mensagem">
          <Button type="submit" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </Link>
      </Container>

      <Container className="selects-container">
        <Container className="selects-border-container">
          <Form.Group>
            <Row>
              <Col md={4}>
                <Form.Label>Gatilho</Form.Label>
                <Form.Control as="select" required>
                  <option value=""></option>
                  {triggers.map((sel) => (
                    <option key={sel.id} value={sel.id}>
                      {sel.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={4}>
                <Form.Label>Canal</Form.Label>
                <Form.Control as="select" required>
                  <option value=""></option>
                  {channels.map((sel) => (
                    <option key={sel.id} value={sel.id}>
                      {sel.name}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={4}>
                <Form.Label>Timer</Form.Label>
                <Form.Control type="number" required></Form.Control>
              </Col>
            </Row>

            <Row className="text-area">
              <Col md={12}>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={6}></Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Container>
      </Container>
    </Form>
  );
}

export default NovaMensagem;
