import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const MonteSeuBurrito = () => {
  const items = [
    {
      title: 'Monte seu Burrito',
      description: 'Aqui você monta o Burrito como preferir. Você é o Chef! *Não enviamos itens à parte*',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Monte Seu Burrito"
          subtitle="Crie seu burrito personalizado"
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

export default MonteSeuBurrito;