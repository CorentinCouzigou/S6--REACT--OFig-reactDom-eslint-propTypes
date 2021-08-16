import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


export default function Header({listOfGames, setSearch}) {7
  const numberOfGames = listOfGames.length;

  const handleForm = (event) => {
  event.preventDefault();
  console.log('eventForm',event.target[0].value)
  }

  const handleOnChange = (event) => {
  setSearch(event.target.value);
  }
 
  return (
    <div className="header__container">
      <h1 className="header__title">oFig - nintendo</h1>
      <p className="Header__numberOfGames">{numberOfGames} jeux</p>
      <input className="Header__input" type="search" id="site-search" placeholder="Rechercher..." onChange={handleOnChange}/>
    </div>
  )
}
Header.propTypes = {
  listOfGames: PropTypes.array.isRequired,
  setSearch: PropTypes.func.isRequired,
}
