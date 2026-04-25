import { Music, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#galeria", label: "Galeria" },
  { href: "#discografia", label: "Discografia" },
  { href: "#aulas", label: "Aulas" },
  { href: "#radio", label: "Rádio" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Music className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl tracking-wider">
                WILSON FRANCHI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Cantor, compositor, professor e radialista. Levando a
              autenticidade do sertanejo raiz e a tradição da música regional
              brasileira.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100067827196846"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-6 text-sm tracking-widest uppercase">
              Navegação
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-6 text-sm tracking-widest uppercase">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Receba novidades sobre shows, lançamentos e muito mais.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 bg-secondary border border-border px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 text-sm hover:bg-primary/90 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Wilson Franchi. Todos os direitos
            reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Sertanejo Raiz e Música Regional Brasileira
          </p>
        </div>
      </div>
    </footer>
  );
}
