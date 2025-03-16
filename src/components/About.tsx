import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="japanese-heading text-3xl font-extrabold text-gray-900 sm:text-4xl font-['Noto_Sans_JP']">
            Nossa História
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Conheça a jornada que nos trouxe até aqui
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(119,218,206)] rounded-full opacity-20"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nossa Origem</h3>
              <p className="text-gray-600">
                Fundado em 2020, o Poke You nasceu da paixão por unir os sabores tradicionais da culinária havaiana com toques únicos da gastronomia japonesa. Nossa jornada começou com um pequeno quiosque e cresceu para se tornar uma referência em pokes na cidade.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-600">
                Buscamos proporcionar uma experiência gastronômica única, combinando ingredientes frescos e de alta qualidade com um atendimento excepcional. Nosso compromisso é oferecer pratos saudáveis e deliciosos que respeitem as tradições culinárias que nos inspiram.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(119,218,206)]">5+</div>
                <div className="text-sm text-gray-600">Anos de História</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(119,218,206)]">20k+</div>
                <div className="text-sm text-gray-600">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[rgb(119,218,206)]">50+</div>
                <div className="text-sm text-gray-600">Combinações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;