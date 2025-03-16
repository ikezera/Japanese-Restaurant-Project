import React from 'react';
import MenuCard from './MenuCard';
import SectionTitle from './SectionTitle';

const Bebidas = () => {
  const items = [
    {
      title: 'Pink Lemonade',
      description: 'Limonada Rosa. Feita com Limão e frutas vermelhas - Garrafa 300ml',
      image: 'https://images.unsplash.com/photo-1601409751311-cbecfe223af4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Limonada de Capim Santo',
      description: 'Suco de limão com Capim santo/ Capim Limão / Capim Cidreira - Garrafa 300ml',
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Manga com Maracujá',
      description: 'Suco de Manga com Maracujá',
      image: 'https://images.unsplash.com/photo-1622597467836-f3c7ca3b4c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Água com gás',
      description: '310ml',
      image: 'https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Água Mineral',
      description: '310ml',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Coca-Cola',
      description: '350ml',
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Guaraná',
      description: '350ml',
      image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Guaraná zero',
      description: '350ml',
      image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Chá Verde Feel Good Limão',
      description: 'Lata 330ml',
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Chá Branco Feel Good Lichia',
      description: 'Lata 330ml',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Heineken',
      description: '330ml',
      image: 'https://images.unsplash.com/photo-1618885764146-800bad0c0512?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corona',
      description: '330ml',
      image: 'https://images.unsplash.com/photo-1605751440019-402a2f52a761?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Bebidas"
          subtitle="Refrescantes opções para acompanhar seu pedido"
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

export default Bebidas;