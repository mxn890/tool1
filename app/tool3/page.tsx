'use client';
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Target, 
  Box, 
  ScanSearch, 
  FileText, 
  Settings, 
  Lock, 
  Menu, 
  X, 
  ChevronRight,
  Plus,
  Bell,
  CheckCircle,
  User,
  Power,
  ChevronDown
} from 'lucide-react';

// --- Zenith Logo Component ---
const ZenithLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 3.75L9 20.25L12 12L3.75 3.75Z" fill="#5F6B7A"/>
      <path d="M20.25 3.75L15 20.25L12 12L20.25 3.75Z" fill="#9AA5B4"/>
    </svg>
    <span className="text-white text-2xl font-bold tracking-wide">ZENITH</span>
  </div>
);

// --- Toggle Switch Component ---
const ToggleSwitch = ({ enabled }: { enabled: boolean }) => (
  <div className={`relative w-11 h-6 rounded-full p-1 transition-colors ${
    enabled ? 'bg-red-600' : 'bg-gray-700'
  }`}>
    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
      enabled ? 'translate-x-5' : 'translate-x-0'
    }`}></div>
  </div>
);

// --- Login Page Component ---
const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'Zeshu' && password === 'Zeshu') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600 blur-3xl animate-pulse-slow"></div>
      
      {/* Circuit Background */}
      <div className="absolute inset-0 z-0 opacity-10 login-circuit-bg"></div>
      
      {/* Login Box */}
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-xl p-8 border border-gray-800 relative z-10">
        <header className="flex flex-col items-center mb-8">
          <ZenithLogo />
          <p className="mt-3 text-gray-400 text-sm">YOUR TRUSTED CYBERSECURITY PARTNER</p>
        </header>
        
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <User size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Username"
              className="w-full bg-gray-700/50 border border-gray-700 text-gray-300 rounded-lg py-3 px-10 transition-all focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </span>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-gray-700/50 border border-gray-700 text-gray-300 rounded-lg py-3 px-10 transition-all focus:ring-2 focus:ring-red-600 focus:border-red-600 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 bg-gray-700 border border-gray-600 rounded text-red-600 focus:ring-2 focus:ring-red-600" />
              <span className="ml-2 text-sm text-gray-300">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          
          <button type="submit" className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-700 focus:ring-3 focus:ring-red-600/50 transition-all">
            LOGIN
          </button>
          
          <div className="relative my-6">
            <div className="h-px bg-gray-700"></div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-2 text-sm text-gray-500">
              OR
            </span>
          </div>
          
          <button type="button" className="w-full bg-gray-800 text-gray-300 font-semibold py-3 rounded-lg shadow-lg hover:bg-gray-700 focus:ring-3 focus:ring-gray-600/50 transition-all">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Sidebar Component ---
const Sidebar = ({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (item: string) => void }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Targets', icon: Target },
    { name: 'Payloads', icon: Box },
    { name: 'Scans', icon: ScanSearch },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-60 bg-gray-900 border-r border-gray-800 flex flex-col">
      <header className="h-20 flex items-center px-6 border-b border-gray-800">
        <ZenithLogo />
      </header>
      <nav className="flex-1 p-3 flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeItem === item.name 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
            }`}
          >
            <div className="flex items-center">
              <item.icon size={20} className="mr-3" />
              <span>{item.name}</span>
            </div>
            {item.name === 'Targets' && <ChevronRight size={16} />}
          </button>
        ))}
      </nav>
      <footer className="p-4 border-t border-gray-800">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-all">
          <Power size={18} />
          <span>Logout</span>
        </button>
      </footer>
    </aside>
  );
};

// --- Mobile Menu Component ---
const MobileMenu = ({ isOpen, onClose, activeItem, setActiveItem }: { isOpen: boolean, onClose: () => void, activeItem: string, setActiveItem: (item: string) => void }) => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Targets', icon: Target },
    { name: 'Payloads', icon: Box },
    { name: 'Scans', icon: ScanSearch },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-900 border-r border-gray-800 z-50 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <header className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
          <ZenithLogo />
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </header>
        <nav className="flex-1 p-3 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
                onClose();
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeItem === item.name 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center">
                <item.icon size={20} className="mr-3" />
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

// --- Circuit Background Component ---
const CircuitBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100" className="text-gray-800">
          <path d="M 0 10 L 10 10 L 10 0 M 10 20 L 10 10 M 20 10 L 10 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 20 20 L 20 10 L 30 10 M 20 20 L 10 20 M 20 30 L 20 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 40 10 L 30 10 L 30 0 M 40 10 L 50 10 M 40 20 L 40 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 0 90 L 10 90 L 10 100 M 10 80 L 10 90 M 20 90 L 10 90" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 50 50 L 50 60 L 40 60 M 50 50 L 60 50 M 50 40 L 50 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M 80 80 L 90 80 L 90 70 M 80 80 L 70 80 M 80 90 L 80 80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none" />
          <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="90" cy="80" r="1" fill="currentColor" stroke="none" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="black" />
      <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" opacity="0.3" />
    </svg>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-red-600 blur-3xl animate-pulse-slow"></div>
  </div>
);

// --- Dashboard Content Component ---
const DashboardContent = () => {
  return (
    <main className="flex-1 p-6 bg-black relative overflow-y-auto">
      <CircuitBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="flex flex-col justify-between items-center mb-6 lg:flex-row">
          <h1 className="text-2xl font-semibold text-white tracking-wide mb-4 lg:mb-0">PAYLOAD PAYLIGJIGUATOR</h1>
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-red-600 focus:border-red-600"
            />
            <button className="text-gray-400 bg-gray-800 border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:text-white transition-all">
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Left Column - Span 2 */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            
            {/* Payload Visualizer */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <header className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">PAYNERABILITY VISUALIZER</h2>
                <button className="text-gray-400 hover:text-white">
                  <Plus size={20} />
                </button>
              </header>
              <div className="p-6 relative">
                <div className="absolute inset-0 z-0 opacity-10 card-content-grid-bg"></div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex justify-between items-center p-3 bg-gray-800/70 backdrop-blur rounded-lg border border-gray-700">
                    <span className="flex items-center text-gray-300">
                      <CheckCircle size={18} className="mr-2 text-red-600" />
                      Custom APL/JZE
                    </span>
                    <ToggleSwitch enabled={true} />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/70 backdrop-blur rounded-lg border border-gray-700">
                    <span className="flex items-center text-gray-300">
                      <CheckCircle size={18} className="mr-2 text-red-600" />
                      AV abiegas (Rydmea)
                    </span>
                    <ToggleSwitch enabled={true} />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/70 backdrop-blur rounded-lg border border-gray-700">
                    <span className="flex items-center text-gray-400">
                      <CheckCircle size={18} className="mr-2 text-gray-500" />
                      Scnbiogot Capture
                    </span>
                    <ToggleSwitch enabled={false} />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/70 backdrop-blur rounded-lg border border-gray-700">
                    <span className="flex items-center text-gray-300">
                      <CheckCircle size={18} className="mr-2 text-red-600" />
                      Persistence Mech2oen
                    </span>
                    <ToggleSwitch enabled={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Vulnerabilities */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <header className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">TOP VULNERABILITIES</h2>
                <button className="text-gray-400 hover:text-white">
                  <ChevronDown size={20} />
                </button>
              </header>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">Issue</p>
                <code className="w-full bg-gray-800 rounded-lg p-3 border border-gray-700 text-gray-300 font-mono text-sm block">
                  $build --android-keylog= file
                </code>
                <code className="w-full bg-gray-950 rounded-lg p-3 border border-gray-700 text-green-500 font-mono text-sm block mt-2">
                  OUTPUT: Clean executable file
                </code>
                <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all mt-6">
                  BUILD PAYTLAND
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Span 1 */}
          <div className="xl:col-span-1 flex flex-col gap-6">
            
            {/* Build Status */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <header className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">BUILD STATUS</h2>
                <button className="text-gray-400 hover:text-white">
                  <Plus size={20} />
                </button>
              </header>
              <div className="p-6 flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path 
                      className="fill-none stroke-gray-700 stroke-[3]" 
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path 
                      className="fill-none stroke-green-500 stroke-[3]" 
                      strokeDasharray="12,100"
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">12%</span>
                    <span className="text-sm text-gray-400">QtyAvbr... 4.2</span>
                    <span className="text-sm text-gray-400">Size: 4.3 MB</span>
                  </div>
                </div>
                <div className="bg-green-500 text-white text-lg font-semibold rounded-full py-2 px-8">
                  READY
                </div>
              </div>
            </div>

            {/* Build Assistant */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-2">BUILD ASSISTANT</h2>
                <p className="text-gray-400 text-sm mb-4">98% Insights</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-600 transition-all">
                    Suggest Settings
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all">
                    Test Payload
                  </button>
                </div>
              </div>
            </div>
            
            {/* Active Caticant */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-white">ACTIVE CATICANT</h2>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Subduaen émon domonation</span>
                  <ToggleSwitch enabled={true} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Fbeams</span>
                  <ToggleSwitch enabled={false} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rlesvy Benora voint</span>
                  <ToggleSwitch enabled={false} />
                </div>
              </div>
            </div>

            {/* Scan Log */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
              <header className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-lg font-semibold text-white">SCAN LOG</h2>
              </header>
              <div className="p-4 h-36 overflow-y-auto bg-black/50 rounded-b-lg">
                <code className="font-mono text-xs text-gray-400 block whitespace-pre">
                  [LOG] Remsds Deployed
                  [LOG] Gde-092.1-fde(Cstive)
                  [LOG] Gde-Preb-Ver(de0.1/X)
                  [LOG] dsf-d-sd-ds... (Ok)
                  [LOG] 49ms-de-A (Amck-2a)
                  [LOG] Remsds Deployed v0.1.2(X)
                  [LOG] Fde(Enb)...(Ok)
                  [LOG] Avde(de)...(Ok)
                  [LOG] Scan complete...
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// --- Dashboard Page Component ---
const DashboardPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Payloads');

  return (
    <div className="flex h-screen bg-gray-950 text-gray-300">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <div className="flex-1 flex flex-col">
        {/* Mobile Header - Hidden on desktop */}
        <header className="lg:hidden h-20 flex items-center justify-between px-4 bg-gray-900 border-b border-gray-800">
          <ZenithLogo />
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="text-gray-300"
          >
            <Menu size={28} />
          </button>
        </header>
        
        {/* Main Content */}
        <DashboardContent />
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function Home() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="w-full min-h-screen">
      {currentPage === 'login' ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardPage />
      )}
    </div>
  );
}