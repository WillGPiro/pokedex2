import React, { Component } from 'react'

export default class PokemonItem extends Component {
    render() {
        const { pokemonCard } = this.props;
        const {
            pokemon,
            hp,
            url_image, 
            height,
            description,
            weight,
            special_attack
        } = pokemonCard;

        console.log(pokemonCard)
        return (
            <article className ="pokemonCard-item" >  
            <h1>Name: { pokemon }</h1>
            <span>HP: { hp }</span>
            <img src={ url_image } alt={ pokemon}></img>
            <p>Height: { height }</p>
            <p>Description:{ description }</p>
            <p>Weight: { weight }</p>
            <p>Special Attack: { special_attack }</p>
    </article>
        )
    }
}

