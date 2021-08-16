import React from 'react'
import PropTypes from 'prop-types';
import Aside from '../Aside/Aside';
import Articles from '../Articles/Articles';
import './style.scss';

export default function Main({listOfCharacters, listOfGames, setClickCaracter}) {
  return (
    <div className="main_container">
      <Aside listOfGames ={listOfGames} setClickCaracter = {setClickCaracter}/>
      <Articles listOfCharacters={listOfCharacters} />

    </div>
  )
};
Main.propTypes = {
  listOfCharacters: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    game:PropTypes.string.isRequired
  })).isRequired,
  listOfGames: PropTypes.array.isRequired,
  setClickCaracter:PropTypes.func.isRequired,
}
