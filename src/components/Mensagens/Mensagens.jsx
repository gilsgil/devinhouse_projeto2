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
  const [gatilho, setGatilho] = useState();
  const [canal, setCanal] = useState();
  const [filtered, setFiltered] = useState([]);

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

  // consome as mensagens no primeiro carregamento
  useEffect(() => {
    axios
      .get("http://localhost:3001/messages")
      .then((res) => setFiltered(res.data))
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

  // handler do input timer
  const handleGatilho = (e) => {
    setGatilho(e.target.value);
  };

  // handler do input timer
  const handleCanal = (e) => {
    setCanal(e.target.value);
  };

  // handler de pesquisa com condicionais para todas as opções

  const handlePesquisar = () => {
    if (gatilho && !canal && !timer) {
      setFiltered(
        messages.filter((message) => message.trigger.includes(gatilho))
      );
    }
    if (gatilho && canal && !timer) {
      setFiltered(
        messages.filter(
          (message) =>
            message.trigger.includes(gatilho) && message.channel.includes(canal)
        )
      );
    }
    if (!gatilho && canal && !timer) {
      setFiltered(
        messages.filter((message) => message.channel.includes(canal))
      );
    }
    if (!gatilho && canal && timer) {
      setFiltered(
        messages.filter(
          (message) =>
            message.channel.includes(canal) && message.timer.includes(timer)
        )
      );
    }
    if (!gatilho && !canal && timer) {
      setFiltered(messages.filter((message) => message.timer.includes(timer)));
    }
    if (gatilho && !canal && timer) {
      setFiltered(
        messages.filter(
          (message) =>
            message.trigger.includes(gatilho) && message.timer.includes(timer)
        )
      );
    }
    if (!gatilho && !canal && !timer) {
      setFiltered(
        messages.filter(
          (message) =>
            message.trigger.includes(gatilho) && message.trigger.includes("")
        )
      );
    }
  };

  return (
    <Container>
      <Container className="mensagens-container">
        <Row>
          <Col sm={6} md={6} lg={6}>
            <h2>Mensagens</h2>
          </Col>
          <Col sm={6} md={6} lg={6} align="end">
            <Link to="#" style={{ textDecoration: "none", marginLeft: "auto" }}>
              <Button
                variant="light"
                className="button-pesquisar"
                onClick={handlePesquisar}
              >
                Pesquisar
              </Button>
            </Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/nova">
              <Button className="button-mensagem">Nova mensagem</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="selects-container">
        <Form.Group>
          <Row>
            <Col sm={4} md={4} lg={4}>
              <Form.Label>Gatilho</Form.Label>
              <Form.Control as="select" required onChange={handleGatilho}>
                <option value=""></option>
                {triggers.map((sel) => (
                  <option key={sel.id} value={sel.name}>
                    {sel.name}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <Form.Label>Canal</Form.Label>
              <Form.Control as="select" required onChange={handleCanal}>
                <option value=""></option>
                {channels.map((sel) => (
                  <option key={sel.id} value={sel.name}>
                    {sel.name}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col sm={4} md={4} lg={4}>
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

      <Container fluid className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>Gatilho</th>
              <th>Canal</th>
              <th>Tempo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.trigger}</td>
                <td>{msg.channel}</td>
                <td>{msg.timer}</td>
                <td >
                  <Button onClick={() => messageAlert(msg.message)}>
                    Ver mensagem
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default Mensagens;
