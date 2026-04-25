"use client";

import { Radio, Clock, Calendar, Headphones, Volume2 } from "lucide-react";

const schedule = [
  {
    day: "Segunda a Sexta",
    time: "06:00 - 09:00",
    program: "Manhã Sertaneja",
    description:
      "Comece o dia com as melhores músicas sertanejas e causos do interior.",
  },
  {
    day: "Sábado",
    time: "10:00 - 12:00",
    program: "Viola e Poesia",
    description: "Especial de modas de viola e poesias caipiras tradicionais.",
  },
  {
    day: "Domingo",
    time: "08:00 - 11:00",
    program: "Raízes do Brasil",
    description: "Uma viagem pela história da música regional brasileira.",
  },
];

const highlights = [
  {
    icon: Headphones,
    value: "15+",
    label: "Anos no Rádio",
  },
  {
    icon: Volume2,
    value: "1000+",
    label: "Programas",
  },
  {
    icon: Calendar,
    value: "1",
    label: "Programa Semanal",
  },
];

export function RadioSection() {
  return (
    <section id="radio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            No Ar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            PROGRAMA DE RÁDIO
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Levando a autêntica música sertaneja e regional para milhares de
            ouvintes através das ondas do rádio.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Live Player */}
        <div className="bg-card border border-primary p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <Radio className="w-10 h-10 text-primary" />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-primary text-sm tracking-widest uppercase mb-2">
                Ao Vivo Agora
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mb-1">
                Café e Viola com Polenta
              </h3>
              <p className="text-muted-foreground text-sm">
                Rádio FM Vida Nova - Segunda a Sexta, 07:00 - 10:00
              </p>
            </div>

            <a
              href="https://www.fmvidanova.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 flex items-center gap-3"
            >
              <Volume2 className="w-4 h-4" />
              Ouvir Ao Vivo
            </a>
          </div>
        </div>

        {/* Schedule */}
        <div>
          <h3 className="font-serif text-2xl text-center mb-8">Programação</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {schedule.map((item) => (
              <div
                key={item.program}
                className="bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-primary text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{item.day}</span>
                </div>

                <h4 className="font-serif text-xl mb-2">{item.program}</h4>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Radio Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Sintonize a Rádio FM Vida Nova
          </p>
          <p className="font-serif text-4xl text-primary">104.9</p>
          <p className="text-muted-foreground text-sm mt-2">
            Cobertura em todo o interior de São Paulo
          </p>
        </div>
      </div>
    </section>
  );
}
