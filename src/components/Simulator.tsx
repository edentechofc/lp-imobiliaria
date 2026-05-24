import { useState, useEffect } from 'react';
import { Calculator, ShieldAlert, BadgeInfo, CheckCircle } from 'lucide-react';

export default function Simulator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(6800000); // default R$ 6.8M
  const [downPaymentRate, setDownPaymentRate] = useState<number>(20); // default 20% down
  const [interestRate, setInterestRate] = useState<number>(10.5); // default annual tax
  const [termYears, setTermYears] = useState<number>(20); // default 20 years term
  const [amortizationSystem, setAmortizationSystem] = useState<'SAC' | 'PRICE'>('SAC');

  // Calculated States
  const [financedAmount, setFinancedAmount] = useState<number>(0);
  const [firstInstallment, setFirstInstallment] = useState<number>(0);
  const [lastInstallment, setLastInstallment] = useState<number>(0);
  const [requiredIncome, setRequiredIncome] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  // Auto-recalculate math when sliders or inputs shift
  useEffect(() => {
    const downPayment = propertyPrice * (downPaymentRate / 100);
    const principal = propertyPrice - downPayment;
    const n = termYears * 12; // months
    const i = interestRate / 12 / 100; // monthly rate

    setFinancedAmount(principal);

    if (principal <= 0) {
      setFirstInstallment(0);
      setLastInstallment(0);
      setRequiredIncome(0);
      setTotalInterest(0);
      setTotalCost(0);
      return;
    }

    if (amortizationSystem === 'SAC') {
      // SAC: Constant Amortization, Decreasing Interest
      const monthlyAmortization = principal / n;
      
      // First installment = monthlyAmortization + principal * i
      const firstInstall = monthlyAmortization + principal * i;
      // Last installment = monthlyAmortization + monthlyAmortization * i
      const lastInstall = monthlyAmortization + monthlyAmortization * i;

      // Total interest in SAC is calculated progressively:
      // sum( (principal - k * monthlyAmortization) * i ) from k=0 to n-1
      // Formula: total interest = (n * principal * i + principal * i) / 2
      // Actually: total interest = i * principal * (n + 1) / 2
      const totalInt = i * principal * (n + 1) / 2;
      const totalAmount = principal + totalInt;

      setFirstInstallment(firstInstall);
      setLastInstallment(lastInstall);
      setTotalInterest(totalInt);
      setTotalCost(totalAmount);
      // Min required income (normally first installment cannot exceed 30% of household income)
      setRequiredIncome(firstInstall / 0.3);
    } else {
      // PRICE: Constant Installment, Increasing Amortization
      // Formula: PMT = principal * (i * (1+i)^n) / ((1+i)^n - 1)
      let installmentPrice = 0;
      if (i === 0) {
        installmentPrice = principal / n;
      } else {
        installmentPrice = principal * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      }

      const totalAmount = installmentPrice * n;
      const totalInt = totalAmount - principal;

      setFirstInstallment(installmentPrice);
      setLastInstallment(installmentPrice);
      setTotalInterest(totalInt);
      setTotalCost(totalAmount);
      setRequiredIncome(installmentPrice / 0.3);
    }
  }, [propertyPrice, downPaymentRate, interestRate, termYears, amortizationSystem]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const downPaymentValue = propertyPrice * (downPaymentRate / 100);

  return (
    <section id="simulador" className="py-24 bg-stone-950 text-white relative overflow-hidden border-b border-white/10">
      {/* Background radial soft light blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-none bg-white/5 border border-white/10">
            <Calculator className="w-4 h-4 text-[#C4A484]" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#C4A484] uppercase">
              ENGENHARIA DE VALOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white tracking-tight leading-tight">
            Análise e <span className="font-semibold text-primary-400 italic">Estruturação de Crédito VIP</span>
          </h2>
          <div className="h-0.5 w-16 bg-[#C4A484] my-1" />
          <p className="text-white/60 text-sm sm:text-base font-light">
            Calcule e estruture a alocação de liquidez do seu próximo ativo de forma interativa. Simule cenários com taxas personalizadas de financiamento de alta renda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-display">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-none flex flex-col gap-6 sm:gap-7" id="simulator-inputs">
            <h3 className="text-sm uppercase tracking-[0.15em] font-mono font-semibold border-b border-white/10 pb-4 text-left text-primary-400">
              Parâmetros de Simulação
            </h3>

            {/* Slider 1: Property Price */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <label className="text-xs sm:text-sm font-medium text-stone-200 tracking-wide">
                  Valor do Imóvel
                </label>
                <span className="text-base sm:text-lg font-semibold text-primary-400 font-mono">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min={2000000}
                max={25000000}
                step={250000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#C4A484] cursor-pointer my-0.5"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-white/40 font-mono">
                <span>R$ 2M</span>
                <span>R$ 13,5M</span>
                <span>R$ 25M</span>
              </div>
            </div>

            {/* Slider 2: Down Payment Rate (%) */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <label className="text-xs sm:text-sm font-medium text-stone-200 tracking-wide">
                  Entrada (Aporte Próprio)
                </label>
                <span className="text-sm sm:text-base font-semibold text-white font-mono">
                  {downPaymentRate}% <span className="text-white/50 text-xs font-normal">({formatCurrency(downPaymentValue)})</span>
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={80}
                step={5}
                value={downPaymentRate}
                onChange={(e) => setDownPaymentRate(Number(e.target.value))}
                className="w-full accent-[#C4A484] cursor-pointer my-0.5"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-white/40 font-mono">
                <span>20% (Aporte Mínimo)</span>
                <span>50%</span>
                <span>80%</span>
              </div>
            </div>

            {/* Slider 3: Term (Years) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <label className="text-xs sm:text-sm font-medium text-stone-200 tracking-wide">
                    Prazo
                  </label>
                  <span className="text-sm font-semibold text-white font-mono">
                    {termYears} Anos <span className="text-[11px] text-white/40">({termYears * 12}m)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={35}
                  step={1}
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="w-full accent-[#C4A484] cursor-pointer my-0.5"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>5 anos</span>
                  <span>35 anos</span>
                </div>
              </div>

              {/* Slider 4: Interest Rate (%) */}
              <div className="flex flex-col gap-2.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <label className="text-xs sm:text-sm font-medium text-stone-200 tracking-wide">
                    Juros Anual
                  </label>
                  <span className="text-sm font-semibold text-white font-mono">
                    {interestRate}% a.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={13}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#C4A484] cursor-pointer my-0.5"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>8% (Taxa VIP)</span>
                  <span>13%</span>
                </div>
              </div>
            </div>

            {/* Selector: Amortization Style with elegant design */}
            <div className="flex flex-col gap-3 pt-2">
              <label className="text-xs sm:text-sm font-medium text-left text-stone-200 tracking-wide">
                Sistema de Amortização
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAmortizationSystem('SAC')}
                  className={`py-3.5 px-4 rounded-none text-xs font-semibold uppercase tracking-wider transition-all flex flex-col items-center gap-1 cursor-pointer border ${
                    amortizationSystem === 'SAC'
                      ? 'bg-primary-400 border-transparent text-stone-950 shadow-md font-bold'
                      : 'bg-stone-950/40 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <span className="text-xs tracking-widest font-mono uppercase">Tabela SAC</span>
                  <span className={`text-[10px] font-mono font-normal lowercase ${amortizationSystem === 'SAC' ? 'text-stone-950' : 'text-white/44'}`}>
                    Parcelas Decrescentes
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setAmortizationSystem('PRICE')}
                  className={`py-3.5 px-4 rounded-none text-xs font-semibold uppercase tracking-wider transition-all flex flex-col items-center gap-1 cursor-pointer border ${
                    amortizationSystem === 'PRICE'
                      ? 'bg-primary-400 border-transparent text-stone-950 shadow-md font-bold'
                      : 'bg-stone-950/40 border border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <span className="text-xs tracking-widest font-mono uppercase">Tabela PRICE</span>
                  <span className={`text-[10px] font-mono font-normal lowercase ${amortizationSystem === 'PRICE' ? 'text-stone-955' : 'text-white/44'}`}>
                    Prestações Constantes
                  </span>
                </button>
              </div>
            </div>

            {/* Note alert */}
            <div className="flex gap-2.5 p-3.5 bg-white/5 border border-white/10 rounded-none text-white/50 text-[10px] sm:text-xs">
              <BadgeInfo className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
              <p className="text-left font-light leading-snug">
                As taxas dependem do histórico financeiro do proponente. O Perito Tiago Lima estrutura negociações diretas com o comitê private de múltiplos bancos parceiros.
              </p>
            </div>
          </div>

          {/* Results Output Panel with beautiful matte dark background */}
          <div className="lg:col-span-6 bg-[#0a0a0a] border border-primary-400/20 p-6 sm:p-8 rounded-none flex flex-col justify-between gap-6" id="simulator-results">
            <div className="flex flex-col gap-6">
              <h3 className="text-xs uppercase tracking-[0.15em] font-mono font-semibold border-b border-white/10 pb-4 text-[#C4A484] text-left">
                Resultado de Projeção Estendida
              </h3>

              {/* Main numerical breakdown */}
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <span className="text-[9px] text-[#C4A484] block font-mono uppercase tracking-widest">
                    Limite do Crédito
                  </span>
                  <span className="text-base sm:text-lg font-medium font-display text-white mt-1 block tracking-wide font-mono">
                    {formatCurrency(financedAmount)}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-[#C4A484] block font-mono uppercase tracking-widest">
                    Rendimento Mínimo Mensal
                  </span>
                  <span className="text-base sm:text-lg font-medium font-display text-primary-400 mt-1 block tracking-wide font-mono">
                    {formatCurrency(requiredIncome)}
                  </span>
                  <span className="text-[8px] text-white/40 font-mono italic block mt-0.5">Composição familiar em 30% máx.</span>
                </div>
              </div>

              {/* Primary Installment Metrics with signature dark box line */}
              <div className="p-4 sm:p-5 bg-white/5 rounded-none border border-white/10 text-left flex flex-col gap-3">
                <span className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#C4A484] font-semibold">
                  Previsão de Prestações Mensais
                </span>
                
                {amortizationSystem === 'SAC' ? (
                  <div className="grid grid-cols-2 gap-4 divide-x divide-white/10 mt-1">
                    <div>
                      <span className="text-[9px] text-white/50 block font-mono uppercase">Primeira Parcela</span>
                      <span className="text-lg sm:text-xl font-medium font-display text-white mt-1 block tracking-wide font-mono">
                        {formatCurrency(firstInstallment)}
                      </span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[9px] text-white/50 block font-mono uppercase">Última Parcela</span>
                      <span className="text-lg sm:text-xl font-medium font-display text-primary-400 mt-1 block tracking-wide font-mono">
                        {formatCurrency(lastInstallment)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-[9px] text-white/50 block font-mono uppercase">Parcela Constante</span>
                    <span className="text-lg sm:text-xl font-medium font-display text-white mt-1 block tracking-wide font-mono">
                      {formatCurrency(firstInstallment)}
                    </span>
                  </div>
                )}
              </div>

              {/* Interest stats card */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-white/3 border border-white/5 rounded-none">
                  <span className="text-[8px] text-white/40 block font-mono uppercase tracking-wider">JURADOS TOTAIS ACUMULADOS</span>
                  <span className="text-sm font-semibold text-white mt-1 block font-mono">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
                <div className="p-4 bg-white/3 border border-white/5 rounded-none">
                  <span className="text-[8px] text-white/40 block font-mono uppercase tracking-wider">PREVISÃO FINAL RETORNO</span>
                  <span className="text-sm font-semibold text-white mt-1 block font-mono">
                    {formatCurrency(totalCost)}
                  </span>
                </div>
              </div>

              {/* Visual graph percentages */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between text-[9px] text-white/40 font-mono">
                  <span>FINANCIADO: {Math.round((financedAmount / totalCost) * 100)}%</span>
                  <span>TAXAS E ACUMULADOS: {Math.round((totalInterest / totalCost) * 100)}%</span>
                </div>
                {/* Composite block bar meter */}
                <div className="w-full h-1.5 bg-white/10 rounded-none overflow-hidden flex">
                  <div
                    className="bg-[#C4A484] h-full"
                    style={{ width: `${(financedAmount / totalCost) * 100}%` }}
                  />
                  <div
                    className="bg-white/20 h-full"
                    style={{ width: `${(totalInterest / totalCost) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* CTA action triggering */}
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <a
                href="#contato"
                className="flex items-center justify-center gap-2 w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] rounded-none bg-primary-400 hover:bg-white text-stone-950 hover:text-stone-950 transition-all text-center"
              >
                <span>Aprovar Simulação</span>
                <CheckCircle className="w-4 h-4" />
              </a>
              <p className="text-center text-[9px] text-[#C4A484]/70 font-mono uppercase tracking-wider">
                Sua simetria de saldo será compartilhada em caráter sigiloso com Tiago Lima.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
