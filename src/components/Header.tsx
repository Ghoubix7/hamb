import React from 'react'

const Header = () => {
  return (
    <header className="py-6 px-6 bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-fire rounded-full flex items-center justify-center text-black font-bold">FB</div>
          <h1 className="text-2xl font-bold">FireBurg</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#menu" className="hover:text-cheddar">Cardápio</a>
          <a href="#promotions" className="hover:text-cheddar">Promoções</a>
          <a href="#about" className="hover:text-cheddar">Sobre</a>
          <a href="#gallery" className="hover:text-cheddar">Galeria</a>
        </nav>
        <a href="https://wa.me/5511999999999" className="bg-cheddar text-black px-4 py-2 rounded-lg font-semibold">Peça pelo WhatsApp</a>
      </div>
    </header>
  )
}

export default Header
