import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <h2 className="text-lime-300 text-2xl font-semibold mb-6 animate-pulse">
        Loading Pokémon...
      </h2>
      <PacmanLoader
        color="#84cc16"
        loading={true}
        size={30}
        aria-label="Loading Pokémon Data"
        data-testid="loader"
      />
    </div>
  );
}
