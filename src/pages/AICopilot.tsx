
import { useTranslation } from 'react-i18next';

export const AICopilot = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Left Section: Editor */}
      <section className="flex-1 flex flex-col bg-surface border-r border-outline-variant/10">
        <div className="p-6 bg-surface-container-low flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1 block">{t('copilot.draft_label')}</span>
            <h3 className="font-headline text-2xl font-bold text-on-surface">{t('copilot.draft_title')}</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-secondary text-secondary rounded-sm hover:bg-secondary/5 transition-all">{t('copilot.save_draft')}</button>
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-primary text-on-primary rounded-sm shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history_edu</span> {t('copilot.digital_sign')}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-12 bg-white">
          <div className="max-w-3xl mx-auto editor-paper min-h-full p-8 shadow-sm">
            <div className="text-center mb-12">
              <p className="font-bold text-sm uppercase">{t('copilot.rep_vietnam')}</p>
              <p className="font-bold text-sm border-b-2 border-on-surface w-48 mx-auto pb-1 mb-1">{t('copilot.rep_motto')}</p>
              <p className="text-sm italic mt-4">{t('copilot.draft_date', 'Hà Nội, ngày 24 tháng 05 năm 2024')}</p>
            </div>

            <div className="space-y-6 text-justify leading-loose font-serif">
              <h4 className="text-center font-bold text-lg mb-8">{t('copilot.circular')}</h4>
              <p className="serif-italic mb-6">{t('copilot.law_basis')}</p>

              <div>
                <p className="font-bold">{t('copilot.article1_title')}</p>
                <p>{t('copilot.article1_desc')}</p>
              </div>
              <div className="mt-6">
                <p className="font-bold">{t('copilot.article2_title')}</p>
                <p>{t('copilot.article2_desc')}</p>
              </div>

              {/* Highlighted Section */}
              <div className="relative group">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-error rounded-full opacity-100"></div>
                <div className="bg-error/5 p-4 rounded-sm border-l-2 border-error">
                  <p className="font-bold text-error">{t('copilot.article3_title')}</p>
                  <p className="text-on-surface/80">{t('copilot.article3_desc')}</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-error uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-sm">warning</span> {t('copilot.alert_conflict')}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold">{t('copilot.article4_title')}</p>
                <p>{t('copilot.article4_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section: AI Copilot */}
      <section className="w-[450px] flex flex-col bg-surface-container-low shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-10">
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-lg">smart_toy</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-primary">{t('copilot.assistant_name')}</h4>
              <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest">{t('copilot.status_realtime')}</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-stone-400 cursor-pointer">close</span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* AI Message */}
          <div className="flex flex-col gap-3">
            <div className="bg-white p-5 rounded-sm shadow-sm border-l-4 border-error">
              <div className="flex items-start gap-3 mb-3">
                <span className="material-symbols-outlined text-error mt-1">report_problem</span>
                <div>
                  <p className="font-bold text-sm text-error uppercase tracking-tight">{t('copilot.detection_overlap')}</p>
                  <p className="text-xs text-stone-500 italic mt-1 font-serif">{t('copilot.overlap_warning')}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-surface-container-low rounded-sm">
                  <p className="text-[10px] font-bold text-primary mb-2 uppercase">{t('copilot.compare_label')}</p>
                  <p className="text-sm font-bold text-on-surface">Luật Cán bộ, công chức 2008</p>
                  <p className="text-xs text-stone-600 mt-1">Điều 81. Tạm đình chỉ công tác đối với cán bộ, công chức quy định trình tự thủ tục và thời hạn nghiêm ngặt về việc thành lập hội đồng xét kỷ luật.</p>
                </div>
                <div className="text-sm text-on-surface/90 leading-relaxed border-t border-outline-variant/20 pt-4">
                  Dự thảo đang đề xuất quyền "toàn quyền quyết định không thông qua hội đồng" là <span className="font-bold text-error">vượt quá thẩm quyền</span> được quy định tại Luật mẹ.
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest bg-secondary text-on-secondary rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">compare</span> {t('copilot.compare_original')}
                  </button>
                  <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-outline text-stone-600 rounded-sm hover:bg-stone-50">
                    {t('dashboard.stats.dismiss')}
                  </button>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-primary/5 p-4 border-l-2 border-secondary/50 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{t('copilot.apply_suggestion')}</span>
              </div>
              <p className="text-sm italic font-serif text-on-surface/80">"Việc tạm đình chỉ công tác được thực hiện theo quy định tại Điều 81 Luật Cán bộ, công chức và các văn bản hướng dẫn thi hành..."</p>
              <button className="mt-3 text-[10px] font-bold text-primary uppercase underline underline-offset-4 hover:text-secondary transition-colors">{t('copilot.apply_suggestion')}</button>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="p-6 bg-white border-t border-outline-variant/20">
          <div className="relative">
            <input className="w-full bg-surface-container-high border-none border-b-2 border-outline focus:border-secondary focus:ring-0 text-sm py-3 pl-4 pr-12 transition-all" placeholder={t('copilot.placeholder')} type="text" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <div className="mt-3 flex gap-4">
            <button className="flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-primary transition-all uppercase tracking-tighter">
              <span className="material-symbols-outlined text-sm">attach_file</span> {t('copilot.attach_appendix')}
            </button>
            <button className="flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-primary transition-all uppercase tracking-tighter">
              <span className="material-symbols-outlined text-sm">g_translate</span> {t('copilot.legal_translate')}
            </button>
          </div>
        </div>
      </section>


    </>
  );
};
