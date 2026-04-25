"use client"

import { Music, Mic, BookOpen, Users, ArrowRight, CheckCircle } from "lucide-react"

const courses = [
  {
    id: 1,
    icon: Music,
    title: "Violão Caipira",
    description: "Aprenda as técnicas tradicionais do violão caipira, desde os acordes básicos até os padrões rítmicos característicos do sertanejo raiz.",
    features: [
      "Técnicas de mão direita e esquerda",
      "Ritmos caipiras tradicionais",
      "Repertório clássico",
      "Afinações alternativas",
    ],
    level: "Todos os níveis",
    duration: "3 meses",
  },
  {
    id: 2,
    icon: Mic,
    title: "Canto e Técnica Vocal",
    description: "Desenvolva sua voz com exercícios práticos e aprenda a interpretar músicas sertanejas com emoção e autenticidade.",
    features: [
      "Técnicas de respiração",
      "Extensão vocal",
      "Interpretação musical",
      "Cuidados com a voz",
    ],
    level: "Iniciante a Avançado",
    duration: "4 meses",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Composição Musical",
    description: "Aprenda a criar suas próprias músicas, desde a construção de letras até a composição de melodias memoráveis.",
    features: [
      "Estrutura musical",
      "Técnicas de composição",
      "Escrita de letras",
      "Arranjos básicos",
    ],
    level: "Intermediário",
    duration: "6 meses",
  },
]

const testimonials = [
  {
    name: "Carlos Eduardo",
    location: "São Paulo, SP",
    text: "As aulas com o professor Wilson mudaram completamente minha forma de tocar. A dedicação e o conhecimento dele são impressionantes.",
  },
  {
    name: "Maria Helena",
    location: "Ribeirão Preto, SP",
    text: "Sempre sonhei em aprender violão caipira e encontrei no Wilson o professor ideal. Paciente, didático e muito talentoso.",
  },
]

export function Classes() {
  return (
    <section id="aulas" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Ensino
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            AULAS E CURSOS
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compartilhando conhecimento e paixão pela música há mais de 20 anos. 
            Aulas presenciais e online para todos os níveis.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <course.icon className="w-10 h-10 text-primary mb-6" />
              
              <h3 className="font-serif text-2xl mb-3">{course.title}</h3>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {course.description}
              </p>

              <ul className="space-y-3 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-6">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>

              <a
                href="#contato"
                className="mt-6 flex items-center gap-2 text-primary text-sm group-hover:underline"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Group Classes CTA */}
        <div className="bg-card border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-serif text-2xl">Aulas em Grupo</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Participe de workshops e aulas coletivas com outros alunos. Uma experiência 
              enriquecedora que permite trocar conhecimentos e fazer novas amizades através 
              da música.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Inscreva-se
          </a>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border p-8"
            >
              <p className="text-foreground italic mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
