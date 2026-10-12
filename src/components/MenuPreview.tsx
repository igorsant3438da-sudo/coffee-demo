import { motion } from "framer-motion";
import { Coffee, Snowflake, Leaf, Cookie, Sparkle, Milk } from "lucide-react";

const CATEGORIES = [
  { icon: Coffee, title: "Cafés quentes", desc: "Métodos clássicos e especiais, extraídos no ponto certo." },
  { icon: Snowflake, title: "Bebidas geladas", desc: "Opções refrescantes para qualquer hora do dia." },
  { icon: Leaf, title: "Chás & infusões", desc: "Blends selecionados para momentos de pausa." },
  { icon: Cookie, title: "Doces artesanais", desc: "Acompanhamentos criados para harmonizar com o café." },
  { icon: Milk, title: "Opções veganas", desc: "Alternativas à base de leites vegetais e ingredientes plant-based." },
  { icon: Sparkle, title: "Edições sazonais", desc: "Criações especiais que mudam conforme a estação." },
];

export default function MenuPreview() {
  return (
    <section id="cardapio" className="relative overflow-hidden bg-cafe-900 py-28">
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Cardápio
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Categorias da nossa carta
          </h2>
          <p className="mt-5 text-lg text-cream/65">
            Este template não exibe itens, fotos ou valores reais — apenas a
            estrutura de categorias para você personalizar com o seu próprio
            cardápio.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 1 : -1 }}
              className="group relative rounded-3xl border border-gold-400/15 bg-gradient-to-br from-cafe-800 to-cafe-950 p-8 shadow-lg shadow-black/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-300 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-cafe-950">
                  <cat.icon size={28} />
                </div>
                <span className="font-display text-5xl font-bold text-cream/5 transition-colors duration-500 group-hover:text-gold-400/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {cat.desc}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-gold-400/40 via-gold-400/10 to-transparent" />
              <p className="mt-4 text-xs uppercase tracking-widest text-gold-400/70">
                Conteúdo ilustrativo de demonstração
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-8 py-4 font-semibold text-gold-300 transition-colors hover:bg-gold-400 hover:text-cafe-950"
          >
            Solicitar cardápio completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
