import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative overflow-hidden bg-cafe-950 py-28">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-gold-400/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border border-gold-400/10"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-400">
            Fique por dentro
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Receba novidades direto no seu e-mail
          </h2>
          <p className="mt-5 max-w-md text-lg text-cream/65">
            Formulário de demonstração — nenhuma informação é enviada de
            verdade. Ideal para apresentar a captura de leads do seu site.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full rounded-full border border-cream/20 bg-cream/5 px-6 py-4 text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 py-4 font-semibold text-cafe-950 shadow-lg shadow-gold-500/30"
            >
              <Send size={18} />
              Inscrever
            </motion.button>
          </form>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-sm text-gold-300"
            >
              ✓ Inscrição simulada com sucesso (ambiente de demonstração).
            </motion.p>
          )}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">Endereço ilustrativo</p>
                <p className="text-sm text-cream/60">Rua Exemplo, 123 — Centro</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">Contato ilustrativo</p>
                <p className="text-sm text-cream/60">(00) 0000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-300">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">E-mail ilustrativo</p>
                <p className="text-sm text-cream/60">contato@exemplo.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="relative h-full w-full max-w-sm rounded-[2.5rem] border border-gold-400/20 bg-gradient-to-br from-cafe-800 to-cafe-950 p-10 shadow-2xl">
            <div className="flex flex-col gap-6">
              {["Seg – Sex", "Sábado", "Domingo"].map((day, i) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex items-center justify-between border-b border-cream/10 pb-4"
                >
                  <span className="font-display text-lg text-cream">{day}</span>
                  <span className="text-sm text-gold-300">07:00 – 20:00</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-widest text-cream/40">
              Horários ilustrativos de demonstração
            </p>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 right-8 text-4xl"
            >
              ☕
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
