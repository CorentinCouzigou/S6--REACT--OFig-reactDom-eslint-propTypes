import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Articles({listOfCharacters}) {
  const listCharacters = listOfCharacters.map((element) => {
    return (  
   <div key={element.id} game={element.game}  className="articles__article">
    <img src={element.image} alt="image de figurine" className="articles__image">
    </img>
    <span className="articles__articleName">
    {element.name}
    </span>
    </div>)
  });

  return (
    
    <div className="articles__container">
    {listCharacters}
   
    </div>
  )
}
Articles.propTypes = {
  listOfCharacters: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    game:PropTypes.string.isRequired
  })).isRequired,
}

