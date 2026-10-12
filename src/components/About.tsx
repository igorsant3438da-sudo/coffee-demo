import { motion } from "framer-motion";
import { useCountUp } from "./useCountUp";

const STATS = [
  { label: "Anos de história (demo)", value: 12, suffix: "+" },
  { label: "Clientes satisfeitos (demo)", value: 48, suffix: "k+" },
  { label: "Blends exclusivos (demo)", value: 24, suffix: "" },
  { label: "Prêmios recebidos (demo)", value: 9, suffix: "" },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-widest text-cafe-200/70 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="sobre" className="relative bg-cafe-950 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
            <img
              src="/images/about.jpg"
              alt="Preparo artesanal de café"
              className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-950/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-8 -right-6 w-48 rounded-2xl border border-gold-400/30 bg-cafe-900/90 p-5 shadow-xl backdrop-blur-md sm:-right-10"
          >
            <p className="font-display text-3xl italic text-gold-300">100%</p>
            <p className="mt-1 text-xs text-cream/70">Artesanal & feito à mão (exemplo ilustrativo)</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold-400/90 text-3xl shadow-lg shadow-gold-500/40"
          >
            ☕
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Nossa essência
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Uma jornada que começa no grão e termina no sorriso
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            Este é um template de demonstração. Aqui você pode apresentar a
            trajetória da sua cafeteria, os valores da marca e o cuidado por
            trás de cada etapa — da seleção dos grãos até o momento em que o
            cliente leva a xícara aos lábios. Troque este texto pela sua
            própria história.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Um ambiente pensado para conectar pessoas, ideias e boas
            conversas em torno de uma boa bebida quente.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-cream/10 pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
