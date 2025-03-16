import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const menuItems = [
    'Cardápio', 'Sobre', 'Combos', 'Mais Pedidos', 'Contato'
  ];

  return (
    <footer className="bg-gray-900 japanese-pattern">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[rgb(119,218,206)] text-lg font-semibold mb-4 japanese-heading">Poke You</h3>
            <p className="text-gray-400 text-sm">
              Sabores autênticos da culinária havaiana com um toque especial.
            </p>
          </div>

          <div>
            <h3 className="text-[rgb(119,218,206)] text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-[rgb(119,218,206)] text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[rgb(119,218,206)] text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@pokeyou.com.br</li>
              <li>Endereço: Rua Example, 123</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[rgb(119,218,206)] text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[rgb(119,218,206)] transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[rgb(119,218,206)] transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[rgb(119,218,206)] transition-colors duration-200">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Poke You. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;