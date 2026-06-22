import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Download, Loader2 } from "lucide-react";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { getEbookBySlug } from "@/data/ebooks";
import { saveLead } from "@/lib/leadService";

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  email: z.string().trim().email("E-mail inválido").max(160),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp válido")
    .max(20, "WhatsApp inválido"),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar os termos" }),
  }),
});

const EbookLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const ebook = slug ? getEbookBySlug(slug) : undefined;

  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    consentimento: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!ebook) return;
    document.title = ebook.metaTitle ?? `${ebook.titulo} | M2S Design`;
    const desc =
      ebook.metaDescription ??
      `Baixe gratuitamente o e-book ${ebook.titulo}: ${ebook.descricao}`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `/ebooks/${ebook.slug}`);
  }, [ebook]);

  if (!ebook) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-24 text-center">
          <h1 className="text-3xl font-serif font-semibold mb-4">
            E-book não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O material que você está procurando não está disponível.
          </p>
          <Button asChild>
            <Link to="/#ebooks">Ver todos os e-books</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      await saveLead({
        nome: parsed.data.nome,
        email: parsed.data.email,
        whatsapp: parsed.data.whatsapp,
        ebook_slug: ebook.slug,
        ebook_titulo: ebook.titulo,
        consentimento_lgpd: true,
      });
      setUnlocked(true);
      toast.success("Pronto! Seu e-book está liberado para download.");
    } catch (err: unknown) {
      console.error(err);
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background">
        <section className="container py-12 md:py-20">
          <Link
            to="/#ebooks"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para e-books
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Capa + conteúdo */}
            <div>
              <div className="rounded-lg overflow-hidden border border-border shadow-lg max-w-sm mx-auto lg:mx-0">
                <img
                  src={ebook.imagem}
                  alt={`Capa do e-book ${ebook.titulo}`}
                  className="w-full aspect-[2/3] object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
                E-book gratuito
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">
                {ebook.titulo}
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                {ebook.descricao}
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-foreground">
                  Você aprenderá:
                </h2>
                <ul className="space-y-3">
                  {ebook.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formulário ou Download */}
              {!unlocked ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-lg p-6 space-y-5"
                  noValidate
                >
                  <h2 className="text-xl font-serif font-semibold text-foreground">
                    Preencha para baixar
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      maxLength={120}
                      autoComplete="name"
                      required
                    />
                    {errors.nome && (
                      <p className="text-sm text-destructive">{errors.nome}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      maxLength={160}
                      autoComplete="email"
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: e.target.value })
                      }
                      maxLength={20}
                      autoComplete="tel"
                      required
                    />
                    {errors.whatsapp && (
                      <p className="text-sm text-destructive">{errors.whatsapp}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="lgpd"
                      checked={form.consentimento}
                      onCheckedChange={(c) =>
                        setForm({ ...form, consentimento: Boolean(c) })
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="lgpd"
                      className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer"
                    >
                      Concordo em fornecer meus dados para contato e recebimento
                      de conteúdos relacionados.
                    </Label>
                  </div>
                  {errors.consentimento && (
                    <p className="text-sm text-destructive -mt-3">
                      {errors.consentimento}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                      </>
                    ) : (
                      "Quero o e-book gratuito"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="bg-card border border-gold/30 rounded-lg p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-gold" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold mb-2">
                    Tudo certo!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Seu material está liberado. Clique abaixo para baixar.
                  </p>
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <a
                      href={ebook.arquivo}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4" /> Baixar E-book
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EbookLanding;
