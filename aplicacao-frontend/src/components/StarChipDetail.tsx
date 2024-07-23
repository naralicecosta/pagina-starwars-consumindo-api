import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export type RouteParams = {
  id: string;
};

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
};

const StarShipDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [starships, setStarships] = useState<Starship[]>([]);
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/`);
        setStarships(response.data.results);
      } catch (error) {
        console.error(`Erro ao listar naves:`, error);
      }
    };

    const fetchStarshipDetails = async (shipId: string) => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/starships/${shipId}/`
        );
        setStarship(response.data);
      } catch (error) {
        console.error(`Erro ao buscar detalhes da nave ${shipId}:`, error);
      }
    };

    if (id) {
      fetchStarshipDetails(id);
    } else {
      fetchStarships();
    }
  }, [id]);

  const handleShowAnotherShip = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/starships/`);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      setStarship(response.data.results[randomIndex]);
    } catch (error) {
      console.error(`Error fetching random starship:`, error);
    }
  };

  if (!id) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="text-black">
          <h2 className="text-3xl font-semibold mb-4">Lista de Naves</h2>
          <ul>
            {starships.map((starship: Starship) => (
              <li key={starship.name} className="text-lg mb-2">
                {starship.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (!starship)
    return <p className="text-black">Carregando detalhes da nave...</p>;

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 to-blue-200 text-white">
      <div className="p-6 bg-slate-950 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-semibold mb-4">{starship.name}</h2>
        <p className="text-lg">
          <strong>Modelo:</strong> {starship.model}
        </p>
        <p className="text-lg">
          <strong>Fabricante:</strong> {starship.manufacturer}
        </p>
      </div>
      <button
        onClick={handleShowAnotherShip}
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
      >
        Mostrar outra nave
      </button>
      <Link
        to="/starchips"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Voltar
      </Link>
    </div>
  );
};

export default StarShipDetail;
