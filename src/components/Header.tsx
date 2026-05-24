import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Apresentação', href: '#inicio' },
    { label: 'Especialista', href: '#sobre-mim' },
    { label: 'Elegância Residencial', href: '#imoveis' },
    { label: 'Simulador Ativos', href: '#simulador' },
    { label: 'Testemunhos', href: '#depoimentos' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-[#0A0A0A]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Editorial Identity Logo representing high-couture real estate */}
        <a href="#inicio" className="flex items-center gap-3 group" id="header-logo">
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center text-[10px] font-mono tracking-tighter text-white group-hover:border-primary-400 transition-colors">
            TL
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-display font-light tracking-[0.25em] text-white group-hover:text-primary-400 transition-colors uppercase">
              Tiago <span className="font-semibold">Lima</span>
            </span>
            <span className="text-[8px] tracking-[0.2em] font-mono text-primary-400 uppercase">
              Especialista Imobiliário
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10" id="desktop-nav">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/554299709687?text=Olá%20Tiago%2C%20gostaria%20de%20conversar%20sobre%20imóveis%20de%20alto%20padrão."
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] bg-primary-400 hover:bg-primary-300 text-[#0a0a0a] px-5 py-2.5 rounded-none shadow-xl active:scale-95 transition-all text-center"
            id="cta-whatsapp-header"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Consultoria WhatsApp</span>
          </a>
          <a
            href="#contato"
            className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white hover:text-primary-400 px-4 py-2 bg-transparent hover:bg-white/5 border border-white/20 rounded-none transition-all"
            id="cta-contact-header"
          >
            <span>Reservar Reunião</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu logic */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-primary-400 hover:bg-white/5 p-2 rounded-none transition-colors"
          aria-label="Toggle Menu"
          id="mobile-menu-trigger"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[65px] h-[calc(100vh-65px)] bg-[#0C0C0C] z-40 transition-all duration-300 lg:hidden flex flex-col justify-between py-10 px-6 border-t border-white/5 ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        id="mobile-drawer"
      >
        <div className="flex flex-col gap-6">
          <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-primary-400 text-left">
            Seleção de Navegação
          </p>
          <div className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-light text-white hover:text-primary-400 text-left py-2 border-b border-white/5 block"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-center text-[9px] uppercase font-mono tracking-[0.2em] text-white/40">
            Escritório Tiago Lima
          </p>
          <a
            href="https://wa.me/554299709687"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary-400 hover:bg-primary-300 text-[#0a0a0a] font-semibold text-center uppercase tracking-[0.15em] text-xs shadow-xl active:scale-95 transition-all"
            id="mobile-whatsapp-cta"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full py-4 border border-white/15 bg-transparent hover:bg-white/5 text-white text-center uppercase tracking-[0.15em] text-[11px] font-semibold"
            id="mobile-contact-cta"
          >
            <span>Agendar Reunião de Gabinete</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
