import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-32">
      <PacmanLoader
        color="#e879f9"
        loading={true}
        size={30}
        aria-label="Loading Pokemon Data"
        data-testid="loader"
      />
    </div>
  )
}
