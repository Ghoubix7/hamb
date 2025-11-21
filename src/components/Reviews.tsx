import React from 'react'

const Reviews = () => {
  const reviews = [
    {name: 'João', text: 'Melhor hamburguer da cidade!'},
    {name: 'Maria', text: 'Atendimento top e sabor incrível.'},
    {name: 'Carlos', text: 'Recomendo demais!'}
  ]
  return (
    <section id="reviews" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center text-fire">Avaliações</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-zinc-900 rounded-lg">
              <p className="font-semibold">{r.name}</p>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
