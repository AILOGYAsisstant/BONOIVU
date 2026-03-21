
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-12 pb-24 px-12 max-w-7xl mx-auto">
      {/* Profile Header Section */}
      <section className="relative bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] rounded-sm mb-12 border-t-2 border-[#8b1c1c]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-10">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-sm overflow-hidden border-2 border-outline-variant/20 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                alt="Chân dung Công chức" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1tAT6X06gOgIbi1v03yRxukI6oM464zQ7FV1evRkTllVjAwIRyfVun6B_TVvvHw4EpGPcbt2BDCh032CyfVcYEiUKJbNdcgdQEojO4ywpzmQmlyyiZhuksN9iAAhvKOV3bhpOkOkOk9mFhbNSaIKYMtr22qWvYOmU2v_GeRLex4oBVvyYIwB9wS4YUupnfq2NdI9VRGFfrgocyRvtQY7aV3iUX0DNe3ElKg5Ck60fx71lYui30xRZ6rGpZT6MRWQQdQsSaiPpHsiM" 
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-1.5 rounded-sm shadow-md flex items-center gap-1 px-3">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{t('profile.verified')}</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-bold tracking-tight">{t('profile.name')}</h2>
              <p className="text-secondary font-medium mt-1">{t('profile.position_val')}</p>
              <p className="text-slate-500 text-sm italic mt-1">{t('profile.id')}: BNV-2024-00129</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <button className="bg-[#dc2626] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all">
                {t('profile.export_pdf')}
              </button>
              <button className="border border-secondary text-secondary px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-secondary/5 active:scale-95 transition-all">
                {t('profile.edit')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Column 1: Personal Details */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] p-6 rounded-sm border-t-2 border-[#d4af37]">
            <div className="flex items-center gap-2 mb-6 border-b border-[#dfbfbc]/30 pb-3">
              <span className="material-symbols-outlined text-[#8b1c1c]">badge</span>
              <h3 className="font-headline text-xl font-bold">{t('profile.personal_info')}</h3>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-slate-400 font-label text-[10px] uppercase tracking-widest">{t('profile.dob')}</span>
                <span className="font-semibold text-on-surface">{t('profile.dob_val')}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-400 font-label text-[10px] uppercase tracking-widest">{t('profile.hometown')}</span>
                <span className="font-semibold text-on-surface">{t('profile.hometown_val')}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-400 font-label text-[10px] uppercase tracking-widest">{t('profile.ethnicity')}</span>
                <span className="font-semibold text-on-surface">{t('profile.ethnicity_val')}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-400 font-label text-[10px] uppercase tracking-widest">{t('profile.contact_address')}</span>
                <span className="font-semibold text-on-surface">{t('profile.address_val')}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-slate-400 font-label text-[10px] uppercase tracking-widest">{t('profile.phone')}</span>
                <span className="font-semibold text-on-surface">0987 *** 456</span>
              </li>
            </ul>
          </div>

          {/* AI Competency Section */}
          <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] p-6 rounded-sm border-t-2 border-secondary relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-2 mb-6 border-b border-[#dfbfbc]/30 pb-3">
              <span className="material-symbols-outlined text-[#8b1c1c]">psychology</span>
              <h3 className="font-headline text-xl font-bold">{t('profile.digital_competency')}</h3>
            </div>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface uppercase tracking-tighter">{t('profile.genai_usage')}</span>
                  <span className="text-secondary font-headline font-bold">92%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[92%]"></div>
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface uppercase tracking-tighter">{t('profile.data_management')}</span>
                  <span className="text-secondary font-headline font-bold">85%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]"></div>
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-on-surface uppercase tracking-tighter">{t('profile.cyber_security')}</span>
                  <span className="text-secondary font-headline font-bold">78%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[78%]"></div>
                </div>
              </div>
              <div className="p-3 bg-surface-container-low rounded-sm border-l-2 border-secondary">
                <p className="text-[11px] text-slate-600 leading-relaxed italic">"{t('profile.ai_insight')}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 & 3: Main Timeline and Awards */}
        <div className="lg:col-span-2 space-y-8">
          {/* Career History Timeline */}
          <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] p-8 rounded-sm">
            <div className="flex items-center gap-2 mb-8 border-b border-[#dfbfbc]/30 pb-3">
              <span className="material-symbols-outlined text-[#8b1c1c]">work_history</span>
              <h3 className="font-headline text-2xl font-bold">{t('profile.career_history')}</h3>
            </div>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/50 before:to-transparent">
              {/* Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-sm text-[#8b1c1c]">stat_3</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border-l-2 border-[#8b1c1c] bg-surface-container-low/50">
                  <time className="font-headline font-bold text-[#8b1c1c]">2020 - {t('profile.current')}</time>
                  <div className="text-sm font-bold text-on-surface mt-1">{t('profile.career.title1')}</div>
                  <div className="text-xs text-slate-500">{t('profile.career.dept1')}</div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{t('profile.career.desc1')}</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-sm text-[#8b1c1c]">stat_2</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border-l-2 border-[#d4af37] bg-surface-container-low/50">
                  <time className="font-headline font-bold text-[#8b1c1c]">2015 - 2020</time>
                  <div className="text-sm font-bold text-on-surface mt-1">{t('profile.career.title2')}</div>
                  <div className="text-xs text-slate-500">{t('profile.career.dept2')}</div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{t('profile.career.desc2')}</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container-lowest shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-sm text-[#8b1c1c]">stat_1</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border-l-2 border-slate-300 bg-surface-container-low/50">
                  <time className="font-headline font-bold text-[#8b1c1c]">2010 - 2015</time>
                  <div className="text-sm font-bold text-on-surface mt-1">{t('profile.career.title3')}</div>
                  <div className="text-xs text-slate-500">{t('profile.career.dept3')}</div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{t('profile.career.desc3')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards/Commendations */}
          <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] p-8 rounded-sm">
            <div className="flex items-center gap-2 mb-8 border-b border-[#dfbfbc]/30 pb-3">
              <span className="material-symbols-outlined text-[#8b1c1c]">military_tech</span>
              <h3 className="font-headline text-2xl font-bold">{t('profile.awards')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-surface border-l-4 border-secondary flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{t('profile.awards_list.title1')}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{t('profile.awards_list.desc1')}</p>
                </div>
              </div>
              <div className="p-6 bg-surface border-l-4 border-[#8b1c1c] flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#8b1c1c] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{t('profile.awards_list.title2')}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{t('profile.awards_list.desc2')}</p>
                </div>
              </div>
              <div className="p-6 bg-surface border-l-4 border-slate-400 flex gap-4 items-start">
                <span className="material-symbols-outlined text-slate-400 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{t('profile.awards_list.title3')}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{t('profile.awards_list.desc3')}</p>
                </div>
              </div>
              <div className="p-6 bg-surface border-l-4 border-[#d4af37] flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#d4af37] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>award_star</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{t('profile.awards_list.title4')}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{t('profile.awards_list.desc4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
