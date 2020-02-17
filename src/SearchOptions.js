import React, { Component } from "react"

export default class Search extends Component {
    state = {
        searchPokemon: ''
    }
    handleForm = event => {
        if(!this.state.searchPokemon){
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const queryParam = new URLSearchParams();
        queryParam.set('pokemon', this.state.searchPokemon);
        queryParam.set('page', 1)
        window.location.hash = queryParam.toString();
    }
    render() {
        return(
            <div id="search">
                SOME TEXT
                <form onSubmit={this.handleForm}>
                <input 
                onChange={e => this.setState({ searchPokemon: e.target.value})} 
                value={this.state.searchPokemon}/>
                <button>Search</button>
                </form>           
            </div>
        );
    }
}