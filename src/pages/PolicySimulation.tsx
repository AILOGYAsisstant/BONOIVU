
import { useTranslation } from 'react-i18next';

export const PolicySimulation = () => {
  const { t } = useTranslation();

  return (
    <main className="px-12 pb-12 pt-12 min-h-full">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Parameters Input Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-8 shadow-[0_10px_30px_rgba(138,27,27,0.06)] relative border-t-2 border-primary">
            <div className="mb-8">
              <span className="text-[10px] font-sans font-bold text-secondary uppercase tracking-[0.2em] block mb-2">{t('policy.config')}</span>
              <h3 className="font-headline text-2xl font-bold">{t('policy.assumptions')}</h3>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">{t('policy.base_salary')}</label>
                <div className="relative group">
                  <input className="w-full bg-surface-container-highest border-0 border-b-2 border-outline px-0 py-3 font-bold text-lg focus:ring-0 focus:border-secondary transition-colors duration-200" type="text" defaultValue="2.340.000đ" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-stone-400">payments</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">{t('policy.downsizing')}</label>
                <div className="relative group">
                  <input className="w-full bg-surface-container-highest border-0 border-b-2 border-outline px-0 py-3 font-bold text-lg focus:ring-0 focus:border-secondary transition-colors duration-200" type="text" defaultValue="5%" />
                  <span className="absolute right-0 top-3 material-symbols-outlined text-stone-400">group_remove</span>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-[#DC2626] text-white font-bold uppercase py-4 rounded-sm shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98]">
                  {t('policy.run')}
                </button>
              </div>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="bg-surface-variant/30 p-8 border-l-4 border-secondary relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t('policy.analysis_title')}</span>
              </div>
              <p className="font-headline text-xl text-primary leading-snug italic">
                "Kết hợp mức lương cơ sở 2,34tr và cắt giảm 5% biên chế, ngân sách dự kiến sẽ tiết kiệm được 12,4 ngàn tỷ VNĐ trong chu kỳ 5 năm, bù đắp 85% chi phí tăng lương cơ học."
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <span className="material-symbols-outlined text-9xl">analytics</span>
            </div>
          </div>
        </div>

        {/* Forecast Visualization Card */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest p-8 shadow-[0_10px_30px_rgba(138,27,27,0.06)] border-t-2 border-secondary h-full flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="text-[10px] font-sans font-bold text-primary uppercase tracking-[0.2em] block mb-2">{t('policy.forecast_title')}</span>
                <h3 className="font-headline text-3xl font-bold">{t('policy.forecast_subtitle')}</h3>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary"></div>
                  <span className="text-[10px] font-bold uppercase">{t('policy.current')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary"></div>
                  <span className="text-[10px] font-bold uppercase">{t('policy.simulated')}</span>
                </div>
              </div>
            </div>

            {/* Bar Chart Visualization */}
            <div className="flex-1 flex items-end justify-between gap-6 px-4">
              {/* Year 1 */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex justify-center items-end gap-1 h-64">
                  <div className="w-1/2 bg-surface-container-high h-[60%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">420T</div>
                  </div>
                  <div className="w-1/2 bg-primary h-[70%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">480T</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-stone-400">2024</span>
              </div>
              {/* Year 2 */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex justify-center items-end gap-1 h-64">
                  <div className="w-1/2 bg-surface-container-high h-[65%]"></div>
                  <div className="w-1/2 bg-primary h-[72%]"></div>
                </div>
                <span className="text-xs font-bold text-stone-400">2025</span>
              </div>
              {/* Year 3 */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex justify-center items-end gap-1 h-64">
                  <div className="w-1/2 bg-surface-container-high h-[70%]"></div>
                  <div className="w-1/2 bg-primary h-[75%]"></div>
                </div>
                <span className="text-xs font-bold text-stone-400">2026</span>
              </div>
              {/* Year 4 */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex justify-center items-end gap-1 h-64">
                  <div className="w-1/2 bg-surface-container-high h-[75%]"></div>
                  <div className="w-1/2 bg-secondary h-[68%]"></div>
                </div>
                <span className="text-xs font-bold text-stone-400">2027</span>
              </div>
              {/* Year 5 */}
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex justify-center items-end gap-1 h-64">
                  <div className="w-1/2 bg-surface-container-high h-[80%]"></div>
                  <div className="w-1/2 bg-secondary h-[65%]"></div>
                </div>
                <span className="text-xs font-bold text-stone-400">2028</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-outline-variant/20 grid grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">{t('policy.total_prev')}</p>
                <p className="text-2xl font-serif font-bold text-primary">2.140,5 Tỷ</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">{t('policy.forecast_label')}</p>
                <p className="text-2xl font-serif font-bold text-secondary">2.085,2 Tỷ</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">{t('policy.net_diff')}</p>
                <p className="text-2xl font-serif font-bold text-green-700">-2,58%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Comparison / Table Section */}
        <div className="col-span-12">
          <div className="bg-surface-container-low p-8 rounded-sm overflow-hidden">
            <div className="flex justify-between items-end mb-6">
              <h4 className="font-headline text-2xl font-bold">{t('policy.table_title')}</h4>
              <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:underline">
                <span className="material-symbols-outlined text-sm">download</span>
                {t('policy.export_report')}
              </button>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b border-secondary/30">
                  <th className="py-4 font-sans text-xs font-bold text-primary uppercase tracking-widest">{t('policy.th_dept')}</th>
                  <th className="py-4 font-sans text-xs font-bold text-primary uppercase tracking-widest">{t('policy.th_count')}</th>
                  <th className="py-4 font-sans text-xs font-bold text-primary uppercase tracking-widest">{t('policy.th_salary')}</th>
                  <th className="py-4 font-sans text-xs font-bold text-primary uppercase tracking-widest">{t('policy.th_after')}</th>
                  <th className="py-4 font-sans text-xs font-bold text-primary uppercase tracking-widest">{t('policy.th_change')}</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b border-outline-variant/10 hover:bg-white/50 transition-colors">
                  <td className="py-4 font-bold">Công chức Hành chính Trung ương</td>
                  <td className="py-4">24.500</td>
                  <td className="py-4">580 tỷ</td>
                  <td className="py-4">23.275</td>
                  <td className="py-4 text-primary font-bold">+12,4 tỷ</td>
                </tr>
                <tr className="bg-white/30 border-b border-outline-variant/10 hover:bg-white/50 transition-colors">
                  <td className="py-4 font-bold">Viên chức Giáo dục & Đào tạo</td>
                  <td className="py-4">1.250.000</td>
                  <td className="py-4">12.450 tỷ</td>
                  <td className="py-4">1.187.500</td>
                  <td className="py-4 text-secondary font-bold">-450,2 tỷ</td>
                </tr>
                <tr className="border-b border-outline-variant/10 hover:bg-white/50 transition-colors">
                  <td className="py-4 font-bold">Cán bộ chuyên trách cấp xã</td>
                  <td className="py-4">186.000</td>
                  <td className="py-4">890 tỷ</td>
                  <td className="py-4">176.700</td>
                  <td className="py-4 text-secondary font-bold">-24,8 tỷ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-primary/5 -z-10 blur-3xl pointer-events-none"></div>
    </main>
  );
};
