// components/PokemonCard.jsx
import React from 'react';

export default function PokemonCard({ id, name, imageUrl, types = [], stats = [] }) {
    return (
      <div>
    <div className="max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
      {/* Image */}
      <div className="bg-gray-100 p-6 flex justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-28 h-28 object-contain drop-shadow-md"
          />
      </div>

      {/* Info */}
      <div className="p-5 space-y-4">
        <h3 className="font-extrabold text-gray-800 text-3xl text-center tracking-wide">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <p className="text-sm text-gray-500 text-center"># {String(id).padStart(3, '0')}</p>

        {/* Type badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {types.map((type, index) => (
              <span
              key={index}
              className="px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-300"
            >
              {type.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        <h4 className='text-center text-xl font-bold text-gray-700 mt-6 underline underline-offset-4'>Stats</h4>
        <div className='flex flex-col gap-3 mt-4'>
          {stats.map((stat, index) => (
              <div
              key={index}
              className='flex justify-between items-center px-4 py-2 rounded-md bg-teal-100 text-teal-900 font-medium shadow-sm'
              >
              <span className='capitalize'>{stat.stat.name.replace('-', ' ')}</span>
              <span className="font-bold">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
