import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setCharacters(response.data.results);
      } catch (error) {
        console.log("Erro ao buscar personagens", error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className="mt-4 text-center">
      <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Lista de Personagens</h2>
          <div className="flex w-full justify-center">
            <div className="w-1/2 p-4">
              <ul>
                {characters.slice(0, 5).map((character: any) => (
                  <li
                    key={character.name}
                    className="text-white bg-orange-500 rounded py-4 px-8 mb-3"
                  >
                    {character.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 p-4">
              <ul>
                {characters.slice(5, 10).map((character: any) => (
                  <li
                    key={character.name}
                    className="text-white bg-orange-500 rounded py-4 px-8 mb-3"
                  >
                    {character.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 mx-96">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
