

export const OCRIntake = () => {
  return (
    <main className="p-8 min-h-full">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex justify-between items-end border-b border-outline-variant/20 pb-6">
          <div>
            <h3 className="font-headline italic text-4xl text-primary mb-2">OCR Intake</h3>
            <p className="font-body text-on-surface-variant max-w-lg">Hệ thống tiếp nhận và số hóa hồ sơ tự động sử dụng trí tuệ nhân tạo. Chuyển đổi báo cáo thành tích sang dữ liệu số định danh.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-low text-primary font-bold uppercase text-xs tracking-widest hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">upload_file</span>
              Tải lên hồ sơ
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              Lưu bản nháp
            </button>
          </div>
        </div>

        {/* Validation Alert */}
        <div className="bg-error-container border-l-4 border-error p-6 flex items-start gap-4">
          <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
          <div>
            <p className="font-bold text-on-error-container text-lg">Hồ sơ Không hợp lệ</p>
            <p className="text-on-error-container/80 font-medium">Thiếu biên bản hiệp y của cơ quan Thuế trong danh mục hồ sơ đính kèm.</p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Scan Document */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-headline text-xl text-primary font-bold">Tài liệu Scan</h4>
              <div className="flex gap-2 text-xs font-bold uppercase tracking-tighter text-secondary">
                <span className="bg-secondary-container/30 px-2 py-1">Trang 01/04</span>
                <span className="bg-secondary-container/30 px-2 py-1">Độ chính xác: 98.4%</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
              <img alt="Scan of official achievement report document" className="w-full h-full object-cover opacity-80 grayscale-[30%] brightness-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4sMUi3tjD0RpF3V__pzQ2wApNrgojNNtaWdvT2R9M3nDSkq-ZdpFZ-BGerUZCpKT_Shoj6NCOT4v8DuoZA1ljJ3XIvxVW9NszX2GsbEX6YK_McRR9OK_OGvj39WDX04vXpDhFcg43_BX9uYTUs66jDP1VgHZ_nbGtL5sDFuYKJNgko438OcS_c_M8xuidOTNwqwiaoXNHhECTovYxf6IJRhRQimY1kHgwYMuRnv-XsRHIukmAZ0kqZx12D0vMFVvB9k3NCyq1Rysx" />

              {/* AI Scanning Effects */}
              <div className="scanline"></div>

              {/* AI Highlights (Vùng AI đang quét) */}
              <div className="ocr-highlight" style={{ top: '12%', left: '35%', width: '30%', height: '5%' }}></div>
              <div className="ocr-highlight" style={{ top: '25%', left: '15%', width: '70%', height: '3%' }}></div>
              <div className="ocr-highlight" style={{ top: '32%', left: '15%', width: '25%', height: '3%' }}></div>
              <div className="ocr-highlight" style={{ top: '45%', left: '15%', width: '50%', height: '10%' }}></div>

              {/* Document Content Simulation (Overlays) */}
              <div className="absolute inset-0 p-12 pointer-events-none">
                <div className="w-full text-center space-y-1 mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/60">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                  <p className="text-[9px] font-bold text-black/60">Độc lập - Tự do - Hạnh phúc</p>
                  <div className="w-24 h-[1px] bg-black/40 mx-auto mt-1"></div>
                </div>
                <div className="mt-16 text-center">
                  <p className="text-xl font-headline font-bold uppercase tracking-wider text-black/80">BÁO CÁO THÀNH TÍCH</p>
                  <p className="text-[10px] italic text-black/60 mt-1">Đề nghị tặng thưởng Huân chương Lao động hạng Nhì</p>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">add</span>
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">remove</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Auto-fill Form */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <h4 className="font-headline text-xl text-primary font-bold">Dữ liệu Trích xuất AI</h4>
            </div>

            <div className="bg-surface-container-low p-8 space-y-8">
              {/* Field Group */}
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Họ và Tên Đối tượng</label>
                  <div className="flex items-center border-b-2 border-outline/30 focus-within:border-secondary transition-all bg-white/50 px-4 py-3">
                    <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body text-lg font-semibold" readOnly type="text" value="Nguyễn Văn Hùng" />
                    <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                  </div>
                  <span className="absolute right-0 -bottom-5 text-[9px] text-secondary italic">Đã xác minh qua CSDL Quốc gia</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Năm sinh</label>
                    <div className="flex items-center border-b-2 border-outline/30 focus-within:border-secondary transition-all bg-white/50 px-4 py-3">
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body text-lg font-semibold" readOnly type="text" value="1978" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Giới tính</label>
                    <div className="flex items-center border-b-2 border-outline/30 focus-within:border-secondary transition-all bg-white/50 px-4 py-3">
                      <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body text-lg font-semibold" readOnly type="text" value="Nam" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Đơn vị Công tác</label>
                  <div className="flex items-center border-b-2 border-outline/30 focus-within:border-secondary transition-all bg-white/50 px-4 py-3">
                    <input className="w-full bg-transparent border-none p-0 focus:ring-0 font-body text-lg font-semibold" readOnly type="text" value="Vụ Tổ chức Cán bộ, Bộ Nội vụ" />
                    <span className="material-symbols-outlined text-secondary text-sm">edit</span>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Nội dung Tóm tắt AI</label>
                  <div className="bg-white/50 p-4 border-l-2 border-secondary/50">
                    <p className="text-sm italic leading-relaxed text-on-surface-variant">
                      "Đối tượng có 15 năm kinh nghiệm trong ngành, đạt danh hiệu Chiến sĩ thi đua cấp Bộ 03 năm liên tiếp (2020-2022). Có sáng kiến cải cách hành chính được áp dụng rộng rãi..."
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-outline-variant/30 flex flex-col gap-4">
                <button className="w-full py-4 bg-primary text-on-primary font-bold uppercase text-xs tracking-[0.2em] shadow-lg hover:shadow-xl transition-all">
                  Chấp thuận & Chuyển Xét duyệt
                </button>
                <button className="w-full py-4 border-2 border-error text-error font-bold uppercase text-xs tracking-[0.2em] hover:bg-error/5 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">reply</span>
                  Yêu cầu Bổ sung Hồ sơ
                </button>
              </div>
            </div>

            {/* AI Confidence Card */}
            <div className="bg-primary-container p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white/70">psychology</span>
                <span className="text-white text-xs font-bold uppercase tracking-widest">Độ tin cậy OCR</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[92%]"></div>
                </div>
                <span className="text-white font-bold text-xs">92%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Table: History/List */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-headline text-2xl text-primary font-bold">Lịch sử Tiếp nhận Gần đây</h4>
            <span className="text-xs font-label uppercase tracking-widest text-stone-500">Xem tất cả hồ sơ</span>
          </div>

          <div className="bg-surface-container-lowest overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low border-b border-secondary">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-primary">Mã Hồ Sơ</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-primary">Tên Đối Tượng</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-primary">Loại Khen Thưởng</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-primary">Ngày Tiếp Nhận</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-primary text-right">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#BNV-2024-00124</td>
                  <td className="px-6 py-4 font-semibold text-sm">Trần Thị Mai Anh</td>
                  <td className="px-6 py-4 text-xs">Bằng khen Chính phủ</td>
                  <td className="px-6 py-4 text-xs text-stone-500">12/10/2023 - 09:45</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">Thành công</span>
                  </td>
                </tr>
                <tr className="bg-surface-container-low/30 hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#BNV-2024-00125</td>
                  <td className="px-6 py-4 font-semibold text-sm">Lê Quốc Tuấn</td>
                  <td className="px-6 py-4 text-xs">Huân chương Độc lập</td>
                  <td className="px-6 py-4 text-xs text-stone-500">12/10/2023 - 10:12</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-yellow-100 text-yellow-700">Đang xử lý</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">#BNV-2024-00126</td>
                  <td className="px-6 py-4 font-semibold text-sm">Nguyễn Văn Hùng</td>
                  <td className="px-6 py-4 text-xs">Huân chương Lao động</td>
                  <td className="px-6 py-4 text-xs text-stone-500">12/10/2023 - 11:30</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-100 text-red-700">Không hợp lệ</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Contextual FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
      </button>
    </main>
  );
};
