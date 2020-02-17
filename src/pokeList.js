import React, { Component } from "react";
import PokeItem from './pokeItem';
//import PokeData from './data';

export default class PokeList extends Component {

    render() {
        const pokemonAPIData = this.props.pokemonData;
        console.log("HEY!", pokemonAPIData)
        const mappedCards = pokemonAPIData.map((object, index) => {
           return <PokeItem pokemonCard = {object} key={index}/>
        })
    
        
        return (
          <section>
    <div id="card-container">{mappedCards}</div>
</section>
)
}

}



    