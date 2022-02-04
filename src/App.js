

// CLASS COMPONENTS

import React, {Component} from 'react'
import maca from "./maca.png"

class Dados extends Component{
  state = {
      nome:"Gabriel",
      idade:17,
      comidaF:"Fricassê",
      musicas:["M4", "I Won", "Birds"]
    };
  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaF}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={maca} />
      </div>
    )
  }
}

export default Dados

// BONUS

