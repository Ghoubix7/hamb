import React from "react";

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400">
          Nosso Cardápio
        </h2>

        {/* HAMBÚRGUERES TRADICIONAIS */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-red-500">
            🍔 Hambúrgueres Tradicionais
          </h3>
          <ul className="space-y-3 text-lg">
            <li>• Hambúrguer Simples - R$ 14,90</li>
            <li>• Hambúrguer Duplo - R$ 21,90</li>
            <li>• X-Salada - R$ 18,90</li>
            <li>• X-Bacon - R$ 19,90</li>
            <li>• X-Egg - R$ 19,90</li>
            <li>• X-Tudo - R$ 24,90</li>
            <li>• Smash Tradicional - R$ 17,90</li>
          </ul>
        </div>

        {/* SUCOS NATURAIS */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-red-500">
            🥤 Sucos Naturais
          </h3>
          <ul className="space-y-3 text-lg">
            <li>• Laranja - R$ 6,50</li>
            <li>• Limão - R$ 6,50</li>
            <li>• Morango - R$ 7,50</li>
            <li>• Abacaxi com Hortelã - R$ 7,50</li>
            <li>• Maracujá - R$ 7,50</li>
          </ul>
        </div>

        {/* BATATAS FRITAS */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-red-500">
            🍟 Batatas Fritas
          </h3>
          <ul className="space-y-3 text-lg">
            <li>• Tradicional (P, M, G) - R$ 8,90 / 12,90 / 17,90</li>
            <li>• Batata Rústica - R$ 13,90</li>
            <li>• Cheddar + Bacon - R$ 16,90</li>
          </ul>
        </div>

        {/* ADICIONAIS */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6 text-red-500">
            ➕ Adicionais
          </h3>
          <ul className="space-y-3 text-lg">
            <li>• Bacon Extra - R$ 3,50</li>
            <li>• Cheddar Cremoso - R$ 3,50</li>
            <li>• Ovo - R$ 2,50</li>
            <li>• Onion Rings - R$ 6,90</li>
            <li>• Molhos Artesanais - R$ 1,50</li>
            <li>• Carne Extra - R$ 7,00</li>
            <li>• Queijo Extra - R$ 3,00</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
