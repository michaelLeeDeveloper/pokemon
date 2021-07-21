import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard"

class Pokedex extends Component {

    render() {
        let handInfo;
        if (this.props.isWinner) {
            handInfo = (
                <div className="Pokedex-winner">
                    <h1>Winning Hand</h1>
                </div>
            )
        } else {
            handInfo = (
                <div className="Pokedex-loser">
                    <h1>Losing Hand</h1>
                </div>
            )
        }
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {handInfo}
                <p>Total Exp: {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((poke) => (
                        <Pokecard imageNum={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default Pokedex;