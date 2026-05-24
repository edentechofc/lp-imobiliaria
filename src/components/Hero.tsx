import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ end, duration = 2000, decimals = 0, prefix = '', suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing: easeOutQuad to behave smoothly
      const easeProgress = progress * (2 - progress);
      
      const currentValue = startValue + easeProgress * (end - startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isIntersecting, end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toFixed(decimals).replace('.', ',')}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-stone-50 flex items-center justify-center overflow-hidden pt-28 pb-20 border-b border-stone-200"
    >
      {/* Immersive background image with luxury high-end light treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
          alt="Mansão de Luxo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 opacity-20 brightness-[1.05] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-stone-50/80 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-stone-50/50 z-1" />
      </div>

      {/* Decorative Rotating Text Border Line on Right Column background */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block z-5 pointer-events-none opacity-25">
        <p className="writing-[vertical-rl] select-none text-[10px] sm:text-[11px] font-mono tracking-[0.5em] text-stone-400 uppercase whitespace-nowrap">
          CURADORIA DE ALTO PADRÃO • INVESTIMENTOS IMOBILIÁRIOS • PARCEIRO OFF-MARKET
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Main core value messaging */}
        <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
          <div
            id="hero-badge"
            className="flex items-center gap-2.5 px-3 py-1 bg-white border border-stone-200 rounded-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A484]" />
            <span className="text-[10px] tracking-[0.2em] font-mono text-primary-700 uppercase font-medium">
              Curadoria de Alto Padrão • Mercados Off-Market
            </span>
          </div>

          <div className="flex flex-col">
            <p className="text-primary-600 italic font-display text-2xl lg:text-3xl mb-1 text-left">
              Consultoria Imobiliária de Elite
            </p>
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.85] font-display font-light text-stone-905 tracking-widest uppercase text-left"
            >
              Tiago<br />
              <span className="font-semibold text-primary-500">Lima</span>
            </h1>
          </div>

          <p
            id="hero-subtitle"
            className="text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-xl text-left font-sans mt-2"
          >
            Seja bem-vindo. Sou <strong className="font-semibold text-stone-900">Tiago Lima</strong>. 
            Minha missão transcende vender residências: faço a assessoria corporativa e familiar e a curadoria minuciosa para garantir compras inteligentes, celeridade e privacidade absoluta.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            id="hero-actions"
          >
            <a
              href="#imoveis"
              className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] bg-primary-400 hover:bg-stone-950 hover:text-white text-stone-950 px-8 py-4 rounded-none transition-all shadow-md"
            >
              <span>Portfólio Exclusivo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-900 hover:text-white bg-transparent hover:bg-stone-950 border border-stone-350 px-8 py-4 rounded-none transition-all"
            >
              <span>Solicitar Reunião Privada</span>
            </a>
          </div>

          {/* Minimal gold and thin border stat grid */}
          <div
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-stone-200 pt-8 mt-6 w-full max-w-lg"
            id="hero-stats"
          >
            <div className="hover:scale-[1.03] transition-transform duration-300">
              <p className="text-3xl sm:text-4xl font-display font-light text-stone-900">
                <CountUp end={1.2} duration={2500} decimals={1} prefix="R$ " suffix="B+" />
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-stone-500 mt-1">
                Volume Transacionado
              </p>
            </div>
            <div className="hover:scale-[1.03] transition-transform duration-300">
              <p className="text-3xl sm:text-4xl font-display font-light text-stone-900">
                <CountUp end={100} duration={2000} decimals={0} suffix="%" />
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-stone-500 mt-1">
                Garantia e Sigilo
              </p>
            </div>
            <div className="hover:scale-[1.03] transition-transform duration-300">
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-primary-600 tracking-wider">
                OFF-MARKET
              </p>
              <p className="text-[9px] uppercase font-mono tracking-widest text-stone-500 mt-1">
                Ativos Privados
              </p>
            </div>
          </div>
        </div>

        {/* Floating cards with thin architecture borders & serif details */}
        <div
          className="lg:col-span-5 hidden lg:flex flex-col gap-6 justify-center relative z-10"
          id="hero-features-decor"
        >
          {/* Box 1 */}
          <div className="bg-white border border-stone-200 p-6 rounded-none shadow-lg transition-all hover:border-primary-400 duration-300 flex items-start gap-4">
            <div className="bg-stone-50 p-3 rounded-none border border-stone-200 text-primary-500">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-stone-900 font-medium text-sm font-display uppercase tracking-widest">
                Assessoria Curatorial Boutique
              </h3>
              <p className="text-stone-500 text-[11px] font-light mt-1.5 leading-relaxed">
                Cada investidor possui premissas singulares. Oferecemos atendimento focado no refinamento do estilo arquitetônico e posicionamento de investimento.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-stone-200 p-6 rounded-none shadow-lg transition-all hover:border-primary-400 duration-300 flex items-start gap-4 ml-8">
            <div className="bg-stone-50 p-3 rounded-none border border-stone-200 text-primary-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-stone-900 font-medium text-sm font-display uppercase tracking-widest">
                Resguardo Jurídico e Confidencialidade
              </h3>
              <p className="text-stone-500 text-[11px] font-light mt-1.5 leading-relaxed">
                Segurança documental impecável, contratos customizados com cláusulas restritivas de confidencialidade e análise completa de passivos fiscais e societários.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-stone-200 p-6 rounded-none shadow-lg transition-all hover:border-primary-400 duration-300 flex items-start gap-4">
            <div className="bg-stone-50 p-3 rounded-none border border-stone-200 text-primary-500">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-stone-900 font-medium text-sm font-display uppercase tracking-widest">
                Portfólio Estritamente Secreto
              </h3>
              <p className="text-stone-500 text-[11px] font-light mt-1.5 leading-relaxed">
                Transacionamos as mais imponentes mansões e suntuosos e-coberturas de São Paulo e Rio de Janeiro que jamais são veiculados publicamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
