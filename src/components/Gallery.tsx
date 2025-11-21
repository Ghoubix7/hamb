import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6 text-center text-fire">Galeria</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-40 bg-zinc-800 rounded-lg flex items-center justify-center">Foto 1</div>
          <div className="h-40 bg-zinc-800 rounded-lg flex items-center justify-center">Foto 2</div>
          <div className="h-40 bg-zinc-800 rounded-lg flex items-center justify-center">Foto 3</div>
          <div className="h-40 bg-zinc-800 rounded-lg flex items-center justify-center">Foto 4</div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
