import React, { Component } from "react"

export default class PokeItem extends Component {
    render() {
        //const pokemonCard = this.props.pokemonCard
        return (
            <article className ="pokemonCard-item" >  
                    <h1>Name: {this.props.pokemonCard.pokemon}</h1>
                    <span>HP: {this.props.pokemonCard.hp}</span>
                    <img src={this.props.pokemonCard.url_image} alt={this.props.pokemonCard.pokemon}></img>
                    <p>Height: {this.props.pokemonCard.height}</p>
                    <p>Description:{this.props.pokemonCard.description}</p>
                    <p>Weight: {this.props.pokemonCard.weight}</p>
                    <p>Special Attack: {this.props.pokemonCard.special_attack}</p>
            </article>
           

        )
    }

}   
