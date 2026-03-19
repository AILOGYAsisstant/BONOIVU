
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Executive Dashboard' },
  { path: '/ai-copilot', icon: 'smart_toy', label: 'AI Copilot' },
  { path: '/ocr-intake', icon: 'description', label: 'OCR Intake' },
  { path: '/appraisal-board', icon: 'gavel', label: 'Appraisal Board' },
  { path: '/policy-simulation', icon: 'analytics', label: 'Policy Simulation' },
  { path: '/semantic-search', icon: 'manage_search', label: 'Semantic Search' },
];

export const Layout = () => {
  const location = useLocation();

  // Map path to screen-specific header content
  const getHeaderContext = () => {
    switch (location.pathname) {
      case '/appraisal-board':
        return { notificationText: 'Thông báo', userRole: 'Hồ sơ Công chức' };
      case '/ai-copilot':
        return { notificationText: 'Thông báo', userRole: 'Hồ sơ Công chức' };
      case '/policy-simulation':
        return { notificationText: 'Mô phỏng Chính sách Tiền lương', userRole: 'Hồ sơ Công chức' };
      case '/ocr-intake':
        return { notificationText: 'Cấp bậc: Quản trị viên', userRole: 'Hồ sơ Công chức' };
      case '/semantic-search':
        return { notificationText: 'Phân hệ: Kho lưu trữ Ngữ nghĩa', userRole: 'Hồ sơ Công chức' };
      case '/dashboard':
      default:
        return { notificationText: '', userRole: 'Hồ sơ Công chức' };
    }
  };

  const { notificationText, userRole } = getHeaderContext();

  return (
    <div className="flex bg-surface font-body text-on-surface antialiased min-h-screen">
      {/* Navigation Drawer */}
      <aside className="fixed left-0 top-0 h-full flex flex-col z-40 bg-stone-50 dark:bg-stone-950 w-72 border-r-0">
        <div className="p-8">
          <h1 className="text-2xl font-serif font-bold text-[#8B1C1C] dark:text-[#DC2626] tracking-tighter">BỘ NỘI VỤ</h1>
          {location.pathname === '/appraisal-board' && (
             <p className="text-[10px] font-sans tracking-[0.2em] text-stone-500 uppercase mt-1">Institutional Intelligence</p>
          )}
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#8B1C1C] dark:text-[#DC2626] font-bold border-l-4 border-[#D4AF37] bg-stone-100 dark:bg-stone-900 opacity-80'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined" style={isActive && item.icon === 'gavel' ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
                  <span className="font-sans tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer context based on screen */}
        {location.pathname === '/appraisal-board' && (
           <div className="p-8 border-t border-stone-200/50">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-sm bg-stone-200 flex items-center justify-center">
               <span className="material-symbols-outlined text-stone-600">person</span>
             </div>
             <div>
               <p className="text-xs font-bold font-serif italic text-primary">Hệ thống Thẩm định</p>
               <p className="text-[10px] font-sans text-stone-500">v4.2.0-stable</p>
             </div>
           </div>
         </div>
        )}

        {location.pathname === '/ai-copilot' && (
            <div className="p-6 border-t border-outline-variant/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-primary-container flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">account_balance</span>
                    </div>
                    <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Chuyên viên</p>
                    <p className="text-sm font-semibold">Phạm Minh Chính</p>
                    </div>
                </div>
            </div>
        )}
        {location.pathname === '/policy-simulation' && (
            <div className="p-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-container rounded-sm flex items-center justify-center text-white font-bold">NV</div>
                <div>
                <p className="text-sm font-bold">Quản trị viên</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">Hệ thống AI</p>
                </div>
                </div>
            </div>
        )}
        {location.pathname === '/dashboard' && (
            <div className="p-8 mt-auto">
                <div className="p-4 bg-surface-container-low rounded-lg border-l-2 border-secondary">
                <p className="text-xs font-sans uppercase tracking-widest text-secondary font-bold mb-1">Hệ thống AI</p>
                <p className="text-[10px] text-on-surface-variant leading-tight">Đang giám sát 24.5k luồng dữ liệu liên bộ ngành.</p>
                </div>
            </div>
        )}
        {location.pathname === '/ocr-intake' && (
             <div className="p-6 mt-auto">
             <div className="bg-stone-200/50 dark:bg-stone-800/50 p-4 rounded-sm">
             <p className="text-[10px] font-sans uppercase tracking-widest text-stone-500 mb-2">Hệ thống AI Ver 4.0</p>
             <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500"></div>
             <span className="text-xs font-medium">Sẵn sàng Tiếp nhận</span>
             </div>
             </div>
             </div>
        )}
        {location.pathname === '/semantic-search' && (
            <div className="p-6 mt-auto">
                <div className="bg-stone-200/50 dark:bg-stone-800/50 p-4 rounded-sm">
                <p className="text-[10px] font-sans uppercase tracking-widest text-stone-500 mb-2">Hệ thống Lưu trữ</p>
                <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-xs font-bold text-primary">Sovereign Node Alpha</span>
                </div>
                </div>
            </div>
        )}

      </aside>

      {/* Top App Bar */}
      <header className="fixed top-0 right-0 left-72 h-16 flex items-center justify-between px-8 z-50 bg-white/85 dark:bg-stone-900/85 backdrop-blur-md shadow-[0_10px_30px_rgba(138,27,27,0.04)] border-b border-[#DFBFBC]/20">
        <div className="flex items-center gap-4">
          <button className="text-[#8B1C1C] dark:text-[#DC2626] hover:scale-95 duration-150">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-lg font-serif font-black text-[#8B1C1C] dark:text-[#DC2626] uppercase tracking-widest">
            {location.pathname === '/ai-copilot' || location.pathname === '/policy-simulation' || location.pathname === '/semantic-search' ? 'The Digital Sovereign' : 'The Digital Sovereign'}
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {location.pathname === '/appraisal-board' && (
            <div className="flex items-center gap-2 text-stone-500">
              <span className="material-symbols-outlined text-sm">notifications</span>
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase">{notificationText}</span>
            </div>
          )}
          {location.pathname === '/ai-copilot' && (
             <>
             <button className="font-sans uppercase tracking-widest text-sm text-stone-500 hover:text-[#8B1C1C] transition-all">{userRole}</button>
             <span className="material-symbols-outlined text-stone-400">notifications</span>
             </>
          )}
          {location.pathname === '/policy-simulation' && (
             <>
                <span className="font-sans text-xs font-medium text-stone-500 uppercase tracking-widest">{notificationText}</span>
                <button className="bg-[#8B1C1C] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm hover:opacity-90 transition-all">
                                {userRole}
                </button>
             </>
          )}
           {location.pathname === '/dashboard' && (
               <>
                <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-stone-400">notifications</span>
                <span className="material-symbols-outlined text-stone-400">search</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-sm text-xs font-sans font-bold uppercase tracking-widest hover:bg-primary-container active:scale-95 transition-all duration-150">
                                {userRole}
                            </button>
               </>
          )}
          {location.pathname === '/ocr-intake' && (
              <>
                 <span className="font-sans text-xs uppercase tracking-widest text-stone-500 font-semibold">{notificationText}</span>
                <button className="bg-[#8B1C1C] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#6a0008] transition-all">{userRole}</button>
              </>
          )}
          {location.pathname === '/semantic-search' && (
               <>
                <span className="text-xs font-sans uppercase tracking-widest text-stone-500">{notificationText}</span>
                <button className="bg-primary text-on-primary px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all">
                                {userRole}
                            </button>
               </>
          )}
          {location.pathname === '/appraisal-board' && (
            <button className="bg-[#8B1C1C] text-white px-4 py-1.5 rounded-sm text-[10px] font-sans font-bold tracking-widest uppercase hover:scale-95 transition-all duration-150">
                {userRole}
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <div className={`flex-1 ml-72 pt-[64px] min-h-screen ${location.pathname === '/ai-copilot' ? 'flex overflow-hidden' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};
