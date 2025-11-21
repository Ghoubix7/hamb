import React from 'react'

const Hero = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold mb-4">Sinta o fogo do sabor</h2>
          <p className="text-lg mb-6">Hambúrgueres artesanais, smash e os melhores cremes da cidade.</p>
          <a href="#menu" className="inline-block px-6 py-3 bg-fire rounded-lg font-semibold">Ver Cardápio</a>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-gradient-to-br from-fire to-cheddar rounded-xl flex items-center justify-center text-black font-bold">
            Imagem de hambúrguer aqui
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
