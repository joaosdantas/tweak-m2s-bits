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
              <a href="https://api.whatsapp.com/send?phone=5513981172767&text=Ol%C3%A1%2C%20acessei%20o%20site%20e%20gostaria%20de%20conhecer%20melhor%20os%20seus%20servi%C3%A7os!" target="_blank" rel="noopener noreferrer">
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
