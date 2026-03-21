
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LandingPage = () => {
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* TopNavBar */}
      <nav className="bg-[#f7f9fb] dark:bg-slate-950 docked full-width top-0 z-50 border-b border-[#dfbfbc]/20 shadow-sm dark:shadow-none sticky">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-serif font-bold text-[#8b1c1c] dark:text-white uppercase tracking-tighter relative -top-[0px]">
              {t('branding')} <span className="text-stone-400 font-light mx-1">x</span> AILOGY
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-[#8b1c1c] dark:text-[#d4af37] font-bold border-b-2 border-[#d4af37] pb-1" to="/">{t('nav.home')}</Link>
            <a className="text-[#191c1e] dark:text-slate-300 hover:text-[#8b1c1c] transition-colors" href="#architecture">{t('nav.architecture')}</a>
            <a className="text-[#191c1e] dark:text-slate-300 hover:text-[#8b1c1c] transition-colors" href="#pillars">{t('nav.pillars')}</a>
            <a className="text-[#191c1e] dark:text-slate-300 hover:text-[#8b1c1c] transition-colors" href="#flow">{t('nav.simulation')}</a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="bg-[#8b1c1c] text-white px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#6a0008] transition-all"
            >
              {t('nav.enter_dashboard')}
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-24 px-8 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border-l-4 border-secondary mb-6">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>security</span>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{t('landing.hero_badge')}</span>
            </div>
            <h1 className="text-6xl font-extrabold text-primary leading-[1.1] mb-8 tracking-tight font-headline">
              {t('landing.hero_title')}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl font-headline italic">
              {t('landing.hero_subtitle')}
            </p>
            <div className="flex gap-4">
              {/* Buttons removed as requested */}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>

            {/* AI Chat Mockup */}
            <div className="glass-panel border-t-2 border-primary p-6 rounded-sm shadow-maroon relative bg-white/80 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>smart_toy</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-headline">{t('landing.assistant_name')}</h4>
                    <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">{t('landing.assistant_status')}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-surface-container-high px-4 py-3 rounded-lg max-w-[80%] text-sm">
                    {t('landing.chat_query')}
                  </div>
                </div>
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xs">auto_awesome</span>
                  </div>
                  <div className="bg-white border-l-2 border-secondary p-4 rounded-lg shadow-sm text-sm leading-relaxed">
                    <p className="font-bold mb-2 text-primary">{t('landing.chat_response_title')}</p>
                    <ul className="list-disc ml-4 space-y-1 text-on-surface-variant">
                      {(t('landing.chat_response_list', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-outline-variant/20 flex gap-2">
                      <span className="px-2 py-1 bg-primary/5 text-[10px] text-primary font-bold rounded">#Nghidinh123</span>
                      <span className="px-2 py-1 bg-primary/5 text-[10px] text-primary font-bold rounded">#BienChe2024</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container p-3 rounded-sm flex items-center gap-3">
                <input className="bg-transparent border-none focus:ring-0 text-sm flex-grow outline-none" placeholder={t('landing.chat_placeholder')} type="text" />
                <span className="material-symbols-outlined text-primary cursor-pointer">send</span>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Pillars */}
        <section id="architecture" className="bg-surface-container-low py-24 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4 italic font-headline">{t('landing.architecture_title')}</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PillarCard
                icon="dns"
                title={t('landing.arch_llm_title')}
                description={t('landing.arch_llm_desc')}
              />
              <PillarCard
                icon="database"
                title={t('landing.arch_rag_title')}
                description={t('landing.arch_rag_desc')}
              />
              <PillarCard
                icon="verified_user"
                title={t('landing.arch_zt_title')}
                description={t('landing.arch_zt_desc')}
              />
              <PillarCard
                icon="translate"
                title={t('landing.arch_vn_title')}
                description={t('landing.arch_vn_desc')}
              />
            </div>
          </div>
        </section>

        {/* Strategic Pillars (Bento Grid) */}
        <section id="pillars" className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-primary mb-4 tracking-tight font-headline">{t('landing.pillars_title')}</h2>
              <p className="text-lg text-on-surface-variant italic font-headline">{t('landing.pillars_subtitle')}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
              <div className="w-3 h-3 bg-primary/20 rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[240px]">
            <BentoBlock
              span="md:col-span-3 lg:col-span-4"
              bg="bg-primary"
              textColor="text-white"
              icon="groups"
              title={t('landing.pillar_hr')}
              description={t('landing.pillar_hr_desc')}
            />
            <BentoBlock
              span="md:col-span-3 lg:col-span-4"
              bg="bg-secondary"
              textColor="text-white"
              icon="dynamic_form"
              title={t('landing.pillar_reform')}
              description={t('landing.pillar_reform_desc')}
            />
            <BentoBlock
              span="md:col-span-3 lg:col-span-4"
              bg="bg-surface-container-high border-t-4 border-primary"
              textColor="text-primary"
              icon="archive"
              title={t('landing.pillar_archive')}
              description={t('landing.pillar_archive_desc')}
              descColor="text-on-surface-variant"
            />
            <BentoBlock
              span="md:col-span-3 lg:col-span-3"
              bg="bg-white shadow-maroon"
              textColor="text-primary"
              icon="analytics"
              title={t('landing.pillar_data')}
              description={t('landing.pillar_data_desc')}
              descColor="text-on-surface-variant"
            />
            <BentoBlock
              span="md:col-span-3 lg:col-span-6"
              bg="bg-white shadow-maroon border-l-4 border-secondary"
              textColor="text-primary"
              icon="school"
              title={t('landing.pillar_training')}
              description={t('landing.pillar_training_desc')}
              descColor="text-on-surface-variant"
            />
            <BentoBlock
              span="md:col-span-3 lg:col-span-3"
              bg="bg-primary-container"
              textColor="text-white"
              icon="balance"
              title={t('landing.pillar_ethics')}
              description={t('landing.pillar_ethics_desc')}
            />
          </div>
        </section>

        {/* Business Flow (Rewards) */}
        <section id="flow" className="bg-[#f2f4f6] py-24 px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">{t('landing.case_study_badge')}</span>
              <h2 className="text-4xl font-bold text-primary font-headline">{t('landing.case_study_title')}</h2>
            </div>
            <div className="relative flex flex-col lg:flex-row justify-between gap-8">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 -z-0"></div>

              <StepBlock number="01" title={t('landing.step1_title')} description={t('landing.step1_desc')} />
              <StepBlock number="02" title={t('landing.step2_title')} description={t('landing.step2_desc')} />

              <div className="relative z-20 lg:w-1/5 -mt-4 lg:mt-[-2rem]">
                <div className="bg-primary text-white p-8 shadow-xl border-t-4 border-secondary transform lg:scale-110">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-3xl font-serif text-secondary font-bold">03</div>
                    <span className="material-symbols-outlined text-secondary animate-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
                  </div>
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest font-sans">{t('landing.step3_title')}</h4>
                  <p className="text-[11px] text-white/80 leading-relaxed italic font-headline">
                    {t('landing.step3_desc')}
                  </p>
                </div>
              </div>

              <StepBlock number="04" title={t('landing.step4_title')} description={t('landing.step4_desc')} />
              <StepBlock number="05" title={t('landing.step5_title')} description={t('landing.step5_desc')} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f2f4f6] dark:bg-slate-900 w-full mt-auto border-t-4 border-[#8b1c1c]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">
          <div className="md:col-span-2">
            <div className="text-lg font-serif font-bold text-[#8b1c1c] dark:text-[#d4af37] mb-6">{t('branding')}</div>
            <p className="font-sans text-sm tracking-wide text-slate-600 dark:text-slate-400 mb-8 max-w-md">
              {t('footer.center')}
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">social_leaderboard</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">language</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-100 opacity-80 transition-opacity">mail</span>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-[#8b1c1c] dark:text-[#d4af37] mb-6">{t('footer.links')}</h4>
            <ul className="space-y-4">
              <FooterLink label={t('footer.privacy')} />
              <FooterLink label={t('footer.terms')} />
              <FooterLink label={t('footer.contact')} />
              <FooterLink label={t('footer.sitemap')} />
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-[#8b1c1c] dark:text-[#d4af37] mb-6">{t('footer.contact_info')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('footer.address')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm">phone</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">024.3766.3999</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 py-6 text-center">
          <p className="font-sans text-xs tracking-widest text-slate-500">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>

      {/* Global Floating Assistant Bubble */}
      <>
        {/* Mini Chat Box */}
        {isChatOpen && (
          <div className="fixed bottom-24 right-8 z-[70] w-96 h-[500px] bg-white/90 backdrop-blur-xl border border-[#dfbfbc]/30 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300 rounded-sm">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs">smart_toy</span>
                </div>
                <span className="font-serif font-bold text-sm tracking-tight">{t('copilot.assistant_name')}</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)} 
                className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-stone-50/30">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                  <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                </div>
                <div className="relative">
                  <div className="bg-white p-4 rounded-sm shadow-sm text-xs text-slate-700 leading-relaxed max-w-[90%] border-l-4 border-secondary border-b border-outline-variant/10">
                    <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[8px] opacity-60">AI Assistant</p>
                    Xin chào! Tôi có thể giúp gì cho bạn hôm nay?
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#dfbfbc]/10">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text" 
                  placeholder="Nhập câu hỏi của bạn..." 
                  className="w-full bg-stone-50 border border-outline-variant/30 px-4 py-3 rounded-sm text-sm focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-stone-300"
                />
                <button className="bg-primary text-white w-10 h-10 rounded-sm hover:scale-95 transition-transform flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bubble Trigger */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group ${
            isChatOpen ? 'bg-secondary text-white rotate-90 scale-110' : 'bg-primary-container text-white hover:scale-110'
          }`}
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {isChatOpen ? 'close' : 'smart_toy'}
          </span>
          {!isChatOpen && (
            <div className="absolute -top-12 right-0 bg-stone-900 text-white text-[10px] py-1.5 px-3 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
              {t('copilot.assistant_name')}
            </div>
          )}
        </button>
      </>
    </div>
  );
};

const PillarCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-8 shadow-maroon group hover:-translate-y-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-primary/5 rounded-sm flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-primary font-headline">{title}</h3>
    <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
  </div>
);

const BentoBlock = ({ span, bg, textColor, icon, title, description, descColor = "text-white/80" }: any) => (
  <div className={`${span} ${bg} ${textColor} p-8 rounded-sm relative overflow-hidden flex flex-col justify-end group`}>
    <span className={`material-symbols-outlined absolute top-4 right-4 ${textColor} opacity-20 text-7xl group-hover:scale-110 transition-transform`}>{icon}</span>
    <h3 className="text-2xl font-bold mb-2 font-headline">{title}</h3>
    <p className={`text-sm ${descColor}`}>{description}</p>
  </div>
);

const StepBlock = ({ number, title, description }: any) => (
  <div className="relative z-10 lg:w-1/5">
    <div className="bg-white p-6 shadow-sm border-t-2 border-outline-variant">
      <div className="text-3xl font-serif text-outline-variant/50 font-bold mb-4">{number}</div>
      <h4 className="font-bold text-on-surface mb-2 uppercase text-xs tracking-tighter font-sans">{title}</h4>
      <p className="text-[11px] text-on-surface-variant">{description}</p>
    </div>
  </div>
);

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a className="text-slate-600 dark:text-slate-400 hover:text-[#8b1c1c] text-sm underline decoration-[#d4af37] underline-offset-4 transition-all" href="#">
      {label}
    </a>
  </li>
);
