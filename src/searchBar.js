import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        console.log('handleSearchTest',this.props.handleSearch)
        return (
            //use the callbacks that live on Home.js component. 
        <div className="SearchBar">

           <form onSubmit={this.props.handleSearch}>
           <input value={this.props.searchQuery}
           onChange={this.props.handleChange}/>
           <button>Search!</button>
           </form>

           <div>

                <label>
                    Name: <input  type="radio" name="searchRadioType" value="pokemon" onClick={this.props.handleType}></input>
                

                    Type:<input  type="radio" name="searchRadioType" value="type" onClick={this.props.handleType}></input>

                    Ability:<input  type="radio" name="searchRadioType" value="ability" onClick={this.props.handleType}></input>

                </label>

           </div>

        </div>
        )
    }
}
