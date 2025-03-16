import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Combos from './components/menu/Combos';
import MaisPedidos from './components/menu/MaisPedidos';
import Entradas from './components/menu/Entradas';
import MonteSeuPoke from './components/menu/MonteSeuPoke';
import Pokes from './components/menu/Pokes';
import MonteSeuBurrito from './components/menu/MonteSeuBurrito';
import PokeBurrito from './components/menu/PokeBurrito';
import Sobremesas from './components/menu/Sobremesas';
import Bebidas from './components/menu/Bebidas';
import Extras from './components/menu/Extras';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="combos"><Combos /></div>
        <div id="mais-pedidos"><MaisPedidos /></div>
        <div id="entradas"><Entradas /></div>
        <div id="monte-seu-poke"><MonteSeuPoke /></div>
        <div id="pokes"><Pokes /></div>
        <div id="monte-seu-burrito"><MonteSeuBurrito /></div>
        <div id="poke-burrito"><PokeBurrito /></div>
        <div id="sobremesas"><Sobremesas /></div>
        <div id="bebidas"><Bebidas /></div>
        <div id="extras"><Extras /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;