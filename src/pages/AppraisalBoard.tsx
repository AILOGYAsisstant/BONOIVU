

export const AppraisalBoard = () => {
  return (
    <main className="px-12 pb-12 pt-16 min-h-full">
      {/* Page Header Section */}
      <section className="mb-12">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-4xl font-serif font-bold italic text-primary mb-2">Hội đồng Thẩm định Quốc gia</h3>
            <p className="font-sans text-on-surface-variant max-w-2xl leading-relaxed">Phân tích hồ sơ thi đua khen thưởng cấp cao bằng trí tuệ nhân tạo. Đối soát dữ liệu đa nguồn (RAG) với quy định hiện hành.</p>
          </div>
          <div className="flex gap-4">
            <button className="border-b-2 border-secondary text-secondary px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Xuất Nghị quyết
            </button>
          </div>
        </div>
      </section>

      {/* Bento Layout for Insights */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Candidate Profile Quick Card */}
        <div className="col-span-4 bg-surface-container-lowest p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 bg-stone-100 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-3xl text-stone-400">person_search</span>
            </div>
            <span className="text-[10px] font-sans bg-secondary-container px-2 py-0.5 font-bold text-on-secondary-container uppercase">Đang Thẩm định</span>
          </div>
          <h4 className="font-serif text-xl font-bold text-primary mb-1">Nguyễn Văn A</h4>
          <p className="text-xs font-sans text-stone-500 mb-4 tracking-tight">Chức vụ: Phó Chủ tịch UBND Tỉnh X</p>
          <div className="space-y-2 border-t border-stone-100 pt-4">
            <div className="flex justify-between text-[11px]">
              <span className="text-stone-500">Mã định danh:</span>
              <span className="font-bold">CC-992831-2024</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-stone-500">Khen thưởng đề xuất:</span>
              <span className="font-bold text-secondary">Huân chương Lao động hạng Nhì</span>
            </div>
          </div>
        </div>

        {/* AI Risk/Confidence Score */}
        <div className="col-span-8 bg-surface-container-low p-6 flex items-center justify-between">
          <div className="flex-1">
            <h5 className="font-serif italic text-lg text-primary mb-1">Xác suất phê duyệt AI (Confidence)</h5>
            <p className="text-xs font-sans text-stone-600 mb-4">Dựa trên 24,000 hồ sơ tiền lệ và Nghị định 91/2017/NĐ-CP</p>
            <div className="w-full bg-stone-300 h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full" style={{ width: '82.5%' }}></div>
            </div>
            <div className="flex justify-between mt-2 font-sans text-[10px] font-bold">
              <span className="text-stone-500">RỦI RO THẤP</span>
              <span className="text-secondary">82.5% KHỚP TIÊU CHUẨN</span>
            </div>
          </div>
          <div className="ml-12 pl-12 border-l border-stone-300/50">
            <div className="text-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <p className="text-[10px] font-bold uppercase tracking-tighter">Đề xuất: Thông qua</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Appraisal Table */}
      <div className="bg-surface-container-lowest shadow-[0_10px_30px_rgba(138,27,27,0.06)] overflow-hidden">
        <div className="border-t-[3px] border-primary px-8 py-4 bg-surface-container-highest/30 flex justify-between items-center">
          <h5 className="font-serif font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">rule</span>
            BẢNG ĐỐI CHIẾU TIÊU CHUẨN PHÁP LÝ (AI-RAG ANALYTICS)
          </h5>
          <span className="text-[10px] font-sans font-medium text-stone-500 italic">Dữ liệu cập nhật: 14:02, 25/10/2023</span>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant/20">
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest w-1/4">Tiêu chuẩn theo Luật (RAG)</th>
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest w-1/3">Thành tích thực tế</th>
              <th className="px-8 py-5 text-[10px] font-bold font-sans text-primary uppercase tracking-widest">AI Đánh giá</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {/* Row 1: Positive */}
            <tr className="hover:bg-stone-50/50 transition-colors">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">Thâm niên & Khen thưởng</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">Điều 21: Phải có 05 năm liên tục đạt danh hiệu Chiến sĩ thi đua cơ sở.</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                    <span>Giai đoạn 2019 - 2023: Đạt CSTĐ cơ sở hàng năm.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                    <span>Quyết định số 122/QĐ-UBND (2023).</span>
                  </div>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#107c10] text-white px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Đạt (Khớp 100%)
                  </button>
                  <p className="text-[10px] text-stone-400 italic">Nguồn kiểm chứng: Trục liên thông văn bản quốc gia.</p>
                </div>
              </td>
            </tr>
            {/* Row 2: Warning */}
            <tr className="bg-surface-container-low/20">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">Sáng kiến / Đề tài</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">Phải có ít nhất 01 sáng kiến cấp Tỉnh hoặc đề tài nghiên cứu khoa học được nghiệm thu.</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-stone-800">
                    <span className="material-symbols-outlined text-[14px] text-amber-600">report</span>
                    <span>Sáng kiến: "Cải cách hành chính tại huyện Y" (2021).</span>
                  </div>
                  <p className="text-[10px] text-amber-700 ml-6 bg-amber-50 p-2 rounded-sm italic">Hệ thống chưa tìm thấy quyết định công nhận cấp Tỉnh cho sáng kiến này.</p>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#ffb900] text-[#4a3900] px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    Nghi vấn: Thiếu sáng kiến cấp Tỉnh
                  </button>
                  <p className="text-[10px] text-primary underline cursor-pointer font-medium">Yêu cầu bổ sung hồ sơ chứng minh</p>
                </div>
              </td>
            </tr>
            {/* Row 3: Standard */}
            <tr className="hover:bg-stone-50/50 transition-colors">
              <td className="px-8 py-6 align-top">
                <p className="font-sans font-semibold text-xs mb-1">Kỷ luật công vụ</p>
                <p className="text-[11px] text-stone-500 leading-relaxed italic">Trong thời gian xét khen thưởng không bị kỷ luật từ hình thức Khiển trách trở lên.</p>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                  <span>Trích lục hồ sơ cán bộ: Không có dữ liệu vi phạm.</span>
                </div>
              </td>
              <td className="px-8 py-6 align-top">
                <div className="flex flex-col items-start gap-3">
                  <button className="bg-[#107c10] text-white px-3 py-1 text-[10px] font-bold rounded-sm uppercase tracking-tighter">
                    ĐẠT TIÊU CHUẨN
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
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-secondary">AI Insight: Tiền lệ đối soát</h6>
          </div>
          <p className="text-xs font-sans leading-relaxed italic text-stone-600">"Hồ sơ này có cấu trúc tương tự 15 hồ sơ tại Tỉnh Y đã được phê duyệt năm 2022. Tuy nhiên, lưu ý tính pháp lý của Sáng kiến số 21/SK."</p>
        </div>
        <div className="bg-primary/5 border-l-[4px] border-primary p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">history_edu</span>
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-primary">Văn bản liên quan (RAG)</h6>
          </div>
          <ul className="text-[10px] font-sans space-y-1 text-stone-600">
            <li className="hover:underline cursor-pointer">• Luật Thi đua, Khen thưởng số 06/2022/QH15</li>
            <li className="hover:underline cursor-pointer">• Thông tư 01/2024/TT-BNV hướng dẫn...</li>
          </ul>
        </div>
        <div className="bg-surface-container-low p-4 flex flex-col justify-center items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Chữ ký số Hội đồng</p>
          <div className="w-16 h-16 opacity-10 grayscale">
            <img alt="Official Ministerial Seal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFojtC9WAOdS07Tb1kQwTq5ChlGS6r4pvoypJx7QiGqx3sSfaicC4vYZBijRat8s5Q9z6S0fo4Gg0V2px4DEsXgsMwcqMnRwUIzJQbMDg9me1lWU6UTQ_O-eNmOC95QlZVaj5sh3L4aYutxLRG2GDASyJPGp5mNmjM9-D7MDI2c0UiwRuZO_f9X7WwM17RlL3zwYS4AWGtwCcNycSopMs-7M-Envy92j83zZtS3YkkVvqEbkXvwYJIIX8grknqBs9hNvJGxAJO5bTv"/>
          </div>
          <p className="text-[9px] font-serif italic text-stone-400 mt-1">Hệ thống xác thực 02:44:11 PM</p>
        </div>
      </div>

      {/* Floating Assistant Bubble */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary-container text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group relative">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
          <div className="absolute -top-12 right-0 bg-stone-900 text-white text-[10px] py-2 px-4 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            AI đang phân tích hồ sơ...
          </div>
        </button>
      </div>
    </main>
  );
};
