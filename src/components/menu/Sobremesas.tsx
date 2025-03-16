import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Sobremesas = () => {
  const items = [
    {
      title: 'Torta de Chocolate',
      description: 'Torta de Chocolate com Caramelo salgado e Farofa de Castanha. *Não enviamos itens à parte*',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Sobremesas"
          subtitle="O toque final perfeito para sua refeição"
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

export default Sobremesas;