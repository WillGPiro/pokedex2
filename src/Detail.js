import React, { Component } from 'react';
import PokemonItem from './PokemonItem'
import { getCharacter } from './pokemon-api';


export default class Detail extends Component {

    state = { pokemonState: {}}

    async componentDidMount() {
        const detailPokemonData = await getCharacter(this.props.match.params.pokeId)

        if (detailPokemonData.body.results)

        this.setState({ pokemonState: detailPokemonData.body.results[0] })
        console.log(detailPokemonData)
    }


    render() {
        const { pokemonState } = this.state; 
        
        return (
            <div>
            {console.log("hello")}
            {this.state.pokemonState.pokemon && <PokemonItem pokemonCard={ pokemonState }/>}

            </div>
        )
    }
}

