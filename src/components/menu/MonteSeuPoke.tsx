import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const MonteSeuPoke = () => {
  const items = [
    {
      title: 'Monte seu *Mini* Poke',
      description: 'Pra você que tem pouca fome ou não quer sair da dieta. Monte do seu jeitinho :) *Não enviamos itens à parte*',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Monte seu Poke',
      description: 'Aqui você monta o Poke do jeito que preferir. Você é o Chef! *Não enviamos itens à parte*',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Monte Seu Poke"
          subtitle="Crie sua própria combinação perfeita"
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

export default MonteSeuPoke;