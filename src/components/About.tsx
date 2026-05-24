import { CheckCircle2, Award, Shield, FileText, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-5 h-5 text-primary-600" />,
      title: 'CRECI Autêntico & Certificação COCI',
      description: 'Devidamente registrado sob CRECI e habilitado como Perito Avaliador Imobiliário para emissão de pareceres mercadológicos oficiais.',
    },
    {
      icon: <Shield className="w-5 h-5 text-primary-600" />,
      title: 'Due Diligence Jurídica',
      description: 'Auditoria fiscal, civil e trabalhista minuciosa de todas as partes e certidões antes da assinatura de qualquer sinal de reserva.',
    },
    {
      icon: <FileText className="w-5 h-5 text-primary-600" />,
      title: 'Estruturação Patrimonial Inteligente',
      description: 'Auxílio na formatação de Sociedades de Propósito Específico (SPE), Holdings Familiares e Planejamento Tributário Imobiliário.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary-600" />,
      title: 'Consultoria de Estilo e Design',
      description: 'Parcerias renomadas de engenharia de valor, designers de interiores de elite paulistanos e cariocas para retrofits sob medida.',
    },
  ];

  return (
    <section id="sobre-mim" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl pointer-events-none -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl pointer-events-none -ml-48 -mb-24" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Portrait Container */}
          <div className="lg:col-span-5 flex justify-center" id="about-visuals">
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl bg-[#0a0a0a] rounded-none">
              {/* Decorative Frame */}
              <div className="absolute inset-x-0 inset-y-0 border border-primary-400 translate-x-3 translate-y-3 z-0 pointer-events-none" />
              
              <img
                src="https://i.ibb.co/S7VK9QM9/tiago-lima.jpg"
                alt="Tiago Lima Especialista Imobiliário"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover relative z-10 transform hover:scale-105 transition-all duration-500"
              />
              
              {/* Floating Registry Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/95 backdrop-blur-md border border-white/10 p-4 rounded-none z-20 flex items-center justify-between shadow-xl">
                <div className="text-left">
                  <p className="text-[9px] font-mono tracking-widest text-[#C4A484] uppercase">
                    REGISTRO COCI / CRECI
                  </p>
                  <p className="text-white font-medium font-display text-xs tracking-wider mt-0.5">
                    CRECI-SP 214.852-F
                  </p>
                </div>
                <div className="bg-primary-400 text-[#0a0a0a] border border-transparent px-2.5 py-1 rounded-none text-[8px] font-mono font-semibold uppercase tracking-[0.15em]">
                  ATIVO REGULAR
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative content */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6" id="about-narrative">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C4A484] font-semibold bg-white border border-stone-200 px-3 py-1 rounded-none w-fit">
              ESPECIALISTA CREDENCIADO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-stone-900 tracking-tight leading-tight">
              A diferença real entre corretagem comum e <br />
              <span className="font-semibold text-primary-700 italic">
                Cura Imobiliária Customizada
              </span>
            </h2>

            <div className="h-0.5 w-16 bg-primary-400" />

            <div className="text-stone-605 text-sm sm:text-base font-light leading-relaxed flex flex-col gap-4">
              <p>
                O ecossistema residencial e corporativo de altíssimo padrão não tem espaço para redundâncias ou prospecção aleatória. Para o investidor de liquidez ou para o grupo familiar consolidado, o imóvel representa um marco definitivo de preservação e usufruto de patrimônio.
              </p>
              <p>
                Conduzo os serviços de intermediação e due diligence sob pilares técnico-jurídicos rigorosos: análise microeconômica de zonas urbanas prioritárias, inteligência de certidões cartorárias e engenharia de valor em retrofits sob medida.
              </p>
              <p>
                Minha prioridade metodológica é zelar por seu ativo mais escasso: seu tempo de agenda. Não faço divulgações inóspitas. Cada residência exibida é submetida a triagem estética de traços autorais e resguardo de riscos corporativos.
              </p>
            </div>

            {/* Custom Values Block with thin editorial line cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4" id="about-values-grid">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-none bg-white border border-stone-150 hover:bg-stone-100/50 transition-colors flex flex-col gap-2.5 shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 text-left">
                    <div className="text-primary-400 shrink-0">
                      {v.icon}
                    </div>
                    <h3 className="text-stone-900 font-semibold uppercase font-display text-xs tracking-wider">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-stone-500 text-xs font-light leading-relaxed text-left">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="border-l border-primary-400 pl-4 py-3 bg-white border-y border-r border-stone-150 mt-4 text-left">
              <p className="italic text-stone-700 font-light text-xs sm:text-sm leading-relaxed">
                "No mercado de alta renda, a sofisticação não está no excesso de detalhes. O luxo autêntico repousa na segurança contratual irretocável, na curadoria que entende o silêncio urbano e na discrição absoluta das partes."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
