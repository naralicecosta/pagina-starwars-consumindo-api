// src/components/StarshipDetails.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export type RouteParams = {
  id: string;
};

const StarshipDetails: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [starship, setStarship] = useState<any | null>(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/starships/${id}/`
        );
        setStarship(response.data);
      } catch (error) {
        console.error(`Error fetching starship ${id} details:`, error);
      }
    };

    fetchStarshipDetails();
  }, [id]);

  if (!starship) return <p>Carregando detalhes da nave...</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">{starship.name}</h2>
      <p>
        <strong>Modelo:</strong> {starship.model}
      </p>
      <p>
        <strong>Fabricante:</strong> {starship.manufacturer}
      </p>
    </div>
  );
};

export default StarshipDetails;
