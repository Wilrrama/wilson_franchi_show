"use client"

import { useState } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/gallery-1.jpg",
    alt: "Wilson Franchi em apresentação ao vivo",
    category: "Shows",
  },
  {
    id: 2,
    type: "image",
    src: "/images/gallery-2.jpg",
    alt: "Wilson Franchi no estúdio",
    category: "Estúdio",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-1.jpg",
    alt: "Clipe oficial",
    category: "Vídeos",
  },
  {
    id: 4,
    type: "image",
    src: "/images/gallery-3.jpg",
    alt: "Wilson Franchi com violão",
    category: "Bastidores",
  },
  {
    id: 5,
    type: "image",
    src: "/images/gallery-4.jpg",
    alt: "Show ao vivo com banda",
    category: "Shows",
  },
  {
    id: 6,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/images/video-thumb-2.jpg",
    alt: "Apresentação acústica",
    category: "Vídeos",
  },
]

const categories = ["Todos", "Shows", "Estúdio", "Bastidores", "Vídeos"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const currentIndex = selectedItem !== null 
    ? filteredItems.findIndex(item => item.id === selectedItem)
    : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1].id)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Galeria
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            FOTOS E VÍDEOS
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="relative aspect-square bg-card overflow-hidden cursor-pointer group"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{item.alt}</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {item.type === "video" ? (
                  <Play className="w-12 h-12 text-primary" />
                ) : (
                  <span className="text-sm tracking-widest uppercase text-foreground">
                    Ver
                  </span>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-background/80 px-3 py-1">
                <span className="text-xs tracking-widest uppercase text-primary">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 text-foreground hover:text-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 text-foreground hover:text-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="max-w-4xl w-full aspect-video bg-card flex items-center justify-center">
            {filteredItems[currentIndex]?.type === "video" ? (
              <iframe
                src={filteredItems[currentIndex].src}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-muted-foreground">
                {filteredItems[currentIndex]?.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
