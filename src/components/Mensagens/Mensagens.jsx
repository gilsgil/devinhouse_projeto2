import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Mensagens.css";

function Mensagens() {
  return (
    <Container className="mensagens-container">
      <h2>Mensagens</h2>
      <Button className="button-pesquisar">Pesquisar</Button>
      <Button className="button-mensagem">Nova mensagem</Button>
    </Container>
  );
}

export default Mensagens;
