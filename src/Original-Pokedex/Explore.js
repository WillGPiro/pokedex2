import React, { Component } from "react";
import Paging from './Paging';
import Search from './SearchOptions'
import PokeList from "./pokeList";
import {getPokemon} from './pokemon-api'

export default class Explore extends Component {
    state = { pokemonItemData: [] };
  
    async loadPokemon() {
      const response = await getPokemon();
      const pokemonItemData = response.results;
      const totalResults = response.count;
      this.setState({ pokemonItemData, totalResults });
    }
  
    async componentDidMount() {
      await this.loadPokemon();
  
      //when hash changes rerender pokemon from API query. 
      window.addEventListener("hashchange", async () => {
        console.log("change");
        await this.loadPokemon();
      });
    }
  
    render() {
      const { pokemonItemData, totalResults } = this.state;
      return (
        <div>
          {/* <Header headerText="Welcome to Alchemy Movie Database" /> */}
          <main>
            <section className="options-section">
              <Search />
            </section>
  
            <section className="list-section">  
              <PokeList pokemonData={pokemonItemData} />
              <Paging totalResults={totalResults} />
            </section>
          </main>
        </div>
      );
    }
  }