import { ShieldCheck, TrendingUp, Heart } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Segurança nas decisões", description: "Cada escolha é orientada por critérios técnicos, evitando erros e retrabalho." },
  { icon: TrendingUp, title: "Economia inteligente", description: "Planejamento que valoriza seu investimento e evita gastos desnecessários." },
  { icon: Heart, title: "Atendimento humanizado", description: "Orientação clara e acolhedora, respeitando seu tempo e suas necessidades." },
];

const AuthoritySection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Quem somos</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Clareza que gera confiança</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A M²S Design orienta você em cada decisão da sua obra ou reforma. Com método, cuidado e conhecimento técnico, transformamos processos complexos em escolhas seguras e resultados coerentes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center p-8 rounded-lg bg-card border border-border hover:border-gold/30 transition-colors">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
