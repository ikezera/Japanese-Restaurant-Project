import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Entradas = () => {
  const items = [
    {
      title: 'Guioza',
      description: 'Delicioso Guioza de carne suína - 6 unidades Acompanha molho Ponzu *Somente na chapa*',
      image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Noodles salad',
      description: 'Macarrão de batata doce, Shimeji, Shitake, Wakame, Cenoura, Cebola roxa, Cebolinha e Gergelim',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Entradas"
          subtitle="Comece sua refeição com nossas deliciosas entradas"
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

export default Entradas;