import React from 'react';

const popularItems = [
  {
    id: 1,
    name: 'Guioza',
    description: 'Delicioso Guioza de carne suína - 6 unidades. Acompanha molho Ponzu. *Somente na chapa*.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Original Burrito',
    description: 'Nori, Arroz, Salmão, Avocado, Maionese japonesa, Sunomono e Crispy de couve.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Poke da Galera',
    description: 'Este Poke foi criado pelos nossos clientes em forma de enquete no Instagram. Os ingredientes mais votados!',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const MostOrdered = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="japanese-heading text-3xl font-extrabold text-gray-900 sm:text-4xl font-['Noto_Sans_JP']">
            Os Mais Pedidos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descubra os favoritos dos nossos clientes
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {item.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button className="mt-4 w-full bg-[rgb(119,218,206)] text-white py-2 px-4 rounded-md hover:bg-[rgb(89,188,176)] transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostOrdered;