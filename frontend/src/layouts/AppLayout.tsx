import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Home, LayoutDashboard, Calendar } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function AppLayout({ children, showNav = true }: AppLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/day/13', label: 'Today', icon: Calendar },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <main className={`flex-1 ${showNav ? 'pb-24' : ''}`}>{children}</main>

      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 safe-bottom">
          <div className="max-w-md mx-auto px-4 pb-3">
            <div className="bg-surface/90 backdrop-blur-xl border border-border rounded-[22px] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] flex items-center justify-around p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className="relative flex flex-col items-center gap-1 px-5 py-2 rounded-2xl transition-colors"
                    aria-label={item.label}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/15 rounded-2xl"
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      />
                    )}
                    <Icon
                      size={22}
                      className={`relative z-10 transition-colors ${active ? 'text-primary-400' : 'text-muted-2'}`}
                    />
                    <span className={`relative z-10 text-[10px] font-medium transition-colors ${active ? 'text-primary-400' : 'text-muted-2'}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
