export const INSTAGRAM_PROFILE = "https://www.instagram.com/techlar_/";

export interface MediaItem {
  type: "video" | "photo";
  src: string;
  label: string;
}

export interface Case {
  id: string;
  client: string;
  tag: string;
  description: string;
  media: MediaItem[];
  instagramUrl: string;
  clientInstagramUrl: string;
  aspectRatio?: string;
}

export interface SolutionCategory {
  id: string;
  anchor: string;
  title: string;
  description: string;
  cases: Case[];
}

/**
 * ==========================================
 * COMO ADICIONAR NOVOS PROJETOS (PORTFÓLIO)
 * ==========================================
 * 
 * 1. Coloque as imagens ou vídeos do novo projeto dentro da pasta:
 *    public/assets/cases/nome_do_projeto/
 * 
 * 2. Escolha a categoria abaixo (Pergolados Retráteis, Ombrelones, etc.) e adicione um novo bloco de caso na lista `cases: [...]`.
 * 
 * 3. Preencha as informações do caso seguindo o modelo.
 *    No array `media`, para cada arquivo que você colocou na pasta, adicione:
 *    { type: "photo", src: "/assets/cases/nome_do_projeto/foto.jpg", label: "Legenda" }
 *    (ou type: "video" se for um arquivo .mp4).
 */

export const portfolioData: SolutionCategory[] = [
  {
    id: "cat-pergolados",
    anchor: "pergolados",
    title: "Pergolados Retráteis",
    description: "Controle absoluto de sombra e luz para ambientes externos que exigem luxo e funcionalidade.",
    cases: [
      {
        id: "caza17",
        client: "Caza 17",
        tag: "@caza.17",
        description: "Projeto completo de cobertura retrátil para ambiente externo residencial, com estrutura personalizada e acabamento premium.",
        media: [
          { type: "video", src: "/assets/cases/caza17/story-1.mp4", label: "Processo" },
          { type: "video", src: "/assets/cases/caza17/story-2.mp4", label: "Instalação" },
          { type: "video", src: "/assets/cases/caza17/story-3.mp4", label: "Resultado" },
        ],
        instagramUrl: INSTAGRAM_PROFILE,
        clientInstagramUrl: "https://www.instagram.com/caza.17/",
        aspectRatio: "9/16",
      }
      // ---> PARA ADICIONAR UM NOVO PERGOLADO, COPIE O BLOCO ACIMA E COLE AQUI <---
    ]
  },
  {
    id: "cat-ombrelones",
    anchor: "ombrelones",
    title: "Ombrelones",
    description: "Estruturas robustas de grande porte projetadas para ventos fortes e estética minimalista.",
    cases: [
      // ---> INSIRA AQUI OS CASES DE OMBRELONES <---
    ]
  },
  {
    id: "cat-coberturas",
    anchor: "coberturas",
    title: "Coberturas Fixas",
    description: "Proteção contínua e integração perfeita com a paisagem, desenvolvidas com tecnologia náutica.",
    cases: [
      {
        id: "casacor_brasilia",
        client: "Casa Cor Brasília",
        tag: "@casacor_brasilia",
        description: "Participação na Casa Cor Brasília com projeto exclusivo de cobertura de alto padrão, desenvolvido para o maior evento de decoração e arquitetura do Centro-Oeste.",
        media: [
          { type: "photo", src: "/assets/cases/casacor_brasilia/foto-1.jpg", label: "Ambientação" },
          { type: "photo", src: "/assets/cases/casacor_brasilia/foto-2.jpg", label: "Detalhe" },
          { type: "photo", src: "/assets/cases/casacor_brasilia/foto-3.jpg", label: "Vista Geral" },
          { type: "photo", src: "/assets/cases/casacor_brasilia/foto-4.jpg", label: "Acabamento" },
          { type: "video", src: "/assets/cases/casacor_brasilia/video.mp4", label: "Vídeo" },
        ],
        instagramUrl: INSTAGRAM_PROFILE,
        clientInstagramUrl: "https://www.instagram.com/casacor_brasilia/",
        aspectRatio: "9/16",
      }
      // ---> PARA ADICIONAR UMA NOVA COBERTURA, COPIE O BLOCO ACIMA E COLE AQUI <---
    ]
  },
  {
    id: "cat-projetos-especiais",
    anchor: "projetos-especiais",
    title: "Projetos Especiais",
    description: "Nossa equipe de engenharia trabalha com o seu escritório de arquitetura para desenvolver soluções únicas para o seu espaço.",
    cases: [
      {
        id: "nicolandiaparqueurbano",
        client: "Nicolândia Parque Urbano",
        tag: "@nicolandiaparqueurbano",
        description: "Projeto de cobertura para o maior parque de diversões de Brasília, unindo proteção, durabilidade e estética para um dos espaços de lazer mais icônicos do Distrito Federal.",
        media: [
          { type: "photo", src: "/assets/cases/nicolandiaparqueurbano/foto-1.jpg", label: "Instalação" },
          { type: "photo", src: "/assets/cases/nicolandiaparqueurbano/foto-2.jpg", label: "Detalhe" },
          { type: "photo", src: "/assets/cases/nicolandiaparqueurbano/3.jpg", label: "Vista Geral" },
        ],
        instagramUrl: INSTAGRAM_PROFILE,
        clientInstagramUrl: "https://www.instagram.com/nicolandiaparqueurbano/",
        aspectRatio: "9/16",
      },
      {
        id: "casadebiscoitosmineiros",
        client: "Casa de Biscoitos Mineiros",
        tag: "@casadebiscoitosmineiros",
        description: "Projeto de cobertura desenvolvido para a Casa de Biscoitos Mineiros, unindo conforto térmico e proteção elegante, preservando a essência acolhedora do ambiente.",
        media: [
          { type: "video", src: "/assets/cases/casadebiscoitosmineiros/VID-20260713-WA0039.mp4", label: "Vídeo" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0029.jpg", label: "Vista 1" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0030.jpg", label: "Vista 2" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0032.jpg", label: "Vista 3" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0034.jpg", label: "Vista 4" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0036.jpg", label: "Vista 5" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0037.jpg", label: "Vista 6" },
          { type: "photo", src: "/assets/cases/casadebiscoitosmineiros/IMG-20260713-WA0038.jpg", label: "Vista 7" },
        ],
        instagramUrl: INSTAGRAM_PROFILE,
        clientInstagramUrl: "https://www.instagram.com/casadebiscoitosmineiros/",
        aspectRatio: "9/16",
      }
      // ---> INSIRA AQUI OS PROJETOS ESPECIAIS <---
    ]
  }
];

// Flat array of all cases for the home page slider
export const allCases: Case[] = portfolioData.flatMap(cat => cat.cases);
