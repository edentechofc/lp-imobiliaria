import React, { useState, useEffect } from 'react';
import { faqData } from '../types';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, CheckCircle2, X, AlertCircle } from 'lucide-react';

interface ContactProps {
  selectedProperty?: string;
  onClearSelectedProperty: () => void;
}

export default function Contact({ selectedProperty, onClearSelectedProperty }: ContactProps) {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestProperty, setInterestProperty] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQ States
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // Sync selectedProperty from parent
  useEffect(() => {
    if (selectedProperty) {
      setInterestProperty(selectedProperty);
      setMessage(`Prezado Tiago, tenho interesse no seu portfólio de alto padrão, especificamente no ativo "${selectedProperty}". Solicito a ficha técnica e detalhes estritamente confidenciais deste imóvel para análise.`);
    }
  }, [selectedProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name || !email || !phone) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending lead information to Tiago Lima's CRM/Inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Reset form fields
      onClearSelectedProperty();
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden border-b border-stone-200">
      {/* Decorative details */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-stone-50 rounded-full blur-3xl pointer-events-none -ml-40 -mt-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grid layout containing: Left FAQ + Contacts / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: FAQ & Credentials */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left" id="contact-faq-credentials">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C4A484] font-semibold bg-white border border-stone-200 px-3 py-1 rounded-none w-fit">
                ATENDIMENTO BOUTIQUE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight leading-tight">
                Dúvidas <br />
                <span className="font-semibold text-primary-750 italic">Frequentes</span>
              </h2>
              <div className="h-0.5 w-16 bg-[#C4A484] my-1" />
              <p className="text-stone-500 text-sm font-light">
                Esclareça rapidamente as diretrizes operacionais adotadas no modelo de assessoria patrimonial de Tiago Lima.
              </p>
            </div>

            {/* Expansible FAQ list */}
            <div className="flex flex-col gap-3.5 mt-2" id="faq-accordions">
              {faqData.map((faq) => {
                const isExpanded = expandedFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-stone-150 rounded-none overflow-hidden bg-[#fafafa] hover:bg-stone-50 transition-all shadow-2xs"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 font-semibold text-slate-900 text-xs sm:text-sm tracking-tight cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C4A484] shrink-0 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 pr-8 text-stone-605 text-xs font-light leading-relaxed border-t border-stone-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Information Badges in premium dark palette */}
            <div className="bg-[#0a0a0a] text-white p-6 rounded-none mt-4 flex flex-col gap-5 border border-white/10 shadow-xl">
              <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-primary-400">Canais de Resguardo</h3>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-none text-primary-400">
                  <Phone className="w-5 h-5 fill-none" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Telefone / Canal Exclusivo</p>
                  <a href="tel:+554299709687" className="text-sm font-semibold text-white hover:text-primary-400 transition-colors font-mono">
                    (42) 9970-9687
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-none text-primary-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider">E-mail Corporativo</p>
                  <a href="mailto:tiago_delima@hotmail.com" className="text-sm font-semibold text-white hover:text-primary-400 transition-colors font-mono">
                    tiago_delima@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/5 border border-white/10 p-3 rounded-none text-primary-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider">Gabinete Central</p>
                  <p className="text-sm text-white/90">
                    Rua 250, 33, Sala 04 - Itapema, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Converting Contact Form */}
          <div className="lg:col-span-7 bg-[#fafafa] rounded-none p-6 sm:p-10 border border-stone-200 text-left" id="contact-form-container">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C4A484] font-semibold">
              AGENDAMENTO PRIVADO
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-light text-stone-900 mt-2">
              Inicie sua Consultoria <span className="font-semibold text-primary-700 italic">Bespoke</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed mt-2 mb-8">
              Compartilhe suas premissas patrimoniais sob estrito acordo de confidencialidade. Tiago Lima responderá em no máximo 2 horas comerciais.
            </p>

            {formError && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5 rounded-none font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Field 1: Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-mono tracking-widest text-[#302117] font-semibold">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Alexandre de Souza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none text-sm font-light text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-400"
                />
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#302117] font-semibold">
                    E-mail de Contato *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: alexandre@holding.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none text-sm font-light text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-400"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#302117] font-semibold">
                    WhatsApp Corporativo *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (42) 9970-9687"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none text-sm font-light text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-400"
                  />
                </div>
              </div>

              {/* Field 3: Property Context Selection */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-[#302117] font-semibold">
                    Ativo de Preferência ou Bairro Selecionado
                  </label>
                  {interestProperty && (
                    <button
                      type="button"
                      onClick={() => setInterestProperty('')}
                      className="text-[9px] font-mono font-bold text-rose-700 uppercase underline"
                    >
                      Limpar
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Ex: Mansão Jardim Europa ou Cobertura Vieira Souto..."
                  value={interestProperty}
                  onChange={(e) => setInterestProperty(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none text-sm font-light text-slate-850 placeholder-slate-400 focus:outline-none focus:border-primary-400"
                />
              </div>

              {/* Field 4: Message text area */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-mono tracking-widest text-[#302117] font-semibold">
                  Notas de Restrição / Preferência Horário
                </label>
                <textarea
                  rows={4}
                  placeholder="Se preferir ligação criptografada fora de horário de expediente, mencione neste espaço."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-none text-sm font-light text-slate-850 placeholder-slate-400 focus:outline-none focus:border-primary-400 resize-y"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-none bg-stone-950 hover:bg-[#C4A484] hover:text-stone-950 text-white font-bold text-center uppercase tracking-[0.2em] text-xs shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>PROCESSANDO REQUERIMENTO...</span>
                  </>
                ) : (
                  <>
                    <span>REQUISITAR ATENDIMENTO</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* SUCCESS MODAL TRIGGER */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-white rounded-none border border-stone-200 max-w-md w-full p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-1 rounded-none text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-stone-50 text-primary-400 p-4 rounded-none border border-stone-200">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <span className="text-[10px] font-mono font-bold text-[#C4A484] uppercase tracking-widest">
                Manifestação Consubstanciada
              </span>
              <h4 className="text-2xl font-display font-light text-stone-905">
                Consulta Registrada
              </h4>
              <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed">
                Prezado(a) <strong className="font-semibold text-stone-800">{name}</strong>. Suas premissas de interesse foram encaminhadas diretamente ao canal pessoal do Perito <strong className="font-semibold text-stone-900">Tiago Lima</strong>. Aguarde contato reservado.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 rounded-none bg-stone-950 text-white hover:bg-[#C4A484] hover:text-stone-950 font-semibold uppercase tracking-[0.15em] text-[10px] transition-all"
              >
                Retornar ao Portfólio
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
