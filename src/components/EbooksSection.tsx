import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ebooks } from "@/data/ebooks";

const EbooksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ebooks"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container">
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
            Materiais gratuitos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">
            E-books
          </h2>
          <p className="text-muted-foreground text-lg">
            Materiais gratuitos para aprofundar seus conhecimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ebooks.map((ebook, index) => (
            <Link
              key={ebook.slug}
              to={`/ebooks/${ebook.slug}`}
              className={`group block rounded-lg bg-card border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              aria-label={`Acessar e-book ${ebook.titulo}`}
            >
              <article className="h-full">
                <div className="overflow-hidden">
                  <img
                    src={ebook.imagem}
                    alt={`Capa do e-book ${ebook.titulo}`}
                    loading="lazy"
                    width={768}
                    height={1152}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbooksSection;
