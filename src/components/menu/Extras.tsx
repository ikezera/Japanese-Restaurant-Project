import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Extras = () => {
  const items = [
    {
      title: 'Hashi',
      description: 'Par de hashi descartável',
      image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Shoyu',
      description: 'Sachê',
      image: 'https://images.unsplash.com/photo-1584706892740-f9f7a4f81b58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Wasabi',
      description: 'Sachê',
      image: 'https://images.unsplash.com/photo-1582516465944-9ac55e40c4a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 japanese-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Extras"
          subtitle="Complementos para sua refeição"
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

export default Extras;