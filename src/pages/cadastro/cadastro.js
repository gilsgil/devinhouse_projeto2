import { React, useState } from "react";
import "./cadastro.css";

export default function Cadastro() {
  // Estados dos elementos
  const [checkrestricao1, setCheckrestricao1] = useState(false);
  const [checkrestricao2, setCheckrestricao2] = useState(false);
  const [checkautorizacao1, setCheckautorizacao1] = useState(false);
  const [checkautorizacao2, setCheckautorizacao2] = useState(false);
  const [textrestricao, setTextrestricao] = useState(true);

  // Lógica dos checkboxes de restrição alimentar
  const handleCheckRestricao1 = () => {
    setCheckrestricao1(!checkrestricao1);
    if (checkrestricao1 === false) {
      setCheckrestricao2(false);
      setTextrestricao(false);
    } else {
      setTextrestricao(true);
    }
  };

  const handleCheckRestricao2 = () => {
    setCheckrestricao2(!checkrestricao2);
    if (checkrestricao2 === false) {
      setCheckrestricao1(false);
      setTextrestricao(true);
    } else {
      setTextrestricao(true);
    }
  };

  // Lógica dos checkboxes de autorização
  const handleCheckAutorizacao1 = () => {
    setCheckautorizacao1(!checkautorizacao1);
    if (checkautorizacao1 === false) {
      setCheckautorizacao2(false);
    }
  };

  const handleCheckAutorizacao2 = () => {
    setCheckautorizacao2(!checkautorizacao2);
    if (checkautorizacao2 === false) {
      setCheckautorizacao1(false);
    }
  };

  return (
    <div className="container" id="divForm">
      <div className="row" id="rowForm">
        <div className="col align-self-center" id="colForm">
          <form className="cadastro">
            <h2 id="titleText">Cadastro de Alunos</h2>
            <div className="borderDiv">
              <div className="contentDiv">
                <div className="form-group">
                  <label htmlFor="inputNome">Nome do aluno</label>
                  <input
                    className="form-control"
                    type="text"
                    name="inputNome"
                    id="inputNome"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputData">Data de nascimento do aluno</label>
                  <input
                    className="form-control"
                    type="date"
                    name="inputData"
                    id="inputData"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputResponsavel">
                    Nome do responsável pela criança
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="inputResponsavel"
                    id="inputResposavel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTelefone">
                    Telefone do responsável pela criança
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="inputTelefone"
                    id="inputTelefone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmergencia">
                    Em caso de emergência, avisar
                  </label>
                  <select
                    className="form-control"
                    name="inputEmergencia"
                    id="inputEmergencia"
                  >
                    <option value="Pais">Pais</option>
                    <option value="Tios">Tios</option>
                    <option value="Avos">Avós</option>
                    <option value="Padrinhos">Padrinhos</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-check-label" htmlFor="inputRestricao">
                    Possui restrição alimentar?
                  </label>
                  <input
                    className="form-check-input"
                    checked={checkrestricao1}
                    onChange={handleCheckRestricao1}
                    type="checkbox"
                    name="inputRestricao1"
                  />
                  <label className="form-check-label" htmlFor="inputRestricao1">
                    Sim
                  </label>
                  <input
                    className="form-check-input"
                    checked={checkrestricao2}
                    onChange={handleCheckRestricao2}
                    type="checkbox"
                    name="inputRestricao2"
                  />
                  <label className="form-check-label" htmlFor="inputRestricao2">
                    Não
                  </label>
                </div>
                <div className="form-group" hidden={textrestricao}>
                  <label htmlFor="textRestricao">
                    Descrição das restrições alimentares:
                  </label>
                  <textarea
                    className="form-control"
                    maxLength="100"
                    type="text"
                    name="textRestricao"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form-check-label"
                    htmlFor="inputAutorizacao"
                  >
                    Autoriza fotos da criança para uso escolar?
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={checkautorizacao1}
                    onChange={handleCheckAutorizacao1}
                    name="inputRestricao1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inputAutorizacao1"
                  >
                    Sim
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={checkautorizacao2}
                    onChange={handleCheckAutorizacao2}
                    name="inputRestricao2"
                  />

                  <label htmlFor="inputAutorizacao2">Não</label>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAutorizacao">
                    Lista de autorizados a buscar a criança
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="inputAutorizacao"
                    id="inputAutorizacao"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTurma">Turma</label>
                  <input
                    className="form-control"
                    type="text"
                    name="inputTurma"
                    id="inputTurma"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputObservacao">Observações</label>
                  <textarea
                    className="form-control"
                    maxLength="100"
                    type="text"
                    name="textRestricao"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
