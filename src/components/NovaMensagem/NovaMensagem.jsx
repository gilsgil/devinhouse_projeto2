import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import "./NovaMensagem.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import ReactInputMask from "react-input-mask";

function NovaMensagem() {
  const history = useHistory();

  // modelo de alerta para quando o formulário é preenchido corretamente
  const submitAlert = () =>
    swal({
      text: "Mensagem cadastrada com sucesso!",
      onClose: history.push("/mensagem"),
    });

  // states de requisição
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);

  // states dos campos
  const [gatilho, setGatilho] = useState();
  const [canal, setCanal] = useState();
  const [timer, setTimer] = useState();
  const [mensagem, setMensagem] = useState();

  // dados do formulário para envio
  const formData = {
    id: Math.random(),
    channel: canal,
    trigger: gatilho,
    timer: timer,
    message: mensagem,
  };

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

  // handler para o envio do formulário ao clicar no botão "Cadastrar"
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    submitAlert();
  };

  // handler para o campo de mensagens
  const handleMensagem = (e) => {
    setMensagem(e.target.value);
  };

  // handler para o campo de gatilhos
  const handleGatilho = (e) => {
    setGatilho(e.target.value);
  };

  // handler para o campo de canais
  const handleCanal = (e) => {
    setCanal(e.target.value);
  };

  // handler para o campo de timer
  const handleTimer = (e) => {
    setTimer(e.target.value);
  };

  // realiza o post das informações do formulário
  const postData = () => {
    axios
      .post("http://localhost:3001/messages", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formButtons">
          <Container className="mensagens-container">
            <Row>
              <Col>
                <h2>Mensagens</h2>
              </Col>
              <Col align="end">
                <Link to="/mensagem" style={{ marginLeft: "auto" }}>
                  <Button className="button-voltar" variant="light">
                    Voltar
                  </Button>
                </Link>

                <Button type="submit">Cadastrar</Button>
              </Col>
            </Row>
          </Container>
        </FormGroup>

        <FormGroup controlId="formInputs">
          <Container className="selects-container">
            <Container className="selects-border-container">
              <Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Label>Gatilho</Form.Label>
                    <Form.Control
                      as="select"
                      required
                      value={gatilho}
                      onChange={handleGatilho}
                    >
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
                    <Form.Control
                      as="select"
                      required
                      value={canal}
                      onChange={handleCanal}
                    >
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

                <Row className="text-area">
                  <Col md={12}>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      onChange={handleMensagem}
                      required
                    >
                      {mensagem}
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </Container>
          </Container>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default NovaMensagem;
