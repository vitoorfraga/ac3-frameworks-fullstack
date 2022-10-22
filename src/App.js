import React from 'react'
import axios from 'axios'
import './App.css';
import PokemonCard from './components/PokemonCard';


function App() {

  const [pokemons, setPokemons] = React.useState([])

  const getPokemons = () =>{

    var endPoints = []

    for(let pokemon = 1; pokemon <= 151; pokemon++){
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    }

    var response = axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemons(res))
    return response

  }

  React.useEffect(() => {
    getPokemons()
  }, [])
  
  return (
    <>
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '58px'}}>Pokedex</h1>
      <p>Utilizei a <a href='https://pokeapi.co/'>PokeAPI</a> como Back-end para puxar informações e assim gerar um card para cada pokemon da primeira geração :).</p>
    </div>
    <div className="pokemon-list">
      {pokemons.map((pokemon, key) => (
        <PokemonCard
        key={key}
        picture={pokemon.data.sprites.front_default}
        name={pokemon.data.name}

        />
      ))}
    </div>
    </>
  );
}

export default App;
