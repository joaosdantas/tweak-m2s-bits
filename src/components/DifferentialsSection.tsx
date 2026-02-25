import { Check } from "lucide-react";

const differentials = [
  "Orientação técnica com linguagem acessível",
  "Curadoria personalizada de materiais e acabamentos",
  "Economia inteligente — sem desperdício, sem retrabalho",
  "Rede qualificada de fornecedores e profissionais",
  "Processo organizado com cronograma claro",
  "Atendimento acolhedor e sem pressão",
  "Foco em harmonia, funcionalidade e durabilidade",
  "Acompanhamento do início ao resultado final",
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-primary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold-light font-medium text-sm tracking-widest uppercase mb-4 block">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-primary-foreground">Por que escolher a M²S Design</h2>
          <p className="text-primary-foreground/70 text-lg">Confiança, método e cuidado em cada etapa do seu projeto.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {differentials.map((item) => (
            <div key={item} className="flex items-start gap-3 p-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
