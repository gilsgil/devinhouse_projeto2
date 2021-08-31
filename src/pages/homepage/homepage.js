import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alunos: [
        {
          nome: "Lara Souza de Oliveira",
          dataNascimento: "26/10/1989",
          nomeResponsavel: "Gilson Oliveira",
          telResponsavel: "(11) 95824-8459",
          casoEmergencia: "Pais",
          restAlimentar: "Não",
          autorizacao: "Não",
          listaAutorizados: ["Pai", "Mãe"],
          turma: "1A",
          observacoes: "...",
        },
      ],
    };
  }

  render() {
    return <div className="homepage"></div>;
  }
}

export default HomePage;
