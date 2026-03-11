import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Materiais de design em mesa de trabalho" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-block mb-6">
            <span className="text-gold font-medium text-sm tracking-widest uppercase">M²S Design — Consultoria</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-primary-foreground mb-6 text-balance">
            Onde a escolha vira acerto
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Consultoria para obras e reformas com orientação técnica e atendimento humanizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="outline-hero" asChild>
              <a href="https://api.whatsapp.com/send?phone=5513981172767&text=Ol%C3%A1%2C%20acessei%20o%20site%20e%20gostaria%20de%20conhecer%20melhor%20os%20seus%20servi%C3%A7os!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <div className="flex gap-6 mt-10 text-primary-foreground/60 text-sm">
            <span>✓ Resposta rápida</span>
            <span>✓ Sem compromisso inicial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
