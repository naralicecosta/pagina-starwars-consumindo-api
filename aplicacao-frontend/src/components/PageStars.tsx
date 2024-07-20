// src/components/PageStars.tsx

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/image/background.jpg";

const PageStars: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-gray-900 to-black text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Evita a repetição e cobre toda a área
        backgroundPosition: "center", // Centraliza a imagem na tela
        backgroundRepeat: "no-repeat", // Evita a repetição da imagem
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Bem-vindo ao Universo de Star Wars
        </h1>
        <p className="text-lg mb-8">
          Explore os personagens, naves e armas deste universo épico!
        </p>
        <div className="space-x-4">
          <Link
            to="/people"
            className="bg-emerald-600 hover:bg-emerald-400 text-white py-2 px-4 rounded"
          >
            Ver Personagens
          </Link>
          <Link
            to="/starchips"
            className="bg-emerald-600 hover:bg-emerald-400 text-white py-2 px-4 rounded"
          >
            Ver Naves e Armas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageStars;
