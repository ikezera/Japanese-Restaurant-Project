import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Japanese food background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:w-2/3">
          <p className="text-[rgb(119,218,206)] text-lg font-semibold mb-2 japanese-heading">
            ポケユー
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-['Noto_Sans_JP']">
            Poke You
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Descubra a fusão perfeita entre a culinária havaiana e japonesa.
            Uma experiência única de sabores frescos e autênticos.
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="#combos"
              className="px-8 py-3 text-base font-medium text-white bg-[rgb(119,218,206)] hover:bg-[rgb(89,188,176)] rounded-md shadow transition-colors duration-200"
            >
              Peça Agora
            </a>
            <a
              href="#cardapio"
              className="px-8 py-3 text-base font-medium text-[rgb(119,218,206)] bg-white hover:bg-gray-50 rounded-md shadow transition-colors duration-200"
            >
              Ver Cardápio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;