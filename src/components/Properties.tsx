import { useState } from 'react';
import { propertiesData, Property } from '../types';
import { Ruler, BedDouble, Car, Shield, SlidersHorizontal, ArrowUpDown, MessageSquare } from 'lucide-react';

interface PropertiesProps {
  onSelectPropertyForContact: (propertyName: string) => void;
}

export default function Properties({ onSelectPropertyForContact }: PropertiesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'apartment' | 'penthouse' | 'house'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(25000000);
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'area-desc'>('default');

  // Currency Converter helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  // 1. Category Filtering
  let filtered = propertiesData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  // 2. Price Filtering
  filtered = filtered.filter((item) => item.price <= maxPrice);

  // 3. Sorting
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'area-desc') {
    filtered.sort((a, b) => b.area - a.area);
  }

  const handleInterest = (prop: Property) => {
    // Scroll to contact form and pass the property name
    onSelectPropertyForContact(prop.title);
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="imoveis" className="py-24 bg-stone-100 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C4A484] font-semibold bg-white border border-stone-200 px-3 py-1 rounded-none">
            CURADORIA SELETA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-stone-900 tracking-tight leading-tight">
            Imóveis de <span className="font-semibold text-primary-450 italic">Assinatura Exclusiva</span>
          </h2>
          <div className="h-0.5 w-16 bg-[#C4A484] my-1" />
          <p className="text-stone-500 text-sm sm:text-base font-light">
            Explore ativos de prestígio selecionados rigorosamente por traçado arquitetônico de renome, privacidade acústica, segurança passiva e o mais nobre acabamento.
          </p>
        </div>

        {/* Filter Toolbar with sharp editorial design */}
        <div className="bg-white rounded-none p-6 sm:p-8 border border-stone-205 flex flex-col gap-6 mb-12 shadow-2xs">
          {/* Top layout: categories tab & sort options */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2" id="property-tabs">
              {[
                { id: 'all', label: 'Todos os Imóveis' },
                { id: 'apartment', label: 'Apartamentos' },
                { id: 'penthouse', label: 'Coberturas' },
                { id: 'house', label: 'Casas de Condomínio' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-none text-[9px] font-semibold uppercase tracking-[0.15em] transition-all cursor-pointer border ${
                    activeTab === tab.id
                      ? 'bg-stone-950 text-white border-transparent shadow-sm'
                      : 'bg-[#fafafa] text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sorting controls */}
            <div className="flex items-center gap-2 w-full lg:w-auto self-stretch lg:self-auto justify-end">
              <span className="text-[9px] text-stone-400 font-mono uppercase tracking-widest hidden sm:inline-block">
                ORDENAR POR:
              </span>
              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full sm:w-52 px-4 py-2 bg-[#fafafa] border border-stone-200 rounded-none text-[10px] uppercase tracking-wider text-stone-700 font-semibold focus:outline-none focus:border-primary-400 cursor-pointer appearance-none"
                >
                  <option value="default">Destaques e Relevância</option>
                  <option value="price-asc">Menor Preço de Tabela</option>
                  <option value="price-desc">Maior Preço de Tabela</option>
                  <option value="area-desc">Maior Área Privativa M²</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-stone-150 w-full" />

          {/* Interactive price threshold filter */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 flex items-center gap-2.5 text-stone-800">
              <SlidersHorizontal className="w-4 h-4 text-primary-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] font-semibold">
                Limitar Faixa de Investimento
              </span>
            </div>
            <div className="md:col-span-5 flex items-center gap-4">
              <input
                type="range"
                min={4000000}
                max={20000000}
                step={500000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#C4A484] cursor-pointer"
              />
            </div>
            <div className="md:col-span-3 text-right">
              <span className="text-[9px] uppercase tracking-wider text-stone-405 block font-mono">Teto Pretendido:</span>
              <span className="inline-block text-xs font-semibold text-stone-900 bg-primary-100 px-3 py-1.5 rounded-none border border-primary-200 font-mono mt-1">
                {maxPrice === 20000000 ? 'R$ 20M+' : formatCurrency(maxPrice)}
              </span>
            </div>
          </div>
        </div>

        {/* Properties Grid with Editorial Frame styling */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="properties-list-grid"
        >
          {filtered.length > 0 ? (
            filtered.map((prop) => (
              <article
                key={prop.id}
                className="bg-white rounded-none border border-stone-200 overflow-hidden shadow-none hover:border-primary-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Media frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-105">
                  <img
                    src={prop.imageUrl}
                    alt={prop.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Editorial Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 items-start">
                    <span className="px-3 py-1 rounded-none bg-stone-950 text-white text-[9px] font-mono uppercase tracking-[0.15em] font-semibold shadow-md">
                      {prop.typeLabel}
                    </span>
                    <span className="px-3 py-1 rounded-none bg-primary-400 text-stone-950 text-[9px] font-mono uppercase tracking-[0.15em] font-bold flex items-center gap-1 shadow-md">
                      <Shield className="w-3 h-3 fill-current" />
                      {prop.status}
                    </span>
                  </div>
                </div>

                {/* Info and specs */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left">
                  <div className="flex flex-col gap-2">
                    <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary-500 font-semibold">
                      {prop.location}
                    </p>
                    <h3 className="text-stone-905 font-display font-light text-xl leading-tight group-hover:text-primary-700 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-stone-500 text-xs font-light line-clamp-3 leading-relaxed mt-1">
                      {prop.description}
                    </p>
                  </div>

                  {/* Core numbers metrics with classic serif labels */}
                  <div className="grid grid-cols-3 gap-2 border-y border-stone-150 py-3.5 text-stone-700">
                    <div className="flex items-center gap-1.5 justify-start">
                      <Ruler className="w-4 h-4 text-primary-400/80" />
                      <div>
                        <p className="text-[8px] font-mono uppercase tracking-wider text-stone-400">ÁREA PRIV.</p>
                        <p className="text-xs font-semibold text-stone-800">{prop.area} m²</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center">
                      <BedDouble className="w-4 h-4 text-primary-400/80" />
                      <div>
                        <p className="text-[8px] font-mono uppercase tracking-wider text-stone-400">SUÍTES / DORM</p>
                        <p className="text-xs font-semibold text-stone-800">{prop.suites} / {prop.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <Car className="w-4 h-4 text-primary-400/80" />
                      <div>
                        <p className="text-[8px] font-mono uppercase tracking-wider text-stone-400">VAGAS COB.</p>
                        <p className="text-xs font-semibold text-stone-800">{prop.parkingSpaces} vg</p>
                      </div>
                    </div>
                  </div>

                  {/* Amenities pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {prop.amenities.slice(0, 3).map((amen, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-none bg-stone-50 border border-stone-200 text-[9px] tracking-wider text-stone-500 font-mono uppercase"
                      >
                        {amen}
                      </span>
                    ))}
                  </div>

                  {/* Pricing and request layout */}
                  <div className="flex flex-col gap-3 border-t border-stone-100 pt-4 mt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[8px] text-stone-400 block font-mono uppercase tracking-wider">Investimento Pretendido:</span>
                        <span className="text-lg font-light text-stone-900 font-display">
                          {formatCurrency(prop.price)}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleInterest(prop)}
                        className="w-full py-2.5 rounded-none bg-stone-950 hover:bg-[#C4A484] hover:text-stone-950 text-white font-semibold tracking-[0.1em] text-[8.5px] uppercase transition-all shadow-xs cursor-pointer active:scale-95 text-center"
                      >
                        Solicitar Ficha
                      </button>
                      <a
                        href={`https://wa.me/554299709687?text=${encodeURIComponent(
                          `Olá Tiago, gostaria de receber mais informações e detalhes sobre o imóvel: ${prop.title} (${prop.location}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-none bg-[#C4A484] hover:bg-stone-950 hover:text-white text-stone-950 font-semibold tracking-[0.1em] text-[8.5px] uppercase transition-all shadow-xs cursor-pointer active:scale-95 text-center flex items-center justify-center gap-1 border border-transparent"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-stone-400 flex flex-col items-center gap-3 bg-white border border-stone-200 rounded-none">
              <SlidersHorizontal className="w-8 h-8 opacity-40 text-stone-500" />
              <p className="font-light text-stone-600 text-sm">Nenhum ativo sintoniza a faixa de valor e o tipo selecionado.</p>
              <button
                onClick={() => {
                  setActiveTab('all');
                  setMaxPrice(25000000);
                }}
                className="text-xs font-mono font-bold text-primary-500 underline uppercase tracking-widest"
              >
                REDEFINIR PARÂMETROS
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
