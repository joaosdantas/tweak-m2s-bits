import { Instagram, Mail, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              M²S <span className="text-gold">Design</span>
            </h3>
            <p className="text-primary-foreground/60 leading-relaxed text-sm">
              Consultoria para obras e reformas. Orientação técnica, atendimento humanizado 
              e decisões seguras para o seu projeto.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {["Início", "Sobre", "Serviços", "Processo", "Diferenciais", "Blog", "Contato"].map(
                (label) =>
                <a
                  key={label}
                  href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">

                    {label}
                  </a>

              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@m2sdesign.com.br"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">

                <Mail className="h-4 w-4" />
                contato@m2sdesign.com.br
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">

                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/m2sdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
                @m2sdesign
              </a>
              <a
                href="https://youtube.com/@m2sdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">

                <Youtube className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} M²S Design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;