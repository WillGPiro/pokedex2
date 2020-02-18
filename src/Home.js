import React, { Component } from 'react'
import request from 'superagent';
import PokemonItem from './PokemonItem';
import SearchBar from  './searchBar';
import { Link } from 'react-router-dom';


export default class Home extends Component {
state = {
    pokeCharacters: [],
    searchQuery: this.props.match.params.pokemon, 
    searchByType: this.props.match.params.handleType,
}
//When the component initially mounts....
async componentDidMount() {
    //if there is a pokemon in the URL
    if (this.props.match.params.pokemon) {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.props.match.params.pokemon}`)
        console.log(`dataINFO, ${data}`)
        //set the state of pokeCharacters to the data of results pulled from the API. 
        this.setState({pokeCharacters: data.body.results})
    }
}
//.results on line 20 is actually the structure of the object we are pulling from. You can console log data to see. React requires 'body' this is a react thing. 

//when the search button is clicked we set get the value entered into the search bar (i.e. searchQuery) and updating the state of pokeCharacters on line 11 above.
handleSearch = async (e) => {
    //prevernt default refresh
    e.preventDefault();
    // go make fetch from the API passing arguments stored in state. searchByType is the radio button that changes what you are searching for.
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchByType}=${this.state.searchQuery}`)
//use the data from the fetch to update state.
    this.setState({ pokeCharacters: data.body.results })
//push the value of the search query into state. Changes the URL in the browser to reflect the searchQuery (i.e. what the user has typed in - e.g. charmander)
    this.props.history.push(`${this.state.searchByType}/${this.state.searchQuery}`)

}

handleType = (e) => this.setState({searchByType: e.target.value})

//get the value of the search input  and put it into state for use elsewhere. 
handleChange = (e) => this.setState({ searchQuery: e.target.value})


    render() {
        console.log('HEY', this.state.pokeCharacters)
        return (
            <div>
                <header>
                    {/* pass some callbacks so we can manipulate parent state from the child */}
                    <SearchBar
                        //this input value of the search is stored as state searchQuery is set on the searchBar.js
                        searchQuery={this.state.searchQuery}
                        //handleSearch is called on submit see searchBar.js
                        handleSearch={this.handleSearch}
                        handleChange={this.handleChange} 
                        //handleType is the props passed from the radio button on searchBar.js
                        handleType={this.handleType} />
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
