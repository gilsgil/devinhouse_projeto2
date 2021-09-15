import React from "react";
import { Container } from "react-bootstrap";
import GraficoBar from "../../components/Graficos/GraficoBar";
import GraficoLine from "../../components/Graficos/GraficoLine";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Container fluid="sm" className="grafico-bar">
      <Container>
        <GraficoBar />
      </Container>
      <hr />
      <Container fluid="sm" className="grafico-line">
        <GraficoLine />
      </Container>
    </Container>
  );
}

export default Dashboard;
