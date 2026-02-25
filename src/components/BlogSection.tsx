import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 erros comuns na escolha de revestimentos",
    excerpt: "Descubra os equívocos mais frequentes e como evitá-los para garantir durabilidade e estética no seu projeto.",
    date: "20 Fev 2026",
    category: "Materiais",
  },
  {
    title: "Como planejar uma reforma sem surpresas",
    excerpt: "Um guia prático para organizar cronograma, orçamento e expectativas antes de começar sua obra.",
    date: "15 Fev 2026",
    category: "Planejamento",
  },
  {
    title: "A importância da consultoria em obras residenciais",
    excerpt: "Entenda como a orientação profissional pode economizar tempo, dinheiro e evitar retrabalho.",
    date: "08 Fev 2026",
    category: "Consultoria",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-foreground">
            Conteúdo que orienta
          </h2>
          <p className="text-muted-foreground text-lg">
            Dicas, tendências e orientações para quem está construindo ou reformando.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="bg-card p-8 rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all group cursor-pointer"
            >
              <span className="text-xs font-medium text-gold uppercase tracking-wider">
                {post.category}
              </span>
              <h3 className="text-lg font-serif font-semibold mt-3 mb-3 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
