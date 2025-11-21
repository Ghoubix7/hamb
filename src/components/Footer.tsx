import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} FireBurg - Todos os direitos</p>
        <p>Endereço: Sua Rua, 123 - Cidade</p>
      </div>
    </footer>
  )
}

export default Footer
