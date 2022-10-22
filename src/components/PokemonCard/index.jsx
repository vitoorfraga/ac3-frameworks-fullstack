import React from 'react'
import './styles.css'

const PokemonCard = ({name, picture}) => {
  return (
    <div className='pokemon-card'>
      <img  src={picture} alt="" />
      <span>{name}</span>
    </div>
  )
}

export default PokemonCard
