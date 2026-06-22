export type Ebook = {
  slug: string;
  titulo: string;
  descricao: string;
  imagem: string;
  arquivo: string;
  beneficios: string[];
  metaTitle?: string;
  metaDescription?: string;
};

export const ebooks: Ebook[] = [
  {
    slug: "guia-decisoes-reformas",
    titulo: "Guia de Decisões para Reformas",
    descricao:
      "Tudo que você precisa saber antes de iniciar uma reforma: das decisões iniciais ao acompanhamento da obra.",
    imagem: "/ebooks/ebook-01.jpg",
    arquivo: "/ebooks/guia-decisoes-reformas.pdf",
    beneficios: [
      "Melhores práticas para iniciar uma reforma",
      "Principais erros a evitar",
      "Checklist de implementação",
      "Requisitos técnicos essenciais",
    ],
    metaTitle: "Guia de Decisões para Reformas | M2S Design",
    metaDescription:
      "Baixe o guia completo com as melhores práticas, erros comuns e checklist para conduzir sua reforma com segurança.",
  },
  {
    slug: "planejamento-de-obras",
    titulo: "Planejamento de Obras",
    descricao:
      "Como planejar cada etapa da sua obra com clareza, prazos realistas e controle total do processo.",
    imagem: "/ebooks/ebook-02.jpg",
    arquivo: "/ebooks/planejamento-de-obras.pdf",
    beneficios: [
      "Cronograma realista para sua obra",
      "Gestão de fornecedores e prazos",
      "Controle financeiro detalhado",
      "Checklist de marcos da obra",
    ],
    metaTitle: "Planejamento de Obras | M2S Design",
    metaDescription:
      "Aprenda a planejar cada etapa da sua obra com cronograma, controle de custos e gestão de fornecedores.",
  },
  {
    slug: "curadoria-de-materiais",
    titulo: "Curadoria de Materiais",
    descricao:
      "Como escolher os materiais certos para cada ambiente, equilibrando estética, durabilidade e investimento.",
    imagem: "/ebooks/ebook-03.jpg",
    arquivo: "/ebooks/curadoria-de-materiais.pdf",
    beneficios: [
      "Critérios profissionais de seleção",
      "Comparativo de acabamentos",
      "Como evitar retrabalho",
      "Indicações por tipo de ambiente",
    ],
    metaTitle: "Curadoria de Materiais | M2S Design",
    metaDescription:
      "Guia profissional para escolher os materiais certos para cada ambiente com estética, durabilidade e bom custo.",
  },
  {
    slug: "orcamento-sem-surpresas",
    titulo: "Orçamento sem Surpresas",
    descricao:
      "Aprenda a montar e validar orçamentos de obra com clareza, evitando custos inesperados ao longo do projeto.",
    imagem: "/ebooks/ebook-04.jpg",
    arquivo: "/ebooks/orcamento-sem-surpresas.pdf",
    beneficios: [
      "Estrutura de um orçamento completo",
      "Como comparar propostas",
      "Margens e reservas técnicas",
      "Checklist anti-surpresas",
    ],
    metaTitle: "Orçamento sem Surpresas | M2S Design",
    metaDescription:
      "Monte orçamentos de obra com clareza e evite custos inesperados com nosso guia prático e completo.",
  },
];

export const getEbookBySlug = (slug: string) =>
  ebooks.find((e) => e.slug === slug);
