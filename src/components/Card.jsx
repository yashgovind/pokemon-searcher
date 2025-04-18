import React from 'react';

const typeColors = {
  normal: 'bg-gray-300 text-gray-800',
  fire: 'bg-orange-400 text-white',
  water: 'bg-blue-400 text-white',
  grass: 'bg-green-400 text-white',
  electric: 'bg-yellow-300 text-yellow-900',
  ice: 'bg-cyan-300 text-cyan-900',
  fighting: 'bg-red-600 text-white',
  poison: 'bg-purple-400 text-white',
  ground: 'bg-yellow-600 text-white',
  flying: 'bg-indigo-300 text-indigo-900',
  psychic: 'bg-pink-400 text-white',
  bug: 'bg-lime-500 text-black',
  rock: 'bg-yellow-800 text-white',
  ghost: 'bg-indigo-700 text-white',
  dragon: 'bg-purple-700 text-white',
  dark: 'bg-gray-800 text-white',
  steel: 'bg-gray-400 text-black',
  fairy: 'bg-pink-300 text-pink-900',
};

export default function PokemonCard({ id, name, imageUrl, types = [], stats = [] }) {
  return (
    <div className="max-w-lg w-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-2xl shadow-2xl p-5 border border-slate-300 transition hover:scale-105 duration-300">

      {/* Header Section */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 object-contain drop-shadow-md"
        />
        <h3 className="text-4xl font-extrabold text-slate-800 tracking-wide">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <p className="text-sm text-gray-500"># {String(id).padStart(3, '0')}</p>
      </div>

      {/* Types */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {types.map((type, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-sm font-semibold rounded-full border shadow-sm ${
              typeColors[type] || 'bg-gray-200 text-gray-700'
            }`}
          >
            {type.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Stats */}
      <h4 className="text-center text-xl font-bold text-slate-700 mt-6 underline underline-offset-4">Stats</h4>
      <div className="mt-4 space-y-3">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm font-semibold text-slate-700 mb-1">
              <span className="capitalize">{stat.stat.name.replace('-', ' ')}</span>
              <span>{stat.base_stat}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
