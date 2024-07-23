import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListWeapons: React.FC = () => {
  const [starships, setStarships] = useState<any[]>([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setStarships(response.data.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="mt-4 text-center">
      <div className="bg-gradient-to-b from-cyan-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            Lista de Naves e Armas
          </h2>
          <div className="flex w-full justify-center">
            <div className="w-1/2 p-4">
              <ul>
                {starships.slice(0, 5).map((character: any) => (
                  <li
                    key={character.name}
                    className="text-white bg-lime-900 rounded py-4 px-8 mb-3"
                  >
                    {character.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 p-4">
              <ul>
                {starships.slice(5, 10).map((starships: any) => (
                  <li
                    key={starships.name}
                    className="text-white bg-lime-900 rounded py-4 px-8 mb-3"
                  >
                    {starships.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4 mx-96">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded "
            >
              Voltar
            </Link>
            <Link
              to="/starships/2"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
            >
              Ver detalhes das naves
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListWeapons;
