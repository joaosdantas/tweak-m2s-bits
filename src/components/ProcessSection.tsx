const steps = [
  { number: "01", title: "Entendimento", description: "Ouvimos suas necessidades, expectativas e estilo de vida." },
  { number: "02", title: "Planejamento", description: "Organizamos prioridades, cronograma e orçamento do projeto." },
  { number: "03", title: "Seleção técnica", description: "Escolhemos materiais e fornecedores com critério e transparência." },
  { number: "04", title: "Orientação", description: "Guiamos cada decisão com clareza e segurança." },
  { number: "05", title: "Acompanhamento", description: "Estamos presentes até a entrega final, garantindo coerência." },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Como funciona</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">Organização gera economia</h2>
          <p className="text-muted-foreground text-lg">Um processo claro e organizado, do início à entrega.</p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 md:gap-8 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-serif font-semibold text-sm md:text-base">{step.number}</span>
                  </div>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
