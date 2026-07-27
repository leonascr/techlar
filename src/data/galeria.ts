export interface GaleriaItem {
  src: string;
  alt: string;
  type?: "photo" | "video";
}

export interface GaleriaSubcategoria {
  id: string;
  titulo: string;
  pasta: string;
  imagens: GaleriaItem[];
}

export interface GaleriaCategoria {
  id: string;
  anchor: string;
  titulo: string;
  descricao: string;
  pasta: string;
  subcategorias: GaleriaSubcategoria[];
}

export const galeriaData: GaleriaCategoria[] = [
  {
    "id": "coberturas",
    "anchor": "coberturas",
    "titulo": "Coberturas",
    "descricao": "Projetos exclusivos de coberturas de alto padrão para transformar e proteger suas áreas externas com elegância.",
    "pasta": "coberturas",
    "subcategorias": [
      {
        "id": "todas",
        "titulo": "Todos",
        "pasta": "",
        "imagens": [
          {
            "src": "IMG-20241018-WA0012.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20241018-WA0017.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20241018-WA0023.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0148.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0153.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0154.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0165.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0094.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250627-WA0005.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20250627-WA0006.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0011.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0014.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0015.jpg",
            "alt": "Projeto coberturas",
            "type": "photo"
          }
        ]
      }
    ]
  },
  {
    "id": "pergotech-classica",
    "anchor": "pergotech-classica",
    "titulo": "Pergotech Clássica",
    "descricao": "O design atemporal dos pergolados clássicos, unindo o aconchego tradicional com a durabilidade moderna.",
    "pasta": "pergotechs classicas",
    "subcategorias": [
      {
        "id": "todas",
        "titulo": "Todos",
        "pasta": "",
        "imagens": [
          {
            "src": "IMG-20230814-WA0035.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0021.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0044.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0096.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0122.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0123.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0125.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0128.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250411-WA0041.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0050.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0078.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0088.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0098.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0109.jpg",
            "alt": "Projeto pergotechs classicas",
            "type": "photo"
          }
        ]
      }
    ]
  },
  {
    "id": "pergotech-premium",
    "anchor": "pergotech-premium",
    "titulo": "Pergotech Premium",
    "descricao": "Estruturas de altíssimo luxo, desenvolvidas para quem não abre mão do melhor em arquitetura e conforto.",
    "pasta": "pergotechs premiums",
    "subcategorias": [
      {
        "id": "todas",
        "titulo": "Todos",
        "pasta": "",
        "imagens": [
          {
            "src": "IMG-20230727-WA0004.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20230727-WA0009.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240205-WA0010.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240205-WA0025.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240205-WA0037.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240205-WA0052.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0017.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0026.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0028.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0030.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0037.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0215.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0221.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0223.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0225.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0258.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0261.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0002.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0003.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20260210-WA0008.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20260210-WA0009.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20260506-WA0015.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20260506-WA0022.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          },
          {
            "src": "IMG-20260612-WA0046.jpg",
            "alt": "Projeto pergotechs premiums",
            "type": "photo"
          }
        ]
      }
    ]
  },
  {
    "id": "termotech-fixa",
    "anchor": "termotech-fixa",
    "titulo": "Termotech Fixa",
    "descricao": "Coberturas com isolamento térmico de ponta, perfeitas para conforto absoluto em qualquer estação do ano.",
    "pasta": "termotechs fixas",
    "subcategorias": [
      {
        "id": "todas",
        "titulo": "Todos",
        "pasta": "",
        "imagens": [
          {
            "src": "IMG-20250414-WA0088.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20250414-WA0153.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20250627-WA0005.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20250627-WA0006.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0013.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0014.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260331-WA0015.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260601-WA0000.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260601-WA0002.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260601-WA0006.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260601-WA0011.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260713-WA0019.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260713-WA0021.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          },
          {
            "src": "IMG-20260713-WA0022.jpg",
            "alt": "Projeto termotechs fixas",
            "type": "photo"
          }
        ]
      }
    ]
  },
  {
    "id": "toldos",
    "anchor": "toldos",
    "titulo": "Toldos",
    "descricao": "Soluções versáteis e robustas em toldos verticais e retráteis para proteção contra sol e chuva.",
    "pasta": "toldos",
    "subcategorias": [
      {
        "id": "todas",
        "titulo": "Todos",
        "pasta": "",
        "imagens": [
          {
            "src": "IMG-20240423-WA0060.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0061.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0062.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0064.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0065.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0067.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0069.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0071.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0072.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0075.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240423-WA0079.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0006.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0010.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0033.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0037.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0042.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20240606-WA0048.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20241018-WA0020.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250411-WA0081.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250411-WA0082.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250411-WA0102.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250422-WA0011.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250422-WA0019.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250422-WA0022.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250422-WA0026.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250422-WA0029.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0023.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0027.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0030.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0032.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0034.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0035.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0040.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0041.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0042.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250423-WA0044.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          },
          {
            "src": "IMG-20250508-WA0048.jpg",
            "alt": "Projeto toldos",
            "type": "photo"
          }
        ]
      }
    ]
  }
];
