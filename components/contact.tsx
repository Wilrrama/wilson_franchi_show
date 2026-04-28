"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formPayload = new FormData();
    formPayload.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string,
    );
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(data.message || "Erro ao enviar mensagem.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Fale Comigo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            CONTATO
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Para contratações, aulas particulares ou qualquer outra informação,
            entre em contato através do formulário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* INFO */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">E-mail</h4>
                <a
                  href="mailto:wilrrama@hotmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  wilrrama@hotmail.com
                </a>
              </div>
            </div>

            <div className="bg-card border border-border p-6 flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Telefone</h4>
                <a
                  href="tel:+5519997818648"
                  className="text-muted-foreground hover:text-primary"
                >
                  (19) 99781-8648
                </a>
              </div>
            </div>

            <div className="bg-card border border-border p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h4 className="font-medium mb-1">Localização</h4>
                <p className="text-muted-foreground">
                  Americana - São Paulo - Brasil
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-6">
              <h4 className="font-medium mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/franchiwilson/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 hover:text-primary transition" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100067827196846"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 hover:text-primary transition" />
                </a>

                <a
                  href="https://www.youtube.com/@programacafeeviola8840"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-6 h-6 hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card border border-border p-8">
            <h3 className="font-serif text-2xl mb-6">Envie uma Mensagem</h3>

            {submitted && (
              <div className="bg-green-500/10 border border-green-500 p-4 mb-6 text-green-600">
                Mensagem enviada com sucesso!
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500 p-4 mb-6 text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-border px-4 py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-border px-4 py-3"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-secondary border border-border px-4 py-3"
              >
                <option value="">Selecione um assunto</option>
                <option value="Shows">Contratação de Shows</option>
                <option value="Aulas">Aulas Particulares</option>
                <option value="Rádio">Programa de Rádio</option>
                <option value="Parcerias">Parcerias</option>
                <option value="Outros">Outros Assuntos</option>
              </select>

              <textarea
                name="message"
                placeholder="Sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-secondary border border-border px-4 py-3"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-6 py-4 uppercase tracking-widest flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
