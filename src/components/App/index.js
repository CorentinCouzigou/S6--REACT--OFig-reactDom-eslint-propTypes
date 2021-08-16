import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import listOfCharacters from '../../data/characters-full';
import listOfGames from '../../data/games';

import './styles.css';


export default class App extends React.PureComponent {
  state = {
    search:'',
    clickCaracter:'',
  };

  setSearch = (value) => {
    this.setState({
      search: value,
    });
  };
 setClickCaracter = (value) => {
   console.log(value.element)
   this.setState({
     clickCaracter:value.element,
   })
 }
  getFilterGames = () => {
    const filterGames = listOfGames.filter((element) => {
      const loweredName = element.toLowerCase();
      const loweredSearch = this.state.search.toLowerCase();
      return loweredName.includes(loweredSearch);
    })
 return filterGames;
  };
  
  getFilterCharacters = () => {
   const filterCharacters = listOfCharacters.filter((element)=> {
      const loweredName = element.game.toLowerCase();
     const loweredSearch = this.state.clickCaracter.toLowerCase();
     return loweredName.includes(loweredSearch);
   })
   return filterCharacters;
  };

 render() { 
 return (
  <div className="app">
    <Header listOfGames={this.getFilterGames()} setSearch={this.setSearch} />
    <Main listOfCharacters={this.getFilterCharacters()} listOfGames={this.getFilterGames()} setClickCaracter={this.setClickCaracter}/>
  </div>
 )};
};



