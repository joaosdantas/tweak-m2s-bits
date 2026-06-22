DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.ebook_leads;

CREATE POLICY "Anyone can submit a valid lead"
  ON public.ebook_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    consentimento_lgpd = true
    AND char_length(trim(nome)) BETWEEN 2 AND 120
    AND char_length(trim(email)) BETWEEN 5 AND 160
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(trim(whatsapp)) BETWEEN 8 AND 20
    AND char_length(ebook_slug) BETWEEN 1 AND 120
  );