import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Vamos conversar</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 text-foreground">Seu projeto merece decisões certas.</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Quer segurança nas escolhas do seu projeto? Fale com a M²S Design. Transforme sua obra em um processo organizado e seguro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Atendimento personalizado · Orientação clara e objetiva · Sem compromisso inicial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
