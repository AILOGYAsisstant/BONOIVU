
import { useTranslation } from 'react-i18next';

export const SemanticSearch = () => {
  const { t } = useTranslation();

  return (
    <main className="px-12 pb-12 pt-12 min-h-full bg-surface">
      {/* Semantic Search Section */}
      <section className="max-w-6xl mx-auto">
        {/* Central Large Search Bar */}
        <div className="relative group mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-surface-container-lowest shadow-[0_15px_40px_rgba(138,27,27,0.08)] rounded-sm p-1.5 border-b-2 border-outline-variant">
            <div className="pl-6 pr-4 text-secondary">
              <span className="material-symbols-outlined text-3xl">manage_search</span>
            </div>
            <input className="w-full py-6 bg-transparent border-none focus:ring-0 text-xl font-body text-on-surface placeholder:text-stone-400" placeholder={t('search.placeholder')} type="text" defaultValue="Các quy định về phụ cấp thâm niên nhà giáo trước năm 2010" />
            <button className="bg-primary text-on-primary px-8 py-2 mr-1.5 rounded-sm font-bold flex items-center gap-2 hover:opacity-95 transition-all whitespace-nowrap">
              <span className="material-symbols-outlined text-sm">search</span>
              {t('search.button')}
            </button>
          </div>
        </div>

        {/* AI Insight Result (Bento Style) */}
        <div className="grid grid-cols-12 gap-8">
          {/* AI Summary Card */}
          <div className="col-span-8 space-y-8">
            <div className="bg-surface-container-lowest p-8 relative overflow-hidden">
              {/* AI Decorative Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <h3 className="font-serif text-xl font-bold text-primary">{t('search.ai_summary')} Chế độ Thâm niên (Tiền 2010)</h3>
              </div>
              <div className="font-body text-on-surface text-lg leading-relaxed space-y-4">
                <p>Theo Nghị định số 61/2006/NĐ-CP và các văn bản hướng dẫn liên quan, phụ cấp thâm niên nhà giáo được xác định dựa trên thời gian giảng dạy trực tiếp trong ngành giáo dục.</p>
                <p>Giai đoạn trước 2010, mức phụ cấp được tính 1% cho mỗi năm làm việc sau khi đã đủ 5 năm công tác, áp dụng cho nhà giáo trong biên chế nhà nước tại các cơ sở giáo dục công lập.</p>
                <p>Quy định này đã tạm ngưng thực hiện trong một số giai đoạn cải cách tiền lương trước khi được tái khẳng định và điều chỉnh bởi các văn bản pháp quy sau năm 2011.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a className="flex items-center gap-2 text-secondary font-bold hover:underline decoration-2 underline-offset-4" href="#">
                  <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  Xem nguồn gốc: Trang 15, Hồ sơ Lưu trữ số 442/TTg
                </a>
              </div>
            </div>

            {/* Semantic Connections */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-6 rounded-sm">
                <h4 className="font-label text-[10px] uppercase tracking-widest text-primary mb-4">{t('search.related_docs')}</h4>
                <ul className="space-y-3">
                  <li className="text-sm font-medium hover:text-secondary cursor-pointer flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs mt-1">link</span>
                    Thông tư 01/2007/TT-BGDĐT
                  </li>
                  <li className="text-sm font-medium hover:text-secondary cursor-pointer flex items-start gap-2">
                    <span className="material-symbols-outlined text-xs mt-1">link</span>
                    Luật Giáo dục 2005 (Điều 81)
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-low p-6 rounded-sm">
                <h4 className="font-label text-[10px] uppercase tracking-widest text-primary mb-4">{t('search.subjects')}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-2 py-1 text-[10px] font-bold border border-outline-variant">NHÀ GIÁO CÔNG LẬP</span>
                  <span className="bg-white px-2 py-1 text-[10px] font-bold border border-outline-variant">BIÊN CHẾ</span>
                  <span className="bg-white px-2 py-1 text-[10px] font-bold border border-outline-variant">TRÊN 5 NĂM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Preview Card */}
            <div className="bg-surface-container-low p-4 rounded-sm border-t-2 border-primary">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Trích lục PDF (Trang 15)</p>
              <div className="aspect-[3/4] bg-stone-200 flex items-center justify-center relative group cursor-zoom-in">
                <img className="w-full h-full object-cover grayscale sepia-[0.3]" alt="Phóng đại văn bản lưu trữ cổ điển màu vàng cũ" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkVQLccg05Rz8ujP32DNm3N4Z9ouCwwndtGOumWAYOXzI4bbFk0EWX_TdazCS8FG3kL8v8V5_BWi-0ZsJX3W5l9C3H3_M0N3IoFfVm0o4RCZYT8zo_hwTYveuXLTCJMf5d128fEEWPYPfglsoS_AJvIJwQxcX02iJj6r_QrkzmyrZ_RsA0rKRqUH0WMqZTDaMGy2PVaBa5ytp23cUtwwxFhwEHNdqa3MRUEOPRTKWW0v_HkT2vc-PUnHfCKfF05VR8GU-tGwq1qAn-" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
                </div>
              </div>
              <button className="w-full mt-4 border-2 border-secondary text-secondary py-3 font-bold text-xs uppercase hover:bg-secondary hover:text-white transition-all">
                Tải về bản sao công chứng
              </button>
            </div>

            {/* AI Special Tool */}
            <div className="bg-surface-container-highest p-6 relative opacity-60 cursor-not-allowed">
              <div className="flex items-start gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">translate</span>
                <div>
                  <h4 className="font-serif font-bold text-primary">{t('search.historical_translate')}</h4>
                  <p className="text-[10px] font-body mt-1">{t('search.historical_desc')}</p>
                </div>
              </div>
              <button className="w-full py-3 bg-stone-300 text-stone-500 font-bold text-xs uppercase cursor-not-allowed" disabled>
                {t('search.view_han_nom')}
              </button>
              <div className="mt-2 flex items-center gap-1 justify-center">
                <span className="material-symbols-outlined text-[10px]">lock</span>
                <span className="text-[9px] font-bold uppercase tracking-tighter">{t('search.access_required')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
};
