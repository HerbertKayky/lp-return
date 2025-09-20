export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  year: string;
  location: string;
  client?: string;
  area?: string;
  duration?: string;
  images: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "predio-em-caruaru",
    title: "Prédio em Caruaru",
    description:
      "Projeto arquitetônico moderno para edifício comercial, combinando funcionalidade e estética contemporânea com soluções inovadoras.",
    fullDescription:
      "Este projeto representa um marco na arquitetura comercial moderna de Caruaru. O edifício foi concebido com uma abordagem contemporânea que prioriza a funcionalidade sem comprometer a estética. A fachada apresenta linhas limpas e materiais de alta qualidade, criando uma identidade visual marcante no cenário urbano da cidade. O projeto incorpora soluções sustentáveis e tecnológicas, garantindo eficiência energética e conforto aos usuários. Os espaços internos foram otimizados para máxima flexibilidade de uso, permitindo adaptações futuras conforme as necessidades dos ocupantes.",
    category: "Comercial",
    year: "2024",
    location: "Caruaru, PE",
    client: "Grupo Empresarial Caruaru",
    area: "2.500 m²",
    duration: "18 meses",
    images: [
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 11.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 12.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 14.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 15.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 6.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 7.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 8.png",
      "/PROJETOS - HERBERT/PRÉDIO EM CARUARU/Scene 9(1).png",
    ],
    features: [
      "Fachada moderna e elegante",
      "Sistemas de climatização eficientes",
      "Estacionamento coberto",
      "Elevadores de alta velocidade",
      "Sistemas de segurança integrados",
      "Iluminação LED em todos os ambientes",
      "Acessibilidade completa",
      "Área de convivência no térreo",
    ],
  },
  {
    id: 2,
    slug: "mercado-em-toritama",
    title: "Mercado em Toritama",
    description:
      "Centro comercial projetado para otimizar fluxo de pessoas e mercadorias, com design funcional e sustentável.",
    fullDescription:
      "O projeto do mercado em Toritama foi desenvolvido com foco na otimização do fluxo comercial e na criação de um ambiente agradável tanto para comerciantes quanto para consumidores. A arquitetura privilegia a circulação natural do ar e a entrada de luz natural, reduzindo custos operacionais e criando um ambiente mais confortável. O layout foi cuidadosamente planejado para facilitar o acesso de veículos de carga e a movimentação de mercadorias, enquanto proporciona uma experiência de compra agradável para os visitantes. O projeto incorpora elementos de sustentabilidade, incluindo sistemas de captação de água da chuva e uso de materiais locais.",
    category: "Comercial",
    year: "2024",
    location: "Toritama, PE",
    client: "Associação dos Comerciantes de Toritama",
    area: "3.200 m²",
    duration: "12 meses",
    images: [
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 1.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 2.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 3.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 4.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 5.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 6.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 11.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 12.png",
      "/PROJETOS - HERBERT/MERCADO EM TORITAMA/Scene 13.png",
    ],
    features: [
      "Layout otimizado para fluxo comercial",
      "Ventilação natural eficiente",
      "Área de carga e descarga dedicada",
      "Praça de alimentação integrada",
      "Sistema de captação de água da chuva",
      "Iluminação natural abundante",
      "Estacionamento amplo",
      "Área administrativa completa",
    ],
  },
  {
    id: 3,
    slug: "loja-livio-e-lais-toritama",
    title: "Loja em Toritama",
    description:
      "Projeto de loja comercial com design moderno, focado na experiência do cliente e otimização do espaço de vendas.",
    fullDescription:
      "A loja Lívio e Laís representa um conceito inovador no varejo de Toritama. O projeto priorizou a experiência do cliente através de um layout intuitivo e uma atmosfera acolhedora. O design interior combina elementos modernos com toques de elegância, criando um ambiente que convida à permanência e estimula as vendas. A iluminação foi cuidadosamente planejada para destacar os produtos, enquanto o sistema de circulação facilita o fluxo de clientes. O projeto também incluiu áreas específicas para diferentes categorias de produtos, otimizando a organização e a apresentação da mercadoria. Elementos como espelhos estrategicamente posicionados e provadores confortáveis completam a experiência de compra.",
    category: "Comercial",
    year: "2023",
    location: "Toritama, PE",
    client: "Lívio e Laís",
    area: "180 m²",
    duration: "6 meses",
    images: [
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena1.jpg",
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena2.jpg",
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena3.jpg",
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena4.jpg",
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena5.jpg",
      "/PROJETOS - HERBERT/LOJA EM TORITAMA/Lívio e Laís - 3D_Cena7.jpg",
    ],
    features: [
      "Design interior moderno e acolhedor",
      "Iluminação estratégica para produtos",
      "Provadores confortáveis e funcionais",
      "Sistema de climatização eficiente",
      "Área de caixa otimizada",
      "Vitrine atrativa na fachada",
      "Estoque organizado e acessível",
      "Área de descanso para clientes",
    ],
  },
  {
    id: 4,
    slug: "escritorio-em-toritama",
    title: "Escritório em Toritama",
    description:
      "Ambiente corporativo moderno projetado para produtividade e bem-estar, com espaços integrados e iluminação natural.",
    fullDescription:
      "Este projeto de escritório em Toritama foi concebido para criar um ambiente de trabalho que promove produtividade e bem-estar dos funcionários. O design privilegia espaços abertos e integrados, facilitando a colaboração entre equipes, enquanto também oferece áreas privativas para concentração e reuniões confidenciais. A iluminação natural foi maximizada através de grandes aberturas e o uso de cores neutras amplifica a sensação de amplitude. O projeto incluiu áreas de descanso, copa moderna e sala de reuniões equipada com tecnologia de ponta. O sistema de climatização foi dimensionado para garantir conforto térmico em todos os ambientes, contribuindo para um ambiente de trabalho saudável e produtivo.",
    category: "Comercial",
    year: "2023",
    location: "Toritama, PE",
    client: "Empresa de Consultoria Regional",
    area: "320 m²",
    duration: "8 meses",
    images: [
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/Scene 8.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/Scene 9.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena10.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena11.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena2.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena3.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena3(1).png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena4.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena6.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena7.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena8.png",
      "/PROJETOS - HERBERT/ESCRITORIO EM TORITAMA/SU_Cena9.png",
    ],
    features: [
      "Espaços abertos e integrados",
      "Salas de reunião com tecnologia avançada",
      "Iluminação natural otimizada",
      "Área de descanso e convivência",
      "Copa moderna e funcional",
      "Sistema de climatização eficiente",
      "Móveis ergonômicos",
      "Áreas privativas para concentração",
    ],
  },
  {
    id: 5,
    slug: "jazigo-em-cha-grande",
    title: "Jazigo em Chã Grande",
    description:
      "Projeto memorial com design respeitoso e elegante, criando um espaço de contemplação e homenagem.",
    fullDescription:
      "O projeto do jazigo em Chã Grande foi desenvolvido com profundo respeito e sensibilidade, criando um espaço digno de memória e contemplação. O design privilegia linhas sóbrias e materiais nobres, transmitindo serenidade e eternidade. A composição arquitetônica equilibra elementos tradicionais com toques contemporâneos, resultando em uma obra atemporal. O paisagismo integrado suaviza a arquitetura e cria um ambiente de paz e reflexão. Cada detalhe foi cuidadosamente pensado para honrar a memória e proporcionar conforto aos visitantes. O projeto demonstra como a arquitetura pode ser um instrumento de consolação e perpetuação da memória, combinando funcionalidade com profundo significado emocional.",
    category: "Institucional",
    year: "2023",
    location: "Chã Grande, PE",
    client: "Família Silva",
    area: "45 m²",
    duration: "4 meses",
    images: [
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Scene 1.png",
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Scene 4_1.png",
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Scene 7.png",
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Scene 8.png",
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Scene 9.png",
      "/PROJETOS - HERBERT/JAZIGO EM CHÃ GRANDE/Image(23).png",
    ],
    features: [
      "Design sóbrio e respeitoso",
      "Materiais nobres e duráveis",
      "Paisagismo integrado",
      "Iluminação suave e direcionada",
      "Elementos decorativos significativos",
      "Estrutura resistente às intempéries",
      "Espaço para contemplação",
      "Detalhes artesanais únicos",
    ],
  },
];
