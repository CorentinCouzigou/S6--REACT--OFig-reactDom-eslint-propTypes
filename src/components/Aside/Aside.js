import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Aside({listOfGames, setClickCaracter}) {

  const listGames = listOfGames.map((element) => {
  return (<li key={element} name={element} className="aside__nameArticles" onClick={() =>{setClickCaracter({element})}}>{element}</li>)
 
});

  return (
    <div className="aside__container">
      <ul className="aside__list">
        {listGames}
      </ul>
    </div>
  )
}
Aside.propTypes = {
  listOfGames: PropTypes.array.isRequired,
  setClickCaracter:PropTypes.func.isRequired,
}
