"use client";

import { useState, useRef } from "react";
import { Play, Pause, ExternalLink, Music2 } from "lucide-react";

const albums = [
  {
    id: 1,
    title: "Natureza e Vida",
    year: "2023",
    cover: "/images/natureza_e_vida.jpg",
    tracks: [
      {
        name: "Ramalhete com Amor",
        duration: "3:45",
        src: "/audio/natureza_e_vida/01.Ramalhete com Amor.mp3",
      },
      {
        name: "Cheio de Amor e Paixão",
        src: "/audio/natureza_e_vida/02.Cheio de Amor e Paixão.mp3",
        duration: "4:12",
      },
      {
        name: "Amor e Amizade",
        src: "/audio/natureza_e_vida/03. Amor e Amizade.mp3",
        duration: "4:12",
      },
      {
        name: "A Cabana na Montanha",
        src: "/audio/natureza_e_vida/04. A Cabana na Montanha.mp3",
        duration: "4:12",
      },
      {
        name: "Minha Princesa",
        src: "/audio/natureza_e_vida/05. Minha Princesa.mp3",
        duration: "4:12",
      },
      {
        name: "Natureza é Vida",
        src: "/audio/natureza_e_vida/06. Natureza é Vida.mp3",
        duration: "4:12",
      },
      {
        name: "Cidade das Praias",
        src: "/audio/natureza_e_vida/07. Cidade das Praias.mp3",
        duration: "4:12",
      },
      {
        name: "Lambari na Frigideira",
        src: "/audio/natureza_e_vida/08.Lambari na Frigideira.mp3",
        duration: "4:12",
      },
      {
        name: "Viola Amiga",
        src: "/audio/natureza_e_vida/09. Viola Amiga.mp3",
        duration: "4:12",
      },
      {
        name: "A Família e a Viola",
        src: "/audio/natureza_e_vida/10.A Família e a Viola.mp3",
        duration: "4:12",
      },
    ],
    // spotifyUrl: "#",
  },
  {
    id: 2,
    title: "Rei do Sertão",
    year: "2021",
    cover: "/images/rei_do_sertao.jpg",
    tracks: [
      {
        name: "Caminheiro",
        src: "/audio/rei_do_sertao/faixa_1.mp3",
        duration: "4:12",
      },
      {
        name: "Minha Faculdade",
        src: "/audio/rei_do_sertao/Faixa_2.mp3",
        duration: "4:12",
      },
      {
        name: "Chora Chororo",
        src: "/audio/rei_do_sertao/Faixa_3.mp3",
        duration: "4:12",
      },
      {
        name: "Estrela Brilhante",
        src: "/audio/rei_do_sertao/Faixa_4.mp3",
        duration: "4:12",
      },
      {
        name: "Saudade vem, Saudade Vai",
        src: "/audio/rei_do_sertao/Faixa_5.mp3",
        duration: "4:12",
      },
      {
        name: "Anatomia da Viola",
        src: "/audio/rei_do_sertao/Faixa_6.mp3",
        duration: "4:12",
      },
      {
        name: "Rei do Sertão",
        src: "/audio/rei_do_sertao/Faixa_7.mp3",
        duration: "4:12",
      },
      {
        name: "Meu Rancho",
        src: "/audio/rei_do_sertao/Faixa_8.mp3",
        duration: "4:12",
      },
      {
        name: "Minha Rainha",
        src: "/audio/rei_do_sertao/Faixa_9.mp3",
        duration: "4:12",
      },
      {
        name: "Pagode Original",
        src: "/audio/rei_do_sertao/Faixa_10.mp3",
        duration: "4:12",
      },
    ],
    spotifyUrl: "#",
  },
  // {
  //   id: 3,
  //   title: "Ao Vivo em São Paulo",
  //   year: "2019",
  //   cover: "/images/album-3.jpg",
  //   tracks: [
  //     { name: "Abertura", duration: "2:30" },
  //     { name: "Cavaleiro Sonhador", duration: "4:45" },
  //     { name: "Chão Batido", duration: "3:55" },
  //     { name: "Tropeiro Velho", duration: "5:10" },
  //     { name: "Encerramento", duration: "3:00" },
  //   ],
  //   spotifyUrl: "#",
  // },
];

export function Discography() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (track: any) => {
    if (!track.src) return;

    if (playingTrack === track.name) {
      audioRef.current?.pause();
      setPlayingTrack(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = track.src;
        audioRef.current.play();
      }
      setPlayingTrack(track.name);
    }
  };

  return (
    <section id="discografia" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Discografia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            MÚSICAS E ÁLBUNS
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Album Covers */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {albums.map((album) => (
                <button
                  key={album.id}
                  onClick={() => setSelectedAlbum(album)}
                  className={`relative aspect-square bg-card overflow-hidden transition-all duration-300 ${
                    selectedAlbum.id === album.id
                      ? "ring-2 ring-primary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-muted flex items-center justify-center">
                    <Music2 className="w-8 h-8 text-muted-foreground" />
                  </div> */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-2">
                    <p className="text-xs text-foreground truncate">
                      {album.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {album.year}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Album Info */}
            <div className="bg-card p-6 border border-border">
              <div className="flex items-start gap-6">
                {/* <div className="w-32 h-32 bg-muted flex items-center justify-center shrink-0">
                  <Music2 className="w-12 h-12 text-muted-foreground" />
                </div> */}
                <img
                  src={selectedAlbum.cover}
                  alt={selectedAlbum.title}
                  className="w-32 h-32 object-cover shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-2xl mb-1">
                    {selectedAlbum.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {selectedAlbum.year}
                  </p>
                  {/* <a
                    href={selectedAlbum.spotifyUrl}
                    className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
                  >
                    Ouvir no Spotify
                    <ExternalLink className="w-4 h-4" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Track List */}
          <div className="bg-card border border-border">
            <div className="p-6 border-b border-border">
              <h3 className="font-serif text-xl">Faixas do Álbum</h3>
            </div>
            <div className="divide-y divide-border">
              {selectedAlbum.tracks.map((track, index) => (
                <button
                  key={track.name}
                  onClick={() => handlePlay(track)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors group"
                >
                  <span className="text-muted-foreground text-sm w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 text-left">
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      {track.name}
                    </p>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {track.duration}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {playingTrack === track.name ? (
                      <Pause className="w-4 h-4 text-primary" />
                    ) : (
                      <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Streaming Platforms */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-6">
            Disponível em todas as plataformas de streaming
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Spotify",
              "Apple Music",
              "YouTube Music",
              "Deezer",
              "Amazon Music",
            ].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
      <audio ref={audioRef} />
    </section>
  );
}
