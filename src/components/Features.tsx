import { motion } from "framer-motion";
import { Leaf, Clock3, Heart, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Ingredientes selecionados",
    desc: "Insumos escolhidos a dedo para garantir sabor, aroma e qualidade em cada preparo.",
  },
  {
    icon: Clock3,
    title: "Preparo na hora",
    desc: "Cada bebida é preparada no momento do pedido, respeitando o tempo ideal de extração.",
  },
  {
    icon: Heart,
    title: "Feito com afeto",
    desc: "Receitas desenvolvidas com cuidado, pensadas para criar momentos memoráveis.",
  },
  {
    icon: Award,
    title: "Qualidade reconhecida",
    desc: "Processos e padrões pensados para entregar uma experiência consistente sempre.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="diferenciais" className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cafe-500">
            Por que nos escolher
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-cafe-900 sm:text-5xl">
            Diferenciais que fazem a diferença
          </h2>
          <p className="mt-5 text-lg text-cafe-700/80">
            Um conjunto de cuidados invisíveis que resultam em uma experiência
            visível — do primeiro gole ao último suspiro de vapor.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(84,49,33,0.25)" }}
              className="group relative overflow-hidden rounded-3xl border border-cafe-200/60 bg-white p-8 transition-colors hover:border-gold-400/50"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cafe-700 to-cafe-900 text-gold-300 shadow-lg shadow-cafe-900/20">
                <f.icon size={26} />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold text-cafe-900">
                {f.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cafe-700/75">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
