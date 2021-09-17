import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Mensagens.css";
import swal from "sweetalert";
import ReactInputMask from "react-input-mask";

function Mensagens() {
  // states
  const [messages, setMessages] = useState([]);
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [timer, setTimer] = useState();

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

  // mensagem de modal
  const messageAlert = (message) => {
    swal({
      title: "Mensagem",
      text: message,
    });
  };

  // handler do input timer
  const handleTimer = (e) => {
    setTimer(e.target.value);
  };

  return (
    <Form>
      <Container className="mensagens-container">
        <h2>Mensagens</h2>
        <Link to="#" style={{ textDecoration: "none", marginLeft: "auto" }}>
          <Button variant="light" className="button-pesquisar">
            Pesquisar
          </Button>
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/nova">
          <Button className="button-mensagem">Nova mensagem</Button>
        </Link>
      </Container>

      <Container className="selects-container">
        <Form.Group>
          <Row>
            <Col md={4}>
              <Form.Label>Gatilho</Form.Label>
              <Form.Control as="select" required>
                <option value=""></option>
                {triggers.map((sel) => (
                  <option key={sel.id} value={sel.name}>
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
                  <option key={sel.id} value={sel.name}>
                    {sel.name}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col md={4}>
              <Form.Label>Timer</Form.Label>
              <ReactInputMask
                className="form-control"
                mask="99:99"
                onChange={handleTimer}
                type="text"
                required
                value={timer}
              ></ReactInputMask>
            </Col>
          </Row>
        </Form.Group>
      </Container>

      <Container className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr align="center">
              <th>Gatilho</th>
              <th>Canal</th>
              <th>Tempo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.trigger}</td>
                <td>{msg.channel}</td>
                <td>{msg.timer}</td>
                <td align="center">
                  <Button onClick={() => messageAlert(msg.message)}>
                    Ver mensagem
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Form>
  );
}

export default Mensagens;
