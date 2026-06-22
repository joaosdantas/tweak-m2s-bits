import { supabase } from "./supabaseClient";

export type LeadPayload = {
  nome: string;
  email: string;
  whatsapp: string;
  ebook_slug: string;
  ebook_titulo: string;
  consentimento_lgpd: boolean;
  origem?: string;
};

/**
 * Salva o lead no banco e dispara integrações externas opcionais.
 *
 * Para habilitar integrações futuras, basta implementar as funções abaixo:
 *  - sendToRDStation(payload)
 *  - sendToHubspot(payload)
 *  - sendToActiveCampaign(payload)
 *  - sendToBrevo(payload)
 *
 * Recomenda-se mover as integrações para uma Edge Function (segurança/keys).
 */
export async function saveLead(payload: LeadPayload) {
  const { error } = await supabase.from("ebook_leads").insert({
    nome: payload.nome,
    email: payload.email,
    whatsapp: payload.whatsapp,
    ebook_slug: payload.ebook_slug,
    ebook_titulo: payload.ebook_titulo,
    consentimento_lgpd: payload.consentimento_lgpd,
    origem: payload.origem ?? "site",
  });

  if (error) throw error;

  // Hooks de integração (placeholders — implementar conforme necessidade)
  try {
    await Promise.allSettled([
      // sendToRDStation(payload),
      // sendToHubspot(payload),
      // sendToActiveCampaign(payload),
      // sendToBrevo(payload),
    ]);
  } catch {
    // não bloquear UX
  }

  return { success: true };
}
