
import { useState } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Layout = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { path: '/dashboard', icon: 'account_circle', label: t('nav.dashboard'), fill: true },
    { path: '/ai-copilot', icon: 'smart_toy', label: t('nav.ai_copilot') },
    { path: '/ocr-intake', icon: 'description', label: t('nav.ocr_intake') },
    { path: '/appraisal-board', icon: 'gavel', label: t('nav.appraisal_board') },
    { path: '/policy-simulation', icon: 'analytics', label: t('nav.policy_simulation') },
    { path: '/semantic-search', icon: 'manage_search', label: t('nav.semantic_search') },
  ];

  const getPageTitle = () => {
    const currentItem = navItems.find(item => item.path === location.pathname);
    if (currentItem) return currentItem.label;
    if (location.pathname === '/profile') return t('profile.title');
    return t('layout.control_center');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex bg-surface font-body text-on-surface antialiased min-h-screen">
      {/* Navigation Drawer (Sidebar) */}
      <aside className={`fixed left-0 top-0 h-full flex flex-col z-40 bg-white dark:bg-slate-900 border-r border-[#dfbfbc]/20 shadow-[0_10px_30px_rgba(138,27,27,0.06)] pt-8 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full'}`}>
        <div className={`p-8 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-serif font-bold text-[#8B1C1C] dark:text-[#DC2626] tracking-tighter transition-all relative -top-[30px]">
              {t('branding')} <span className="text-stone-400 font-light mx-1">x</span> AILOGY
            </h1>
          </Link>
        </div>
        <nav className="mt-4 flex flex-col w-full flex-grow overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-8 py-4 font-sans text-sm font-medium tracking-wide transition-all duration-200 ease-in-out ${isActive
                  ? 'bg-[#f2f4f6] dark:bg-slate-800 text-[#8b1c1c] dark:text-[#dc2626] border-l-4 border-[#d4af37]'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-[#f2f4f6] dark:hover:bg-slate-800'
                }`
              }
            >
              <span className={`material-symbols-outlined ${item.fill ? 'fill-icon' : ''}`} style={item.fill ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer context based on screen */}
        <div className={`mt-auto p-4 border-t border-[#dfbfbc]/10 space-y-2 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
          {/* Global AI Assistant Widget - Hidden on AI Copilot page */}
          {location.pathname !== '/ai-copilot' && (
            <NavLink
              to="/ai-copilot"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-sm transition-all duration-200 ${isActive
                  ? 'bg-primary-container text-white shadow-lg ring-1 ring-primary/20'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`
              }
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-[11px] truncate">{t('copilot.assistant_name')}</p>
                <p className="text-[9px] opacity-70 truncate">{t('dashboard.stats.ai_processed')} 1.2M...</p>
              </div>
            </NavLink>
          )}

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-4 rounded-sm transition-all duration-200 ${isActive
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <div className={`w-10 h-10 rounded-full overflow-hidden border ${location.pathname === '/profile' ? 'border-white/30' : 'border-outline-variant/30'}`}>
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxS68oEU-vRG1ojy-FupDG5aTT6bOXGWiTgLDNghpnJixXyv88BkHCEPacIAQLxfytzCExmoNXo1b6IvPGVroBD_BWSmPmPHGzbOGF1mCw72tmxBpiCakvpg2M5W0T3JktLSQ2MKfVjrLyRZkBohVGqhCLROyZ7yYzniT6M06IQ5vZQ5gD5ybMUBt_dW9YXhnJUK627sNK8c-4EBJzj1JkA_ht8dpSVcPVRdOzdUGcyBbjsvB8UEusLLylmZnMprq-nppoCV1r5uKb"
              />
            </div>
            <div>
              <p className={`text-xs font-bold ${location.pathname === '/profile' ? 'text-white' : 'text-primary'}`}>{t('profile.title')}</p>
              <p className={`text-[10px] ${location.pathname === '/profile' ? 'text-white/70' : 'text-slate-500'} uppercase tracking-tighter`}>{t('profile.name')}</p>
            </div>
          </NavLink>
        </div>
      </aside>

      {/* Top App Bar */}
      <header className={`fixed top-0 right-0 h-16 flex items-center justify-between px-8 z-50 bg-[#f7f9fb] dark:bg-slate-900/85 backdrop-blur-md border-b border-[#dfbfbc]/20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'left-80' : 'left-0'}`}>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[#8B1C1C] dark:text-[#DC2626] hover:scale-95 duration-150 flex items-center justify-center p-2 rounded-full hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">{isSidebarOpen ? 'menu_open' : 'menu'}</span>
          </button>
          <h1 className="font-serif font-bold tracking-tight text-[#191c1e] dark:text-slate-100 text-xl">
            {getPageTitle()}
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-stone-500 hover:text-primary transition-colors pr-4 border-r border-stone-200"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            <span className="text-[10px] font-sans font-bold tracking-widest uppercase">
              {i18n.language.includes('vi') ? 'English' : 'Tiếng Việt'}
            </span>
          </button>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-stone-400 cursor-pointer">notifications</span>
            <span className="material-symbols-outlined text-stone-400 cursor-pointer">search</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className={`flex-1 pt-[64px] min-h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-80' : 'ml-0'} ${location.pathname === '/ai-copilot' ? 'flex overflow-hidden' : ''}`}>
        <Outlet />
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-t border-[#dfbfbc]/20 shadow-lg md:hidden">
        <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-[#8b1c1c] bg-[#f2f4f6]' : 'text-slate-500'} rounded-sm px-4 py-1`}>
          <span className="material-symbols-outlined">badge</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">{t('nav.profile')}</span>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `flex flex-col items-center justify-center ${isActive ? 'text-[#8b1c1c] bg-[#f2f4f6]' : 'text-slate-500'} rounded-sm px-4 py-1`}>
          <span className="material-symbols-outlined">trending_up</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">{t('nav.dashboard')}</span>
        </NavLink>
        <div className="flex flex-col items-center justify-center text-slate-500 opacity-50">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest mt-1">Lưu trữ</span>
        </div>
      </nav>

      {/* Global Floating Assistant Bubble - Hidden on AI Copilot page */}
      {location.pathname !== '/ai-copilot' && (
        <>
          {/* Mini Chat Box */}
          {isChatOpen && (
            <div className="fixed bottom-24 right-8 z-[70] w-96 h-[500px] bg-white/90 backdrop-blur-xl border border-[#dfbfbc]/30 shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300 rounded-sm">
              {/* Header */}
              <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">smart_toy</span>
                  </div>
                  <span className="font-serif font-bold text-sm tracking-tight">{t('copilot.assistant_name')}</span>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-stone-50/30">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm border border-white/20">
                    <span className="material-symbols-outlined text-white text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                  </div>
                  <div className="relative">
                    <div className="bg-white p-4 rounded-sm shadow-sm text-xs text-slate-700 leading-relaxed max-w-[90%] border-l-4 border-secondary border-b border-outline-variant/10">
                      <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[8px] opacity-60">AI Assistant</p>
                      Xin chào! Tôi có thể giúp gì cho bạn trong việc quản lý hồ sơ và tra cứu văn bản hôm nay?
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-[#dfbfbc]/10">
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Nhập câu hỏi của bạn..."
                    className="w-full bg-stone-50 border border-outline-variant/30 px-4 py-3 rounded-sm text-sm focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-stone-300"
                  />
                  <button className="bg-primary text-white w-10 h-10 rounded-sm hover:scale-95 transition-transform flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bubble Trigger */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group ${isChatOpen ? 'bg-secondary text-white rotate-90 scale-110' : 'bg-primary-container text-white hover:scale-110'
              }`}
          >
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isChatOpen ? 'close' : 'smart_toy'}
            </span>
            {!isChatOpen && (
              <div className="absolute -top-12 right-0 bg-stone-900 text-white text-[10px] py-1.5 px-3 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
                {t('copilot.assistant_name')}
              </div>
            )}
          </button>
        </>
      )}
    </div>
  );
};
