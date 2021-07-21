import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let addZeros = (number) => {
    if (number < 999) {
        if (number < 99) {
            if (number <= 9) {
                number = "00" + number;
                return number;
            }
            number = "0" + number;
            return number;
        }
        return number;
    }
};

class Pokecard extends Component {
    render() {
        let pokemonImage = `${POKE_API}${addZeros(this.props.imageNum)}.png`;
        let classNameType = `Pokecard-${this.props.type}`
        return (
            <div className={classNameType}>
                <h1>{this.props.name}</h1>
                <img src={pokemonImage} alt={this.props.name} />
                <div>
                    Type: {this.props.type}
                </div>
                <div>
                    Experience: {this.props.exp}
                </div>
            </div>
        )
    }
}

export default Pokecard;