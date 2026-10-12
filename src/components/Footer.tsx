import { motion } from "framer-motion";
import { AtSign, Coffee, Globe, MessageCircle } from "lucide-react";

const COLUMNS = [
  {
    title: "Navegação",
    links: ["Início", "Sobre", "Diferenciais", "Cardápio", "Ambiente"],
  },
  {
    title: "Institucional",
    links: ["Nossa história", "Trabalhe conosco", "Política de privacidade", "Termos de uso"],
  },
  {
    title: "Suporte",
    links: ["Perguntas frequentes", "Fale conosco", "Reservas", "Feedback"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-cafe-950 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-cream/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-cafe-600 text-cafe-950">
                <Coffee size={20} />
              </span>
              <span className="font-display text-2xl font-semibold text-cream">
                Café <span className="text-gold-400">Aroma</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
              Template de demonstração para cafeterias, criado para mostrar
              estrutura, animações e organização visual — sem conteúdo real de
              cardápio, preços ou identidade de marca.
            </p>
            <div className="mt-6 flex gap-3">
              {[AtSign, Globe, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg font-semibold text-cream">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/50 transition-colors hover:text-gold-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Café Aroma — Template de demonstração. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/40">
            Conteúdo fictício criado exclusivamente para fins de apresentação.
          </p>
        </div>
      </div>
    </footer>
  );
}
