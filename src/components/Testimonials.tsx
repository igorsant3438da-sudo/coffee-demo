import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Um ambiente incrível para trabalhar e relaxar. A atenção aos detalhes faz toda a diferença na experiência.",
    name: "Cliente fictício A",
    role: "Depoimento de demonstração",
  },
  {
    quote:
      "O cuidado no atendimento e a atmosfera acolhedora tornam cada visita especial. Recomendo a experiência.",
    name: "Cliente fictício B",
    role: "Depoimento de demonstração",
  },
  {
    quote:
      "Um lugar perfeito para pausas durante o dia. A combinação de conforto e qualidade é sensacional.",
    name: "Cliente fictício C",
    role: "Depoimento de demonstração",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-cream py-28">
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cafe-500">
          Depoimentos
        </span>
        <h2 className="mt-4 font-display text-4xl font-semibold text-cafe-900 sm:text-5xl">
          O que dizem sobre a experiência
        </h2>
        <p className="mt-4 text-sm uppercase tracking-widest text-cafe-500/60">
          Depoimentos fictícios criados apenas para fins de demonstração
        </p>

        <div className="relative mt-16 flex min-h-[280px] items-center justify-center">
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold-400/30" size={64} />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-cafe-200/60 bg-white px-8 py-10 shadow-xl shadow-cafe-900/5 sm:px-14"
            >
              <div className="mb-4 flex justify-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display text-xl italic leading-relaxed text-cafe-800 sm:text-2xl">
                “{TESTIMONIALS[index].quote}”
              </p>
              <p className="mt-6 font-semibold text-cafe-900">
                {TESTIMONIALS[index].name}
              </p>
              <p className="text-sm text-cafe-500">{TESTIMONIALS[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cafe-300 text-cafe-700 transition-colors hover:bg-cafe-900 hover:text-cream"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold-500" : "w-2 bg-cafe-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => paginate(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cafe-300 text-cafe-700 transition-colors hover:bg-cafe-900 hover:text-cream"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
