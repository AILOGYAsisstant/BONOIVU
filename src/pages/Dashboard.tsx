

export const Dashboard = () => {
  return (
    <main className="px-10 pb-12 pt-16 min-h-full">
      {/* Welcome Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-headline font-bold text-primary tracking-tight mb-2">Trung tâm Chỉ huy Điều hành</h1>
        <p className="font-headline serif-italic text-on-surface-variant text-xl">Giám sát hiệu năng hệ thống công vụ và AI thời gian thực.</p>
      </section>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Card 1: Số hồ sơ xử lý bằng AI */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 shadow-[0_10px_30px_rgba(138,27,27,0.06)] border-t-2 border-primary relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">auto_awesome</span>
          </div>
          <p className="text-xs font-sans font-bold uppercase tracking-widest text-on-surface-variant mb-4">Số hồ sơ xử lý bằng AI hôm nay</p>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-headline font-bold text-primary">12,482</span>
            <span className="text-secondary font-bold text-sm mb-1 flex items-center">
              <span className="material-symbols-outlined text-sm">trending_up</span> 14%
            </span>
          </div>
          <div className="mt-4 w-full bg-surface-container h-1 rounded-full">
            <div className="bg-primary h-full w-3/4 rounded-full"></div>
          </div>
        </div>

        {/* Card 2: Tỷ lệ hồ sơ hợp lệ */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 shadow-[0_10px_30px_rgba(138,27,27,0.06)] border-t-2 border-secondary relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl">verified_user</span>
          </div>
          <p className="text-xs font-sans font-bold uppercase tracking-widest text-on-surface-variant mb-4">Tỷ lệ hồ sơ hợp lệ</p>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-headline font-bold text-secondary">98.2<span className="text-2xl">%</span></span>
            <span className="text-stone-400 font-medium text-sm mb-1">Chỉ số ổn định</span>
          </div>
          <p className="mt-4 text-xs text-on-surface-variant leading-relaxed">Đã đối soát với 12 nguồn dữ liệu quốc gia thông qua OCR Intake.</p>
        </div>

        {/* Card 3: Cảnh báo quá hạn */}
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 shadow-[0_10px_30px_rgba(138,27,27,0.06)] border-t-2 border-error relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl text-error">priority_high</span>
          </div>
          <p className="text-xs font-sans font-bold uppercase tracking-widest text-on-surface-variant mb-4">Cảnh báo quá hạn</p>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-headline font-bold text-error">07</span>
            <span className="text-error font-bold text-sm mb-1 flex items-center">
              <span className="material-symbols-outlined text-sm">warning</span> Critical
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="text-[10px] bg-error-container text-on-error-container px-2 py-1 font-bold uppercase tracking-tighter">Xem ngay</button>
            <button className="text-[10px] border border-outline-variant text-on-surface-variant px-2 py-1 font-bold uppercase tracking-tighter">Bỏ qua</button>
          </div>
        </div>

        {/* Main Chart Area: SIPAS Realtime */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 shadow-[0_10px_30px_rgba(138,27,27,0.06)]">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary">Chỉ số hài lòng SIPAS realtime</h3>
              <p className="font-headline serif-italic text-on-surface-variant">Thống kê mức độ hài lòng của người dân trên nền tảng số.</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-surface-container text-xs font-bold rounded-sm">24H</span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-stone-400">7D</span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-stone-400">30D</span>
            </div>
          </div>
          {/* Simulated Line Chart */}
          <div className="h-64 relative flex items-end justify-between gap-1 border-b border-outline-variant/30 pb-2">
            <div className="absolute inset-0 flex flex-col justify-between py-2 text-[10px] text-stone-300 pointer-events-none">
              <div className="border-t border-stone-100 w-full flex justify-end">100%</div>
              <div className="border-t border-stone-100 w-full flex justify-end">75%</div>
              <div className="border-t border-stone-100 w-full flex justify-end">50%</div>
              <div className="border-t border-stone-100 w-full flex justify-end">25%</div>
            </div>
            {/* SVG Path for Line Chart */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M0 180 Q 50 160, 100 170 T 200 120 T 300 140 T 400 80 T 500 100 T 600 60 T 700 75 T 800 40" fill="none" stroke="#D4AF37" strokeLinecap="round" strokeWidth="3"></path>
              <circle cx="800" cy="40" fill="#D4AF37" r="4"></circle>
            </svg>
            {/* Tooltip Marker */}
            <div className="absolute left-3/4 bottom-1/2 -translate-y-12 translate-x-12 z-10">
              <div className="bg-primary text-white p-2 rounded-sm shadow-xl text-center">
                <p className="text-[10px] opacity-70">Hiện tại</p>
                <p className="text-sm font-bold">94.8%</p>
              </div>
              <div className="w-px h-16 bg-primary mx-auto"></div>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest">
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
            <span>20:00</span>
          </div>
        </div>

        {/* Side Card: AI Intelligence Logs */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-high p-6 flex-1 border-l-4 border-primary">
            <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">bolt</span>
              Nhật ký AI Copilot
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold">Phát hiện sai sót hồ sơ #4492</p>
                  <p className="text-[10px] text-on-surface-variant">Phát hiện mâu thuẫn giữa CMND và Hộ khẩu điện tử.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold">Tự động phân loại 120 hồ sơ</p>
                  <p className="text-[10px] text-on-surface-variant">Phòng Công chức Viên chức - Sở Nội vụ Hà Nội.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                <div>
                  <p className="text-xs font-bold">Mô phỏng chính sách mới</p>
                  <p className="text-[10px] text-on-surface-variant">Dự báo tác động lương cơ sở đến 2.4tr công chức.</p>
                </div>
              </li>
            </ul>
            <button className="mt-6 w-full text-xs font-bold text-secondary text-left flex items-center gap-2 hover:translate-x-1 transition-transform">
              XEM TẤT CẢ NHẬT KÝ <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="bg-primary text-white p-6 relative overflow-hidden">
            <img alt="Hệ thống dữ liệu số" className="absolute inset-0 object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbbSIpMZfIwNaZsW6RtxAdauj15GJzKJ3en6A2UDRquSQGWxRUfTzoUN1O6HkPKI8ej64oFdU3IUvNmIDyNWMTJSCgnYVoUU3nPz7UdRFvCw5LY10yekZh7QLiftRPySG14e6gpn8RRWeHepN97x3w4JZZKUecidyUgGm1yotVzTdt4p4CSCn0A7c7n9DvkOl5IjmS-KhFQ-iJuMn1KBKb2iDvr1aPZ5v0uzzSr3rCFsuvuQgmVXfgIl7b0UDZbdhOmWAynoPt5xjF" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Trạng thái hạ tầng</p>
              <h4 className="text-xl font-headline font-bold mb-4">Mạng lưới Trục liên thông văn bản Quốc gia</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                <span className="text-sm font-medium">Hoạt động ổn định (99.9%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asymmetric Detail Section */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 bg-surface-container-low p-8">
          <h3 className="text-lg font-headline font-bold text-primary mb-6">Phân tích Hiệu suất Cán bộ</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">T</div>
                <div>
                  <p className="text-sm font-bold">Vụ Tổ chức Cán bộ</p>
                  <p className="text-[10px] text-on-surface-variant">Hoàn thành 142/145 chỉ tiêu tháng</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-secondary">97.8%</p>
                <p className="text-[10px] text-green-600 font-bold uppercase tracking-tighter">Tốt</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">C</div>
                <div>
                  <p className="text-sm font-bold">Cục Văn thư và Lưu trữ</p>
                  <p className="text-[10px] text-on-surface-variant">Đang xử lý tồn đọng hồ sơ giấy</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-secondary">82.4%</p>
                <p className="text-[10px] text-orange-600 font-bold uppercase tracking-tighter">Cần chú ý</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 relative group cursor-pointer">
          <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors z-10"></div>
          <img alt="Văn phòng bộ" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHoAgYzQf-pDtsCpCcWTJ-73r84PG55PCWxp6T-5x_hFWerUmRDEjwejNf6Jm5IguDMFkmVNXG2RvdP8bTP9XuMZpuWF12timdUPYmIwAE0_EtVV1yjKxTeMNktbNCqDTbVurSClVX5drGmLgy-EIAMPgr2JTUSr6gytZ6LvrxFSAlHMY2k7s0FZZFuDB1m5qhxGmMQx_cwVOTUwrwpqq0O6CDI-5w6Yrx7Zd4OM__tADiJieYzcXRbgW28gQkRAzmm7Rjq6VJ3Nr" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h4 className="text-2xl font-headline font-bold text-white mb-2">Báo cáo Chiến lược 2024</h4>
            <p className="text-white/80 text-sm italic font-headline mb-4">Chuyển đổi số toàn diện ngành Nội vụ.</p>
            <span className="material-symbols-outlined text-white text-3xl">arrow_outward</span>
          </div>
        </div>
      </div>
    </main>
  );
};
