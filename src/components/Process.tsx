import { motion } from "framer-motion";
import { Sprout, Flame, Droplets, Coffee } from "lucide-react";

const STEPS = [
  { icon: Sprout, title: "Seleção", desc: "Escolha cuidadosa de grãos de origens cuidadosamente avaliadas." },
  { icon: Flame, title: "Torra", desc: "Processo controlado para revelar aroma e corpo equilibrados." },
  { icon: Droplets, title: "Extração", desc: "Métodos específicos para cada perfil sensorial desejado." },
  { icon: Coffee, title: "Experiência", desc: "O resultado final servido com atenção aos detalhes." },
];

export default function Process() {
  return (
    <section className="relative bg-cafe-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Do grão à xícara
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Nosso processo, passo a passo
          </h2>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-10 hidden h-0.5 w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent lg:block" />
          <div className="grid gap-12 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-cafe-950 shadow-xl shadow-gold-500/30"
                >
                  <step.icon size={30} />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-cafe-950 text-xs font-bold text-gold-300 ring-2 ring-gold-400/40">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-cream/60">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
