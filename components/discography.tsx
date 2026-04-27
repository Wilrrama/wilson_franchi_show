"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react";

const albums = [
  {
    id: 1,
    title: "Natureza e Vida",
    year: "2023",
    cover: "/images/natureza_e_vida.png",
    tracks: [
      {
        name: "Ramalhete com Amor",
        src: "/audio/natureza_e_vida/01.Ramalhete com Amor.mp3",
      },
      {
        name: "Cheio de Amor e Paixão",
        src: "/audio/natureza_e_vida/02.Cheio de Amor e Paixão.mp3",
      },
      {
        name: "Amor e Amizade",
        src: "/audio/natureza_e_vida/03. Amor e Amizade.mp3",
      },
      {
        name: "A Cabana na Montanha",
        src: "/audio/natureza_e_vida/04. A Cabana na Montanha.mp3",
      },
      {
        name: "Minha Princesa",
        src: "/audio/natureza_e_vida/05. Minha Princesa.mp3",
      },
      {
        name: "Natureza é Vida",
        src: "/audio/natureza_e_vida/06. Natureza é Vida.mp3",
      },
      {
        name: "Cidade das Praias",
        src: "/audio/natureza_e_vida/07. Cidade das Praias.mp3",
      },
      {
        name: "Lambari na Frigideira",
        src: "/audio/natureza_e_vida/08.Lambari na Frigideira.mp3",
      },
      {
        name: "Viola Amiga",
        src: "/audio/natureza_e_vida/09. Viola Amiga.mp3",
      },
      {
        name: "A Família e a Viola",
        src: "/audio/natureza_e_vida/10.A Família e a Viola.mp3",
      },
    ],
  },
  {
    id: 2,
    title: "Rei do Sertão",
    year: "2021",
    cover: "/images/rei_do_sertao.png",
    tracks: [
      { name: "Caminheiro", src: "/audio/rei_do_sertao/faixa_1.mp3" },
      { name: "Minha Faculdade", src: "/audio/rei_do_sertao/Faixa_2.mp3" },
      { name: "Chora Chororo", src: "/audio/rei_do_sertao/Faixa_3.mp3" },
      { name: "Estrela Brilhante", src: "/audio/rei_do_sertao/Faixa_4.mp3" },
      {
        name: "Saudade vem, Saudade Vai",
        src: "/audio/rei_do_sertao/Faixa_5.mp3",
      },
      { name: "Anatomia da Viola", src: "/audio/rei_do_sertao/Faixa_6.mp3" },
      { name: "Rei do Sertão", src: "/audio/rei_do_sertao/Faixa_7.mp3" },
      { name: "Meu Rancho", src: "/audio/rei_do_sertao/Faixa_8.mp3" },
      { name: "Minha Rainha", src: "/audio/rei_do_sertao/Faixa_9.mp3" },
      { name: "Pagode Original", src: "/audio/rei_do_sertao/Faixa_10.mp3" },
    ],
  },
];

export function Discography() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null,
  );
  const [durations, setDurations] = useState<Record<string, string>>({});
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Carrega duração das músicas
  useEffect(() => {
    selectedAlbum.tracks.forEach((track) => {
      if (!track.src || durations[track.name]) return;

      const audio = new Audio(track.src);
      audio.addEventListener("loadedmetadata", () => {
        setDurations((prev) => ({
          ...prev,
          [track.name]: formatTime(audio.duration),
        }));
      });
    });
  }, [selectedAlbum]);

  // Atualiza tempo e duração
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMetadata = () => setTotalDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMetadata);
    };
  }, []);

  // Trocar música
  const playTrackByIndex = (index: number) => {
    const track = selectedAlbum.tracks[index];
    if (!track) return;

    if (audioRef.current) {
      audioRef.current.src = track.src;
      audioRef.current.play();
    }

    setPlayingTrack(track.name);
    setCurrentTrackIndex(index);
  };

  const handlePlay = (track: any, index: number) => {
    if (playingTrack === track.name) {
      audioRef.current?.pause();
      setPlayingTrack(null);
      setCurrentTrackIndex(null);
    } else {
      playTrackByIndex(index);
    }
  };

  const handleNext = () => {
    if (currentTrackIndex === null) return;
    const next =
      currentTrackIndex + 1 < selectedAlbum.tracks.length
        ? currentTrackIndex + 1
        : 0;
    playTrackByIndex(next);
  };

  const handlePrev = () => {
    if (currentTrackIndex === null) return;
    const prev =
      currentTrackIndex - 1 >= 0
        ? currentTrackIndex - 1
        : selectedAlbum.tracks.length - 1;
    playTrackByIndex(prev);
  };

  const handleSeek = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleClose = () => {
    audioRef.current?.pause();
    setPlayingTrack(null);
    setCurrentTrackIndex(null);
    setCurrentTime(0);
  };

  return (
    <section id="discografia" className="py-24 bg-background pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- SEÇÃO NORMAL MANTIDA --- */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-6">
            {albums.map((album) => (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album)}
                className={`relative aspect-square overflow-hidden ${
                  selectedAlbum.id === album.id
                    ? "ring-2 ring-primary"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          <div className="bg-card border border-border">
            <div className="divide-y divide-border">
              {selectedAlbum.tracks.map((track, index) => (
                <button
                  key={track.name}
                  onClick={() => handlePlay(track, index)}
                  className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors group"
                >
                  <span className="w-6 text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 text-left">
                    <p className="group-hover:text-primary">{track.name}</p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {durations[track.name] || "--:--"}
                  </span>

                  {playingTrack === track.name ? (
                    <Pause className="w-4 h-4 text-primary" />
                  ) : (
                    <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PLAYER FIXO */}
      {playingTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-3">
            {/* Linha superior */}
            <div className="flex justify-between items-center">
              <p className="text-sm">
                Tocando: <span className="text-primary">{playingTrack}</span>
              </p>

              <button onClick={handleClose}>
                <X className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-6">
              <button onClick={handlePrev}>
                <SkipBack className="w-5 h-5 hover:text-primary" />
              </button>

              <button
                onClick={() =>
                  audioRef.current?.paused
                    ? audioRef.current?.play()
                    : audioRef.current?.pause()
                }
              >
                {audioRef.current?.paused ? (
                  <Play className="w-6 h-6 text-primary" />
                ) : (
                  <Pause className="w-6 h-6 text-primary" />
                )}
              </button>

              <button onClick={handleNext}>
                <SkipForward className="w-5 h-5 hover:text-primary" />
              </button>
            </div>

            {/* Barra */}
            <input
              type="range"
              min={0}
              max={totalDuration || 0}
              value={currentTime}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="w-full"
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(totalDuration)}</span>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} />
    </section>
  );
}
