

export const AICopilot = () => {
  return (
    <>
      {/* Left Section: Editor */}
      <section className="flex-1 flex flex-col bg-surface border-r border-outline-variant/10">
        <div className="p-6 bg-surface-container-low flex justify-between items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-1 block">Văn bản dự thảo</span>
            <h3 className="font-headline text-2xl font-bold text-on-surface">Dự thảo Thông tư quy định về chuyển đổi số</h3>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-secondary text-secondary rounded-sm hover:bg-secondary/5 transition-all">Lưu nháp</button>
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-primary text-on-primary rounded-sm shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history_edu</span> Ký số
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-12 bg-white">
          <div className="max-w-3xl mx-auto editor-paper min-h-full p-8 shadow-sm">
            <div className="text-center mb-12">
              <p className="font-bold text-sm uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p className="font-bold text-sm border-b-2 border-on-surface w-48 mx-auto pb-1 mb-1">Độc lập - Tự do - Hạnh phúc</p>
              <p className="text-sm italic mt-4">Hà Nội, ngày 24 tháng 05 năm 2024</p>
            </div>

            <div className="space-y-6 text-justify leading-loose font-serif">
              <h4 className="text-center font-bold text-lg mb-8">THÔNG TƯ</h4>
              <p className="serif-italic mb-6">Căn cứ Luật Tổ chức Chính phủ ngày 19 tháng 6 năm 2015; Căn cứ Nghị định số 34/2016/NĐ-CP ngày 14 tháng 5 năm 2016 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật Ban hành văn bản quy phạm pháp luật...</p>

              <div>
                <p className="font-bold">Điều 1. Phạm vi điều chỉnh</p>
                <p>Thông tư này quy định về lộ trình, tiêu chuẩn kỹ thuật và quy trình thực hiện chuyển đổi số trong các cơ quan nhà nước thuộc phạm vi quản lý của Bộ Nội vụ.</p>
              </div>

              <div>
                <p className="font-bold">Điều 2. Đối tượng áp dụng</p>
                <p>Cán bộ, công chức, viên chức và người lao động làm việc trong hệ thống chính trị Việt Nam tham gia vào quá trình vận hành hạ tầng số quốc gia.</p>
              </div>

              {/* Highlighted Section */}
              <div className="relative group">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-error rounded-full opacity-100"></div>
                <div className="bg-error/5 p-4 rounded-sm border-l-2 border-error">
                  <p className="font-bold text-error">Điều khoản 3. Quyền hạn của người đứng đầu</p>
                  <p className="text-on-surface/80">Người đứng đầu cơ quan có toàn quyền quyết định việc tạm đình chỉ công tác đối với công chức thuộc quyền quản lý mà không cần thông qua hội đồng kỷ luật trong trường hợp cần thực hiện rà soát dữ liệu số khẩn cấp.</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-error uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-sm">warning</span> Cảnh báo: Xung đột pháp lý
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold">Điều 4. Tổ chức thực hiện</p>
                <p>Vụ Pháp chế chủ trì, phối hợp với Trung tâm Thông tin và các đơn vị liên quan tổ chức triển khai, đôn đốc và kiểm tra việc thực hiện Thông tư này.</p>
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
              <h4 className="font-headline font-bold text-primary">AI Sovereign Copilot</h4>
              <p className="text-[10px] text-stone-500 uppercase font-bold tracking-widest">Đang rà soát thời gian thực</p>
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
                  <p className="font-bold text-sm text-error uppercase tracking-tight">Phát hiện chồng chéo pháp luật</p>
                  <p className="text-xs text-stone-500 italic mt-1 font-serif">Nội dung tại "Điều khoản 3" có dấu hiệu không tương thích với quy định hiện hành.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-surface-container-low rounded-sm">
                  <p className="text-[10px] font-bold text-primary mb-2 uppercase">Văn bản đối chiếu:</p>
                  <p className="text-sm font-bold text-on-surface">Luật Cán bộ, công chức 2008</p>
                  <p className="text-xs text-stone-600 mt-1">Điều 81. Tạm đình chỉ công tác đối với cán bộ, công chức quy định trình tự thủ tục và thời hạn nghiêm ngặt về việc thành lập hội đồng xét kỷ luật.</p>
                </div>
                <div className="text-sm text-on-surface/90 leading-relaxed border-t border-outline-variant/20 pt-4">
                  Dự thảo đang đề xuất quyền "toàn quyền quyết định không thông qua hội đồng" là <span className="font-bold text-error">vượt quá thẩm quyền</span> được quy định tại Luật mẹ.
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest bg-secondary text-on-secondary rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">compare</span> Xem đối chiếu gốc
                  </button>
                  <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-outline text-stone-600 rounded-sm hover:bg-stone-50">
                    Bỏ qua
                  </button>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-primary/5 p-4 border-l-2 border-secondary/50 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Đề xuất chỉnh sửa AI</span>
              </div>
              <p className="text-sm italic font-serif text-on-surface/80">"Việc tạm đình chỉ công tác được thực hiện theo quy định tại Điều 81 Luật Cán bộ, công chức và các văn bản hướng dẫn thi hành..."</p>
              <button className="mt-3 text-[10px] font-bold text-primary uppercase underline underline-offset-4 hover:text-secondary transition-colors">Áp dụng đề xuất</button>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="p-6 bg-white border-t border-outline-variant/20">
          <div className="relative">
            <input className="w-full bg-surface-container-high border-none border-b-2 border-outline focus:border-secondary focus:ring-0 text-sm py-3 pl-4 pr-12 transition-all" placeholder="Yêu cầu AI rà soát thêm..." type="text" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-secondary transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <div className="mt-3 flex gap-4">
            <button className="flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-primary transition-all uppercase tracking-tighter">
              <span className="material-symbols-outlined text-sm">attach_file</span> Đính kèm phụ lục
            </button>
            <button className="flex items-center gap-1 text-[10px] font-bold text-stone-500 hover:text-primary transition-all uppercase tracking-tighter">
              <span className="material-symbols-outlined text-sm">g_translate</span> Dịch thuật pháp lý
            </button>
          </div>
        </div>
      </section>

      {/* Floating AI Prompt Overlay (Contextual) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 bg-primary rounded-sm shadow-[0_10px_30px_rgba(138,27,27,0.3)] flex items-center justify-center text-on-primary group transition-all hover:scale-105 active:scale-95">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">auto_awesome</span>
        </button>
      </div>
    </>
  );
};
