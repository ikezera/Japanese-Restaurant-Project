import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const PokeBurrito = () => {
  const items = [
    {
      title: 'Original Burrito',
      description: 'Nori, Arroz, Salmão, Avocado, Maionese japonesa, Sunomono e Crispy de couve',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Spicy Burrito',
      description: 'Nori, Arroz, Atum, Kimchi, Edamame, Tomate Sweet grape e Crispy de couve',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Veggie Burrito',
      description: 'Nori, Arroz, Shitake, Shimeji, Avocado, Edamame, Moyashi e Gari (gengibre)',
      image: 'https://images.unsplash.com/photo-1623341214825-7f586b389674?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Poke Burrito"
          subtitle="A fusão perfeita entre poke e burrito"
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

export default PokeBurrito;