import React, { Component } from 'react';
import PokemonItem from './PokemonItem'
import { getCharacter } from './pokemon-api';


export default class Detail extends Component {

    state = { pokemonState: {}}
// async means we will do some fetching in here
// componentDidMount means this will happen on the 'mount'of the component
    async componentDidMount() {
        //lets make a fetch using 'this.props.match.params.pokeID`, which comes from the URL thanks to the react router and our detail/:PokeId? route the colon in the route definition means it will be passed as a prop to the this component)
        const detailPokemonData = await getCharacter(this.props.match.params.pokeId)
//set the detailPokemonData to the value of the fetch. Everything lives on .body its part of SUPERAGENT
        if (detailPokemonData.body.results)

        this.setState({ pokemonState: detailPokemonData.body.results[0] })
        console.log(detailPokemonData)
    }


    render() {
        const { pokemonState } = this.state; 
        
        return (
            <div>
            {console.log("hello")}
            {/* render a PokemonItem, passing pokemonState state as a prop. */}
            {this.state.pokemonState.pokemon && <PokemonItem pokemonCard={ pokemonState }/>}

            </div>
        )
    }
}

