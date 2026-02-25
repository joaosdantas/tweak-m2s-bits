import { Quote } from "lucide-react";

const testimonials = [
  { text: "A M²S transformou a experiência da nossa reforma. Tudo ficou mais claro, organizado e sem aquela ansiedade de não saber se estamos fazendo a escolha certa.", author: "Carolina M.", role: "Reforma residencial" },
  { text: "Economia real. Eles nos ajudaram a evitar materiais que pareciam bonitos mas não tinham durabilidade. Cada centavo foi bem investido.", author: "Rafael S.", role: "Construção nova" },
  { text: "O atendimento é diferenciado. Senti segurança desde a primeira conversa. Recomendo para quem quer fazer uma obra sem dor de cabeça.", author: "Mariana L.", role: "Reforma de apartamento" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Escolhas bem orientadas transformam resultados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-background p-8 rounded-lg border border-border relative">
              <Quote className="h-8 w-8 text-gold/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
