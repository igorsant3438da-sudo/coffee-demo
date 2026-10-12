import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-cafe-950"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Ambiente aconchegante de cafeteria"
          className="h-full w-full scale-110 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-950/80 via-cafe-950/70 to-cafe-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-950 via-cafe-950/30 to-transparent" />
      </div>

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-10 h-96 w-96 rounded-full bg-gold-500/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cafe-500/30 blur-3xl"
      />

      {/* Floating beans */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden select-none text-3xl opacity-40 md:block"
          style={{
            top: `${15 + i * 13}%`,
            left: `${5 + ((i * 17) % 85)}%`,
          }}
          animate={{ y: [0, -22, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          ☕
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pt-28 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-sm text-gold-200 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-gold-300" />
            Template de demonstração para cafeterias
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          >
            Cada xícara conta
            <br />
            <span className="text-gradient-gold bg-clip-text italic">
              uma boa história
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70"
          >
            Um espaço criado para quem ama o ritual do café: grãos selecionados,
            métodos artesanais e uma atmosfera feita para desacelerar.
            Este é um layout modelo — pronto para receber a identidade da sua marca.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cardapio"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-semibold text-cafe-950 shadow-xl shadow-gold-500/30 transition-transform hover:scale-105"
            >
              Explorar experiência
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream backdrop-blur-sm transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Conhecer a história
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-1 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-cream/60">
              Avaliação média de clientes fictícios para fins de demonstração
            </p>
          </motion.div>
        </div>

        {/* Animated coffee cup card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-gold-400/30"
          />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cafe-700 via-cafe-800 to-cafe-950 shadow-2xl shadow-black/50" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-cafe-950/60 text-7xl backdrop-blur-sm">
            <span className="animate-float-slow">☕</span>
            <span className="animate-steam absolute -top-6 left-1/2 h-8 w-2 -translate-x-1/2 rounded-full bg-cream/40 blur-sm" />
            <span
              className="animate-steam absolute -top-6 left-[40%] h-8 w-2 -translate-x-1/2 rounded-full bg-cream/30 blur-sm"
              style={{ animationDelay: "1s" }}
            />
            <span
              className="animate-steam absolute -top-6 left-[60%] h-8 w-2 -translate-x-1/2 rounded-full bg-cream/30 blur-sm"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60"
      >
        <span className="text-xs uppercase tracking-[0.3em]">role</span>
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
