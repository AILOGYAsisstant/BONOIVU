
import { useTranslation } from 'react-i18next';

export const AppraisalBoard = () => {
  const { t } = useTranslation();

  return (
    <main className="px-12 pb-12 pt-12 min-h-full">
      {/* Bento Layout for Insights */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Candidate Profile Quick Card */}
        <div className="col-span-4 bg-surface-container-lowest p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 bg-stone-100 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-3xl text-stone-400">person_search</span>
            </div>
            <span className="text-[10px] font-sans bg-secondary-container px-2 py-0.5 font-bold text-on-secondary-container uppercase">{t('appraisal.candidate.status')}</span>
          </div>
          <h4 className="font-serif text-xl font-bold text-primary mb-1">Nguyễn Văn A</h4>
          <p className="text-xs font-sans text-stone-500 mb-4 tracking-tight">{t('appraisal.candidate.position')}</p>
          <div className="space-y-2 border-t border-stone-100 pt-4">
            <div className="flex justify-between text-[11px]">
              <span className="text-stone-500">{t('appraisal.candidate.id')}</span>
              <span className="font-bold">CC-992831-2024</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-stone-500">{t('appraisal.candidate.proposed')}</span>
              <span className="font-bold text-secondary">{t('appraisal.candidate.reward_val')}</span>
            </div>
          </div>
        </div>

        {/* AI Risk/Confidence Score */}
        <div className="col-span-8 bg-surface-container-low p-6 flex items-center justify-between">
          <div className="flex-1">
            <h5 className="font-serif italic text-lg text-primary mb-1">{t('appraisal.confidence.title')}</h5>
            <p className="text-xs font-sans text-stone-600 mb-4">{t('appraisal.confidence.subtitle')}</p>
            <div className="w-full bg-stone-300 h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full" style={{ width: '82.5%' }}></div>
            </div>
            <div className="flex justify-between mt-2 font-sans text-[10px] font-bold">
              <span className="text-stone-500">{t('appraisal.confidence.low_risk')}</span>
              <span className="text-secondary">82.5% {t('appraisal.confidence.match_standard')}</span>
            </div>
          </div>
          <div className="ml-12 pl-12 border-l border-stone-300/50">
            <div className="text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <p className="text-[10px] font-bold uppercase tracking-tighter">{t('appraisal.confidence.recommend')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Appraisal Table */}
      <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] overflow-hidden">
        <div className="border-t-[3px] border-primary px-8 py-4 bg-surface-container-highest/30 flex justify-between items-center">
          <h5 className="font-serif font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">rule</span>
            {t('appraisal.table.title')}
          </h5>
          <span className="text-[10px] font-sans font-medium text-stone-500 italic">{t('appraisal.table.updated')} 14:02, 25/10/2023</span>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant/20">
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest w-1/4">{t('appraisal.table.th_standard')}</th>
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest w-1/3">{t('appraisal.table.th_achievement')}</th>
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest">{t('appraisal.table.th_evaluation')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {/* Row 1: Positive */}
            <tr className="hover:bg-stone-50/50 transition-colors">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">{t('appraisal.table.col1_title1')}</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">{t('appraisal.table.col1_desc1')}</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                    <span>{t('appraisal.table.col2_val1_1')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                    <span>{t('appraisal.table.col2_val1_2')}</span>
                  </div>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#107c10] text-white px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    {t('appraisal.table.status_met')}
                  </button>
                  <p className="text-[10px] text-stone-400 italic">{t('appraisal.table.source')}</p>
                </div>
              </td>
            </tr>
            {/* Row 2: Warning */}
            <tr className="bg-surface-container-low/20">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">{t('appraisal.table.col1_title2')}</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">{t('appraisal.table.col1_desc2')}</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-stone-800">
                    <span className="material-symbols-outlined text-[14px] text-amber-600">report</span>
                    <span>{t('appraisal.table.col2_val2_1')}</span>
                  </div>
                  <p className="text-[10px] text-amber-700 ml-6 bg-amber-50 p-2 rounded-sm italic">{t('appraisal.table.col2_val2_2')}</p>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#ffb900] text-[#4a3900] px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    {t('appraisal.table.status_query')}
                  </button>
                  <p className="text-[10px] text-primary underline cursor-pointer font-medium">{t('appraisal.table.request_extra')}</p>
                </div>
              </td>
            </tr>
            {/* Row 3: Standard */}
            <tr className="hover:bg-stone-50/50 transition-colors">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">{t('appraisal.table.col1_title3')}</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">{t('appraisal.table.col1_desc3')}</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                  <span>{t('appraisal.table.col2_val3')}</span>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#107c10] text-white px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter">
                    {t('appraisal.table.status_standard_met')}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contextual AI Insights Area */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-surface-variant/30 border-l-[4px] border-secondary p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-sm">lightbulb</span>
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-secondary">{t('appraisal.insights.precedent')}</h6>
          </div>
          <p className="text-xs font-sans leading-relaxed italic text-stone-600">{t('appraisal.insights.desc')}</p>
        </div>
        <div className="bg-primary/5 border-l-[4px] border-primary p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-primary">{t('appraisal.insights.related_doc')}</h6>
          </div>
          <ul className="text-[10px] font-sans space-y-1 text-stone-600">
            <li className="hover:underline cursor-pointer">• Luật Thi đua, Khen thưởng số 06/2022/QH15</li>
            <li className="hover:underline cursor-pointer">• Thông tư 01/2024/TT-BNV hướng dẫn...</li>
          </ul>
        </div>
        <div className="bg-surface-container-low p-4 flex flex-col justify-center items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">{t('appraisal.insights.digital_signature')}</p>
          <div className="w-16 h-16 opacity-10 grayscale">
            <img alt="Official Ministerial Seal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFojtC9WAOdS07Tb1kQwTq5ChlGS6r4pvoypJx7QiGqx3sSfaicC4vYZBijRat8s5Q9z6S0fo4Gg0V2px4DEsXgsMwcqMnRwUIzJQbMDg9me1lWU6UTQ_O-eNmOC95QlZVaj5sh3L4aYutxLRG2GDASyJPGp5mNmjM9-D7MDI2c0UiwRuZO_f9X7WwM17RlL3zwYS4AWGtwCcNycSopMs-7M-Envy92j83zZtS3YkkVvqEbkXvwYJIIX8grknqBs9hNvJGxAJO5bTv"/>
          </div>
          <p className="text-[9px] font-serif italic text-stone-400 mt-1">{t('appraisal.insights.auth_system')} 02:44:11 PM</p>
        </div>
      </div>


    </main>
  );
};
