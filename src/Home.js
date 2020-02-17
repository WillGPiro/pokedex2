import React, { Component } from 'react'
import request from 'superagent';
import PokemonItem from './PokemonItem';
import SearchBar from  './searchBar';
import { Link } from 'react-router-dom';


export default class Home extends Component {
state = {
    searchQuery: this.props.match.params.pokemon,
    pokeCharacters: [],
}

async componentDidMount() {
    if (this.props.match.params.pokemon) {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)
//body.results is actually the structure of the object we are pulling from. You can console log data to see. 
console.log(`dataINFO, ${data}`)
        this.setState({pokeCharacters: data.body.results})
    }
}

handleSearch = async (e) => {
    e.preventDefault();
console.log('Hey2',this.state.searchQuery)
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
    console.log(data)

    this.setState({
        pokeCharacters: data.body.results
    })

    this.props.history.push(this.state.searchQuery)

}

handleChange = (e) => this.setState({ searchQuery: e.target.value})

    render() {
        console.log('HEY', this.state.pokeCharacters)
        return (
            <div>
                <header>
                    <SearchBar
                        searchQuery={this.state.searchQuery}
                        handleSearch={this.handleSearch}
                        handleChange={this.handleChange} />
                </header>
                <ul> 
                    {
                        this.state.pokeCharacters.map(pokeCharacters => 
                            <Link to={`/detail/${pokeCharacters.pokemon}`}>
                                <PokemonItem pokemonCard={pokeCharacters} />
                            </Link>)
                    }   
                </ul>
               Home 
            </div>
        )
    }
}
