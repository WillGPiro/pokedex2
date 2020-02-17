import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import Search from './SearchOptions'
import {getPokemon} from './pokemon-api';
import Explore from './Explore';
import {
  Route, 
  Link, 
  Switch,
  BrowserRouter as Router,} from 'react-router-dom';
import Detail from './Detail';
import AboutMe from './AboutMe';


export default class App extends Component {
  state = {selected: null,
  pokemonItemData: []};

  async loadPokedex(){
    const infoResponse = await getPokemon();
    const pokemonItemData = infoResponse.results;
    const pokeCount = infoResponse.count;
    this.setState({pokemonItemData, pokeCount })

  }

  async componentDidMount() {
  const pokemonJsonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
  console.log(pokemonJsonData)
  this.setState({ pokemonItemData: pokemonJsonData.body.results });
  window.addEventListener("hashchange", async () => {
    await this.loadPokedex();
  });
}

  //  this.setState({you need to set global variables })
  render() {

      return (
      <Router>

      <div>
        <header className="search-header">
          Pokemon Search
          <hr/>
          <Link to="/">Home</Link><br/>
          <Link to="/AboutMe">About Me</Link><br/>
        </header>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route exact path="/AboutMe/" component={AboutMe}/>
        </Switch>
      </div>
    </Router>
      );
    }
  }

    
  
 


