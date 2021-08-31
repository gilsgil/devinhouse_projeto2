import { React } from "react";
import Lista from "../../components/lista/lista";
import "./alunos.css";

export default function Alunos() {
  return (
    <div className="alunos">
      <h1 className="title">Lista de Alunos</h1>
      <Lista />
    </div>
  );
}
