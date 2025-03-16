import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const MaisPedidos = () => {
  const items = [
    {
      title: 'Guioza',
      description: 'Delicioso Guioza de carne suína - 6 unidades. Acompanha molho Ponzu. *Somente na chapa*',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Original Burrito',
      description: 'Nori, Arroz, Salmão, Avocado, Maionese japonesa, Sunomono e Crispy de couve',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Poke da Galera',
      description: 'Este Poke foi criado pelos nossos clientes em forma de enquete no Instagram. Os ingredientes mais votados!',
      image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Torta de Chocolate',
      description: 'Torta de Chocolate com Caramelo salgado e Farofa de Castanha. *Não enviamos itens à parte*',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Limonada de Capim Santo',
      description: 'Suco de limão com Capim limão - Garrafa 300ml',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Mais Pedidos"
          subtitle="Os favoritos dos nossos clientes"
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

export default MaisPedidos;