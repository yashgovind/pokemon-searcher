import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./components/Card.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMSg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

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
    finally {
      setLoader(false);
    }
  };

  const handleSubmit = () => {
    if (!searchTerm) return;
    setLoader(true);
    setPokemon(null);
    setErrorMsg("");
    setTimeout(() => {
        getPokemonData(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
      }, 2500);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-6 flex flex-col items-center text-white transition-all duration-300 ease-in-out">
    <form
      className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 max-w-md w-full mb-6 border border-slate-500 hover:shadow-xl transition"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Pokémon name"
        className="flex-grow p-3 rounded-l-lg bg-white/80 placeholder-slate-500 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-lime-500 text-white rounded-r-lg font-semibold shadow-md hover:bg-lime-400 active:scale-95 transition-all duration-200"
      >
        Search
      </button>
    </form>

    {loader && <Loader />}

    {errorMSg && (
      <div className="text-red-400 text-2xl md:text-4xl font-semibold mb-4 animate-pulse text-center">
        {errorMSg}
      </div>
    )}

    {pokemon && !loader && (
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
