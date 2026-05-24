import { propertiesData } from '../types';
import { Phone, Mail, Instagram, Linkedin, Shield, ChevronUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-white/10 overflow-hidden">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left" id="footer-logo-panel">
            <a href="#inicio" className="flex flex-col group w-fit">
              <span className="text-2xl font-display font-light tracking-[0.2em] text-white group-hover:text-primary-300 transition-colors uppercase">
                Tiago <span className="font-semibold text-primary-400">Lima</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] font-mono text-primary-420 uppercase -mt-0.5">
                ESPECIALISTA IMOBILIÁRIO
              </span>
            </a>
            <p className="text-stone-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              Assessoria patrimonial boutique voltada exclusivamente ao ecossistema de residências e corporações de refinamento autoral e alta liquidez sob estrito resguardo de privacidade.
            </p>
            {/* Social badges with thin rectangular borders */}
            <div className="flex gap-4 text-stone-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-950 hover:bg-[#C4A484] bg-white/5 border border-white/10 p-3 rounded-none transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5 fill-none" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-950 hover:bg-[#C4A484] bg-white/5 border border-white/10 p-3 rounded-none transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="lg:col-span-3 text-left" id="footer-nav-panel">
            <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C4A484] font-semibold mb-6">
              Navegação Interna
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                { label: 'SOBRE O ESPECIALISTA', href: '#sobre-mim' },
                { label: 'IMÓVEIS SELECIONADOS', href: '#imoveis' },
                { label: 'SIMULADOR FINANCEIRO', href: '#simulador' },
                { label: 'GABINETE DE ATENDIMENTO', href: '#contato' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs font-mono tracking-widest text-[#cbd6d0] hover:text-primary-400 transition-colors block w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Selected properties shortcut catalog in rectangular frames */}
          <div className="lg:col-span-4 text-left" id="footer-catalog-panel">
            <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#C4A484] font-semibold mb-6">
              Em Destaque Exclusivo
            </p>
            <div className="flex flex-col gap-4">
              {propertiesData.slice(0, 2).map((prop) => (
                <a
                  key={prop.id}
                  href="#imoveis"
                  className="flex items-center gap-3 bg-white/3 hover:bg-white/5 p-3 rounded-none border border-white/5 hover:border-white/10 transition-all text-left"
                >
                  <img
                    src={prop.imageUrl}
                    alt={prop.title}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 object-cover rounded-none shrink-0 border border-white/10"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-100 truncate">
                      {prop.title}
                    </p>
                    <p className="text-[9px] font-mono tracking-wider text-[#C4A484] mt-0.5 truncate uppercase">
                      {prop.location}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Divider Line */}
        <div className="h-px bg-white/10 w-full my-12" />

        {/* Lower Footer Segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-mono tracking-wider text-stone-500 text-center sm:text-left flex flex-col gap-1.5 uppercase">
            <p>
              © {new Date().getFullYear()} Tiago Lima - Especialista Imobiliário. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1.5 justify-center sm:justify-start">
              <Shield className="w-3.5 h-3.5 text-primary-400/80" />
              <span>CRECI ATIVO: SP 214.852-F • PERITO AVALIADOR CNAI 42.109</span>
            </p>
          </div>

          {/* Scrolling top trigger */}
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 text-[9px] text-stone-300 hover:bg-white hover:text-stone-950 font-mono uppercase bg-white/5 p-3 rounded-none border border-white/15 cursor-pointer tracking-widest transition-all"
            aria-label="Voltar ao início"
          >
            <span>Retornar ao topo</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* FLOATING ACTION UTILITY: WHATSAPP (LUXURY SAND ACCENT) */}
      <a
        href="https://wa.me/554299709687?text=Olá%20Tiago%2C%20estou%20na%20sua%20página%20e%20gostaria%20de%20conversar."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#C4A484] hover:bg-white text-stone-950 p-4 rounded-none shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-transparent select-none"
        title="Fale Direto com Tiago Lima"
      >
        <Phone className="w-5 h-5 fill-current" />
      </a>
    </footer>
  );
}
