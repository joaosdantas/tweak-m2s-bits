CREATE TABLE public.ebook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  ebook_slug TEXT NOT NULL,
  ebook_titulo TEXT NOT NULL,
  consentimento_lgpd BOOLEAN NOT NULL DEFAULT false,
  origem TEXT DEFAULT 'site',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.ebook_leads TO anon, authenticated;
GRANT ALL ON public.ebook_leads TO service_role;

ALTER TABLE public.ebook_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.ebook_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX ebook_leads_slug_idx ON public.ebook_leads (ebook_slug);
CREATE INDEX ebook_leads_created_at_idx ON public.ebook_leads (created_at DESC);