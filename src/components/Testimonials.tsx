import { testimonialsData } from '../types';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-stone-50 relative overflow-hidden border-b border-stone-200">
      
      {/* Decorative background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-stone-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16 animate-fade-in">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C4A484] font-semibold bg-white border border-stone-200 px-3 py-1 rounded-none">
            RECONHECIMENTO GERAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-slate-900 tracking-tight leading-tight">
            Depoimentos de <span className="font-semibold text-primary-450 italic">Nossa Clientela</span>
          </h2>
          <div className="h-0.5 w-16 bg-[#C4A484] my-1" />
          <p className="text-stone-500 text-sm sm:text-base font-light">
            O testemunho de investidores, gestores de patrimônio e famílias de prestígio que atestam nosso discernimento contratual, rigor metodológico e blindagem de privacidade.
          </p>
        </div>

        {/* Testimonials layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-lists-grid">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-none p-8 border border-stone-200 flex flex-col justify-between h-full hover:border-[#C4A484] transition-all duration-300"
            >
              {/* Review metrics */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-primary-400">
                  <Quote className="w-8 h-8 opacity-25 fill-current" />
                  <div className="flex gap-0.5" title={`${test.rating} Estrelas`}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C4A484] text-[#C4A484]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-stone-605 font-light text-xs sm:text-sm leading-relaxed text-left italic">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-stone-150 pt-6 mt-6">
                <img
                  src={test.avatarUrl}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 object-cover rounded-none bg-stone-100 border border-stone-200"
                />
                <div className="text-left">
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-900">
                    {test.name}
                  </h4>
                  <p className="text-[9px] text-stone-400 font-mono uppercase tracking-widest mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
