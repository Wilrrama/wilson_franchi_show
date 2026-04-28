"use client";

import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/estudio/estudio1.jpg",
    alt: "Wilson Franchi em apresentação ao vivo",
    category: "Estúdio",
  },
  {
    id: 2,
    type: "image",
    src: "/images/estudio/estudio2.jpg",
    alt: "Wilson Franchi no estúdio",
    category: "Estúdio",
  },
  {
    id: 3,
    type: "image",
    src: "/images/estudio/estudio3.jpg",
    alt: "Wilson Franchi no estúdio",
    category: "Estúdio",
  },
  {
    id: 4,
    type: "image",
    src: "/images/estudio/estudio4.jpg",
    alt: "Wilson Franchi no estúdio",
    category: "Estúdio",
  },
  {
    id: 5,
    type: "image",
    src: "/images/estudio/estudio5.jpg",
    alt: "Wilson Franchi no estúdio",
    category: "Estúdio",
  },
  {
    id: 6,
    type: "image",
    src: "/images/show/show1.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },

  {
    id: 7,
    type: "image",
    src: "/images/show/show2.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 8,
    type: "image",
    src: "/images/show/show3.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 9,
    type: "image",
    src: "/images/show/show4.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 10,
    type: "image",
    src: "/images/show/show5.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 11,
    type: "image",
    src: "/images/show/show6.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 12,
    type: "image",
    src: "/images/show/show7.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 13,
    type: "image",
    src: "/images/show/show8.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 14,
    type: "image",
    src: "/images/show/show9.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 15,
    type: "image",
    src: "/images/show/show10.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 16,
    type: "image",
    src: "/images/show/show11.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 17,
    type: "image",
    src: "/images/show/show12.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 18,
    type: "image",
    src: "/images/show/show13.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 19,
    type: "image",
    src: "/images/show/show14.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 20,
    type: "image",
    src: "/images/show/show15.jpg",
    alt: "Wilson Franchi com violão",
    category: "Shows",
  },
  {
    id: 21,
    type: "image",
    src: "/images/estudio/estudio6.jpg",
    alt: "Wilson Franchi com violão",
    category: "Estúdio",
  },
  {
    id: 22,
    type: "image",
    src: "/images/estudio/estudio7.jpg",
    alt: "Wilson Franchi com violão",
    category: "Estúdio",
  },
  {
    id: 23,
    type: "image",
    src: "/images/estudio/estudio8.jpg",
    alt: "Wilson Franchi com violão",
    category: "Estúdio",
  },
  {
    id: 24,
    type: "video",
    src: "/video/Champagne_Peppino_di_Capri.mp4",
    thumbnail: "/video/Champagne_Peppino_di_Capri.png",
    alt: "Apresentação ao vivo",
    category: "Vídeos",
  },
  {
    id: 25,
    type: "video",
    src: "https://www.youtube.com/embed/3livsQgme1I",
    thumbnail: "/video/sta_albertina.png",
    alt: "Clipe Sta Albertina",
    category: "Vídeos",
  },
];

const categories = ["Todos", "Shows", "Estúdio", "Vídeos"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentIndex =
    selectedItem !== null
      ? filteredItems.findIndex((item) => item.id === selectedItem)
      : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1].id);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Galeria
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            FOTOS E VÍDEOS
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Filtro */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="relative aspect-square bg-card overflow-hidden cursor-pointer group"
            >
              {/* Imagem / Thumbnail */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              )}

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

              {/* Badge */}
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
      {selectedItem !== null && currentIndex !== -1 && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 text-foreground hover:text-primary"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 text-foreground hover:text-primary"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <div className="max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
            {filteredItems[currentIndex].type === "video" ? (
              <iframe
                src={filteredItems[currentIndex].src}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={filteredItems[currentIndex].src}
                alt={filteredItems[currentIndex].alt}
                className="max-h-[80vh] w-auto object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
