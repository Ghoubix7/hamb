import React from 'react'

const Promotions = () => {
  return (
    <section id="promotions" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center text-fire">Promoções</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900 rounded-lg">
            <h4 className="font-semibold mb-2">Combo Solo</h4>
            <p>Hambúrguer + Batata média + Suco - R$ 27,90</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-lg">
            <h4 className="font-semibold mb-2">Combo Casal</h4>
            <p>2x Hambúrguer + 2 Batatas + 2 Sucos - R$ 49,90</p>
          </div>
          <div className="p-6 bg-zinc-900 rounded-lg">
            <h4 className="font-semibold mb-2">Quarta do Smash</h4>
            <p>Smash por R$ 14,90 (somente quarta)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions
