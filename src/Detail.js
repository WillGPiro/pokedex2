import React, { Component } from 'react';
import pokeItem from './pokeItem'
import { getPokemon } from './pokemon-api';
import pokeList from './pokeList';


export default class Detail extends Component {

    state = { pokemonState: {}}

    async componentDidMount() {
        const detailPokemonData = await getPokemon(this.props.match.params.pokemon)

        if (detailPokemonData.body.results)

        this.setState({ pokemonState: detailPokemonData.body.results[0] })
        console.log(detailPokemonData)
    }


    render() {
        const { pokemonState } = this.state; 
        
        return (
            <div>
            {console.log("hello")}
            <pokeItem pokemonCard={ pokemonState }/>

            </div>
        )
    }
}

