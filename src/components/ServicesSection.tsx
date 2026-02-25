import { Compass, Palette, Users, HardHat } from "lucide-react";

const services = [
  { icon: Compass, title: "Consultoria estratégica", description: "Análise completa do projeto com orientação personalizada para cada etapa." },
  { icon: Palette, title: "Curadoria de materiais", description: "Seleção criteriosa de acabamentos, revestimentos e materiais com equilíbrio entre estética e funcionalidade." },
  { icon: Users, title: "Indicação de fornecedores", description: "Rede de fornecedores confiáveis, avaliados por qualidade e compromisso." },
  { icon: HardHat, title: "Acompanhamento de obra", description: "Presença ativa para garantir que as decisões sejam executadas com precisão." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Beleza com método</h2>
          <p className="text-muted-foreground text-lg">Soluções completas para quem busca segurança e harmonia no resultado final.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="flex gap-5 p-6 md:p-8 rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
