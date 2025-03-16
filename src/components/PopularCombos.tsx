import React from 'react';

const combos = [
  {
    id: 1,
    name: 'Poke + Suco',
    description: 'Escolha seu Poke e Suco preferido e aproveite a experiência completa :)',
    savings: 'Economize: R$ 5,00',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Monte seu Poke + Suco',
    description: 'Monte o seu poke do jeito que preferir e escolha um suco com preço especial.',
    savings: 'Economize: R$ 5,00',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const PopularCombos = () => {
  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="japanese-heading text-3xl font-extrabold text-gray-900 sm:text-4xl font-['Noto_Sans_JP']">
            Combos Especiais
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Aproveite nossos combos com desconto e cashback total!
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={combo.image}
                  alt={combo.name}
                />
                <div className="absolute top-4 right-4 bg-[rgb(119,218,206)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {combo.savings}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {combo.name}
                </h3>
                <p className="mt-2 text-gray-600">{combo.description}</p>
                <button className="mt-4 w-full bg-[rgb(119,218,206)] text-white py-2 px-4 rounded-md hover:bg-[rgb(89,188,176)] transition-colors duration-200">
                  Pedir Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCombos;