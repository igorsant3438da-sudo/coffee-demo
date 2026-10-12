const ITEMS = [
  "Grãos selecionados",
  "Torra artesanal",
  "Ambiente aconchegante",
  "Métodos especiais",
  "Feito com paixão",
  "Experiência sensorial",
];

export default function Marquee() {
  const list = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-gold-400/20 bg-cafe-900 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {list.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-display text-lg italic tracking-wide text-gold-300/90"
          >
            {item}
            <span className="text-gold-500/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
