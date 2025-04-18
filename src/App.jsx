import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./components/Card.jsx";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMSg, setErrorMsg] = useState("");

  const getPokemonData = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
      setErrorMsg('');
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemon(null);
      setErrorMsg('No Pokémon Found');
    }
  };

  const handleSubmit = () => {
    if (searchTerm) {
      getPokemonData(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="min-h-screen bg-slate-600 p-6 flex flex-col items-center">
      <form
        className="flex items-center space-x-2 bg-white rounded-lg shadow-md p-2 max-w-md w-full mb-6"
        onSubmit={(e) => {
          e.preventDefault();
          setPokemon(null);
          setErrorMsg('');
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Pokémon name"
          className="flex-grow p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => handleSubmit()}
          >
          Search
        </button>
      </form>
          {errorMSg && (
            <div className="text-red-400 text-8xl font-semibold mb-4">
              {errorMSg}
            </div>
          )}

      {pokemon && (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.sprites.front_default}
          types={pokemon.types.map((t) => t.type.name)}
          stats={pokemon.stats}
        />
      )}
    </div>
  );
}

export default App;
