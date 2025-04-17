import React, { useState, useEffect } from 'react'
import "./index.css";
import PokemonCard from './components/Card.jsx'
import axios from 'axios';
function App() {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  async function getPokemonData(url) {
    try {
      const response = await axios.get(url);
      const data = (response.data);
      setPokemon([data]);

    } catch (error) {
      console.error(error.message, 'error found');
    }
  }

  useEffect(() => {
    if (searchTerm) {
      getPokemonData(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
    }
  }, [searchTerm])


  return (
    <div className="min-h-screen bg-slate-600 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">

      <form className="flex items-center space-x-2" onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm) {
          getPokemonData('https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}')
        }
     }}>
  <input
    type="text"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
    placeholder="Enter Pokémon name"
    className="flex-grow p-2 rounded-lg border text-center border-gray-300 focus:outline-none"
  />
</form>
      {pokemon.map((p) => (
        <PokemonCard
          key={p.id}
          id={p.id}
          name={p.name}
          imageUrl={p.sprites.front_default}
          types={p.types.map((t) => t.type.name)}
          stats={p.stats}
        />
      ))}
    </div>
  );
}

export default App
