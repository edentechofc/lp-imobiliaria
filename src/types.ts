export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'penthouse' | 'house';
  typeLabel: string;
  location: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  parkingSpaces: number;
  imageUrl: string;
  featured: boolean;
  description: string;
  amenities: string[];
  status: string; // "Pronto para Morar", "Exclusividade", "Em Construção", "Mobiliado"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Curated high-quality properties in high-end Brazilian regions
export const propertiesData: Property[] = [
  {
    id: 'prop-1',
    title: 'Cobertura Linear Leblon Vista Mar',
    type: 'penthouse',
    typeLabel: 'Cobertura',
    location: 'Leblon, Rio de Janeiro - RJ',
    price: 14900000,
    area: 410,
    bedrooms: 4,
    bathrooms: 6,
    suites: 4,
    parkingSpaces: 4,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    featured: true,
    status: 'Exclusividade',
    description: 'Espetacular cobertura linear a duas quadras da praia do Leblon. Área externa fantástica com deck de madeira naval, piscina aquecida privativa e vista desimpedida para as montanhas e mar lateral. Acabamento primoroso em mármore Travertino Romano e marcenaria de grife italiana.',
    amenities: ['Piscina Privativa', 'Espaço Gourmet Integrado', 'Vista Lateral Mar', 'Mármore Travertino', 'Automação Total', 'CRECI Exclusivo']
  },
  {
    id: 'prop-2',
    title: 'Apartamento Altíssimo Padrão nos Jardins',
    type: 'apartment',
    typeLabel: 'Apartamento',
    location: 'Jardins, São Paulo - SP',
    price: 6800000,
    area: 280,
    bedrooms: 3,
    bathrooms: 4,
    suites: 3,
    parkingSpaces: 3,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    featured: true,
    status: 'Pronto para Morar',
    description: 'Um ícone de elegância no coração dos Jardins. Living amplo cercado por janelas piso-teto que inundam o ambiente com luz natural. Cozinha gourmet equipada com eletrodomésticos importados da Alemanha e ar-condicionado central VRF inteligente.',
    amenities: ['Janelas Piso-Teto', 'Climatização VRF', 'Cozinha Gourmet Alemã', 'Segurança Privada 24h', 'Adega Climatizada']
  },
  {
    id: 'prop-3',
    title: 'Villa Contemporânea Alphaville',
    type: 'house',
    typeLabel: 'Casa de Condomínio',
    location: 'Alphaville, Santana de Parnaíba - SP',
    price: 12500000,
    area: 650,
    bedrooms: 5,
    bathrooms: 7,
    suites: 5,
    parkingSpaces: 6,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    status: 'Em Construção',
    description: 'Arquitetura autoral contemporânea com balanços estruturais dramáticos e integração total com a natureza. Área de lazer espetacular com piscina em borda infinita cercada de paisagismo tropical de alta costura.',
    amenities: ['Piscina Borda Infinita', 'Energia Solar Fotovoltaica', 'Arquitetura Autoral', 'Suíte Master 80m²', 'Segurança Armada']
  },
  {
    id: 'prop-4',
    title: 'Apartamento Higienópolis Minimalista',
    type: 'apartment',
    typeLabel: 'Apartamento',
    location: 'Higienópolis, São Paulo - SP',
    price: 4200000,
    area: 240,
    bedrooms: 3,
    bathrooms: 4,
    suites: 2,
    parkingSpaces: 2,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    status: 'Mobiliado',
    description: 'Retrofit completo assinado por escritório de arquitetura premiado. Localizado em um dos prédios modernistas mais icônicos do bairro, com vista privilegiada para as copas das árvores e o Parque Buenos Aires.',
    amenities: ['Retrofit Completo', 'Design Modernista', 'Área Social Integrada', 'Próximo a Parques', 'Pé-Direito de 3 metros']
  },
  {
    id: 'prop-5',
    title: 'Cobertura Duplex Ipanema Vista Cristo',
    type: 'penthouse',
    typeLabel: 'Cobertura',
    location: 'Ipanema, Rio de Janeiro - RJ',
    price: 9800000,
    area: 310,
    bedrooms: 3,
    bathrooms: 4,
    suites: 3,
    parkingSpaces: 2,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    featured: false,
    status: 'Exclusividade',
    description: 'Linda cobertura duplex reformada de acabamento impecável. No segundo pavimento, amplo terraço com churrasqueira de inox, jacuzzi aquecida e uma desimpedida vista panorâmica para o Cristo Redentor e Lagoa.',
    amenities: ['Jacuzzi Privativa', 'Vista Cristo Redentor', 'Terraço Recreativo', 'Portaria Presencial', 'Sistema de Segurança Integral']
  },
  {
    id: 'prop-6',
    title: 'Casa de Campo de Luxo Quinta da Baroneza',
    type: 'house',
    typeLabel: 'Casa de Campo / Condomínio',
    location: 'Quinta da Baroneza, Bragança Paulista - SP',
    price: 19500000,
    area: 820,
    bedrooms: 6,
    bathrooms: 8,
    suites: 6,
    parkingSpaces: 8,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    featured: true,
    status: 'Pronto para Morar',
    description: 'Uma verdadeira obra de arte do design biofílico integrado à paisagem campestre. Estruturas em madeira laminada colada e vidro de grandes formatos. Dispõe de quadra esportiva privativa, pomar orgânico e anexo para hóspedes completo.',
    amenities: ['Madeira Estrutural', 'Anexo de Hóspedes', 'Quadra de Beach Tennis', 'Pomar Orgânico', 'Heliporto Próximo']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carolina e Fernando de Alencar',
    role: 'Sócios da Alencar Investimentos',
    text: 'Encontrar um imóvel de alto padrão em São Paulo exige discrição e assertividade. O Tiago Lima superou as expectativas. Em vez de nos inundar com opções irrelevantes, ele fez uma curadoria cirúrgica de três propriedades e fechamos negócio de forma super fluida. Um verdadeiro especialista.',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Roberto Mendes',
    role: 'Neurocirurgião e Colecionador de Arte',
    text: 'O nível de conhecimento jurídico-imobiliário do Tiago Lima me deu total segurança na negociação da cobertura no Leblon. Ele analisou certidões, sugeriu cláusulas contratuais de proteção e coordenou com genialidade todas as partes. Serviço diferenciado que raramente se encontra no mercado de imobiliárias tradicionais.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Stella Maris Rezende',
    role: 'Designer de Interiores e Influenciadora',
    text: 'Tiago tem um olhar estético apurado e entende profundamente o que torna uma propriedade verdadeiramente exclusiva. O atendimento personalizado dele se estende no pós-venda, conectando fornecedores conceituados de automação e reforma. Recomendo de olhos fechados!',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual é o diferencial de contratar um Especialista Imobiliário em vez de uma imobiliária comum?',
    answer: 'Imobiliárias tradicionais operam em volume e fiação de corretores rotativos. Como Especialista Imobiliário, Tiago Lima preza pelo atendimento boutique e altamente individualizado. Há profunda análise financeira, checagem jurídica meticulosa e curadoria criteriosa voltada para o seu perfil e momento de vida, poupando o seu recurso mais valioso: o tempo.'
  },
  {
    id: 'faq-2',
    question: 'Como funciona o processo de curadoria exclusiva de imóveis?',
    answer: 'Nós iniciamos com uma reunião confidencial (Briefing) para compreender suas demandas de espaço, localização, segurança, hábitos familiares e planos financeiros. A partir disso, além dos imóveis abertos no mercado, acessamos nosso portfólio "Off-Market" (propriedades de altíssimo padrão cujos proprietários exigem discrição total e não publicam em portais comuns).'
  },
  {
    id: 'faq-3',
    question: 'O serviço de Tiago Lima engloba auxílio em financiamento bancário?',
    answer: 'Sim, de ponta a ponta. Atuamos em estreita parceria com agentes nos principais bancos de alta renda (Itaú Personnalité, Santander Select, Bradesco Prime e Caixa) para garantir as taxas de juros mais competitivas do mercado, estruturação da sua pasta de crédito com celeridade e aprovação garantida.'
  },
  {
    id: 'faq-4',
    question: 'Até quais regiões do Brasil vocês prestam assessoria?',
    answer: 'Nosso foco principal de atuação presencial e curadoria é em Itapema e em todo o litoral catarinense (como Balneário Camboriú, Praia Brava, Porto Belo e Florianópolis).'
  }
];
