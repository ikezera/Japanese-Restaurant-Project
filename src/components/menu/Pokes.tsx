import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Pokes = () => {
  const items = [
    {
      title: 'Poke da Galera',
      description: 'Este Poke foi criado pelos nossos clientes em forma de enquete no Instagram. Os ingredientes mais votados!',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Poke Low Carb',
      description: 'Mix de folhas, Salmão e Shimeji, Castanha de caju, Wakame salad, Edamame, Moyashi, Gari e Tomate sweet grape',
      image: 'https://images.unsplash.com/photo-1597959491627-51a6c2894da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Spicy Poke',
      description: 'Arroz, Atum e Polvo, Kimchi, Avocado, Castanha de caju, Edamame, Tomate sweet grape e Sunomono',
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cogu Poke',
      description: 'Arroz, Shimeji e Shitake, Avocado, Wakame Salad, Manga, Sunomono, Crispy de couve e Tomate Sweet grape',
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Chicken Poke',
      description: 'Arroz, Frango grelhado (frio), Maionese Japonesa, Milho Torrado, Raspas de Limão Siciliano, Tomatinho e Sunomono',
      image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'Novidade'
    },
    {
      title: 'Camarão Poke',
      description: 'Arroz, Mix de folhas, Camarão cozido, Guacamole, Manga, Cebola Crispy, Cream cheese, Tomatinho e Sunomono',
      image: 'https://images.unsplash.com/photo-1632557949403-0fa6dd9c5cd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'Novidade'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Pokes"
          subtitle="Nossos pokes tradicionais"
        />
        <div className="space-y-6">
          {items.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pokes;