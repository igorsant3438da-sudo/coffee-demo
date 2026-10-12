import { motion } from "framer-motion";

const IMAGES = [
  { src: "/images/gallery-1.jpg", label: "Ambiente interno", className: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/gallery-2.jpg", label: "Grãos selecionados", className: "" },
  { src: "/images/gallery-3.jpg", label: "Área externa", className: "" },
  { src: "/images/gallery-4.jpg", label: "Momentos especiais", className: "lg:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="ambiente" className="relative bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cafe-500">
            Ambiente
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-cafe-900 sm:text-5xl">
            Um espaço para viver experiências
          </h2>
          <p className="mt-5 text-lg text-cafe-700/80">
            Fotos ilustrativas de ambiente — nenhuma imagem representa itens
            reais do cardápio.
          </p>
        </motion.div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg shadow-cafe-900/10 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-950/80 via-cafe-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-xl font-semibold text-cream">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
