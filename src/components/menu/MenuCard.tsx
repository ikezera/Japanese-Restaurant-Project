import React from 'react';

interface MenuCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  tag?: string;
}

const MenuCard = ({ title, description, image, price, tag }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-1 p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {price && (
              <span className="ml-4 text-lg font-medium text-[rgb(119,218,206)]">
                {price}
              </span>
            )}
          </div>
          {tag && (
            <span className="inline-block px-2 py-1 mt-2 text-sm font-semibold text-white bg-[rgb(119,218,206)] rounded-full">
              {tag}
            </span>
          )}
          <p className="mt-3 text-gray-600">{description}</p>
        </div>
        <div className="md:w-48 h-48 md:h-auto relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuCard