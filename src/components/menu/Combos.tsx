import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Combos = () => {
  const items = [
    {
      title: 'Poke + Suco',
      description: 'Escolha seu Poke e Suco preferido e aproveite a experiência completa :)',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'Economize R$ 5,00'
    },
    {
      title: 'Monte seu Poke + Suco',
      description: 'Monte o seu poke do jeito que preferir e escolha um suco com preço especial',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tag: 'Economize R$ 5,00'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Combos Especiais"
          subtitle="Aproveite nossos combos com desconto e cashback total!"
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

export default Combos;