import React, { Component } from 'react';
import './App.css';
//import Search from './SearchOptions'
import {getCharacter} from './pokemon-api';
import {
  Route, 
  Link, 
  Switch,
  BrowserRouter as Router,} from 'react-router-dom';
import Detail from './Detail';
import AboutMe from './AboutMe';
import Home from './Home';


export default class App extends Component {
  state = {selected: null,
  pokemonItemData: []};

  async loadPokedex(){
    const infoResponse = await getCharacter();
    const pokemonItemData = infoResponse.results;
    const pokeCount = infoResponse.count;
    this.setState({pokemonItemData, pokeCount })

  }

//   async componentDidMount() {
//   const pokemonJsonData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
//   console.log(pokemonJsonData)
//   this.setState({ pokemonItemData: pokemonJsonData.body.results });
//   window.addEventListener("hashchange", async () => {
//     await this.loadPokedex();
//   });
// }

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
          <Route path="/detail/:pokeId" component={Detail}/>
          <Route exact path="/AboutMe/" component={AboutMe}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:pokemon" component={Home}/>
        </Switch>
        
      </div>
    </Router>
      );
    }
  }

    
  
 


