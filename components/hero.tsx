"use client";

import { Play, Instagram, Facebook, Youtube } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Cantor / Compositor / Professor / Radialista
        </p>

        {/* <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-8">
          WILSON
          <br />
          <span className="text-primary">FRANCHI</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          A autenticidade do sertanejo raiz e a tradição da música regional brasileira
        </p> */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Texto */}
            <div className="text-center">
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider">
                WILSON
                <br />
                <span className="text-primary">FRANCHI</span>
              </h1>
            </div>

            {/* Imagem */}
            <div className="relative w-72 sm:w-96 lg:w-[450px]">
              <img
                src="/images/wilson_franchi.png"
                alt="Wilson Franchi"
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
              />
            </div>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed text-center">
            A autenticidade do sertanejo raiz e a tradição da música regional
            brasileira
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="#discografia"
            className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Ouça Agora
          </a>
          <a
            href="#contato"
            className="flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/franchiwilson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100067827196846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/@programacafeeviola8840"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">
            Role
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
