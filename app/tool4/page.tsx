'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('AI Chat');
  const [kbFilters, setKbFilters] = useState<Record<string, boolean>>({
    'Linux': false,
    'UI': true,
    'SQL': false,
    'Autoowl Mest': false,
    'Armitage': false,
    'Lcoration': false
  });
  const [formData, setFormData] = useState({
    username: 'Zeshu',
    password: 'Zeshu',
    rememberMe: false
  });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.username === 'Zeshu' && formData.password === 'Zeshu') {
      setLoginError('');
      setCurrentPage('dashboard');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const toggleKbFilter = (filter: string) => {
    setKbFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Dashboard', icon: DashboardIcon },
    { name: 'Scan Targets', icon: TargetIcon },
    { name: 'AI Chat', icon: ChatIcon },
    { name: 'Scans', icon: ScanIcon },
    { name: 'Reports', icon: ReportIcon },
    { name: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-full bg-gray-900 text-gray-300">
      {/* Login Page */}
      {currentPage === 'login' && (
        <LoginPage 
          formData={formData}
          setFormData={setFormData}
          loginError={loginError}
          handleLogin={handleLogin}
        />
      )}

      {/* Dashboard Page */}
      {currentPage === 'dashboard' && (
        <DashboardPage
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          navItems={navItems}
          kbFilters={kbFilters}
          toggleKbFilter={toggleKbFilter}
        />
      )}
    </div>
  );
}

// Icons Components
const DashboardIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6-4h.01M12 17h.01" />
  </svg>
);

const TargetIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ChatIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.719A9.864 9.864 0 012 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ScanIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ReportIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SettingsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LockIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M4 8V6a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h1zm2 0V6a4 4 0 108 0v2H6z" clipRule="evenodd" />
  </svg>
);

const BellIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const MenuIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ZenithIcon = ({ className = "h-10 w-10", color = "text-cyan-400" }: { className?: string, color?: string }) => (
  <svg className={`${className} ${color}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2Z M18.5 9.8L12 13.6L5.5 9.8L12 6.1L18.5 9.8Z M18 11.3V14.2L12 17.6L6 14.2V11.3L12 14.7L18 11.3Z"/>
  </svg>
);

// Login Page Component
const LoginPage = ({ formData, setFormData, loginError, handleLogin }: { 
  formData: { username: string, password: string, rememberMe: boolean }, 
  setFormData: (data: { username: string, password: string, rememberMe: boolean }) => void, 
  loginError: string, 
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void 
}) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 space-y-6 shadow-2xl shadow-cyan-500/5 hover:shadow-cyan-500/10 hover:border-cyan-500 transition-all duration-300">
          {/* Logo and Title */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <ZenithIcon color="text-cyan-400" />
              <h1 className="text-4xl font-bold text-white tracking-wide">ZENITH</h1>
            </div>
            <p className="text-sm font-medium text-gray-400 tracking-wider">
              YOUR TRUSTED CYBERSECURITY PARTNER
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true" />
            
            {/* Error Message */}
            {loginError && (
              <div className="text-red-500 text-sm text-center font-medium bg-red-500/10 py-2 rounded-lg">
                {loginError}
              </div>
            )}
            
            {/* Username Input */}
            <div>
              <input 
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="relative block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                placeholder="Username"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input 
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="relative block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all pr-12"
                placeholder="Password"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LockIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  className="h-4 w-4 bg-gray-600 border-gray-600 rounded text-cyan-500 focus:ring-cyan-500 focus:ring-2"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-400 hover:text-cyan-400 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <button 
                type="submit"
                className="btn group relative w-full flex justify-center py-3 px-4 border border-transparent text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                LOGIN
              </button>
            </div>

            {/* Sign Up */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-500 rounded-full">OR</span>
                </div>
              </div>
              <a href="#" className="mt-3 block font-medium text-gray-400 hover:text-cyan-400 transition-colors">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Dashboard Page Component
const DashboardPage = ({ 
  mobileMenuOpen, 
  toggleMobileMenu, 
  activeNavItem, 
  setActiveNavItem, 
  navItems, 
  kbFilters, 
  toggleKbFilter 
}: { 
  mobileMenuOpen: boolean, 
  toggleMobileMenu: () => void, 
  activeNavItem: string, 
  setActiveNavItem: (item: string) => void, 
  navItems: Array<{ name: string, icon: React.ComponentType<{ className?: string }> }>, 
  kbFilters: Record<string, boolean>, 
  toggleKbFilter: (filter: string) => void 
}) => {
  return (
    <div className="h-full flex">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-20 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`fixed lg:static inset-y-0 left-0 w-64 bg-gray-800 z-30 transform transition-transform duration-300 ease-in-out border-r border-gray-700 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-20 px-4 border-b border-gray-700 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <ZenithIcon className="h-8 w-8" color="text-red-600" />
              <h1 className="text-2xl font-bold text-white tracking-wide">ZENITH</h1>
            </div>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex-grow py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="px-4">
                <button
                  onClick={() => {
                    setActiveNavItem(item.name);
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) toggleMobileMenu();
                  }}
                  className={`w-full text-left flex items-center space-x-3 p-3 rounded-lg transition-all border-l-4 ${
                    activeNavItem === item.name 
                      ? 'bg-red-600/10 border-red-600 text-white' 
                      : 'border-transparent text-gray-400 hover:bg-white/5'
                  }`}
                >
                  <item.icon />
                  <span className={`${activeNavItem === item.name ? 'font-medium' : ''}`}>
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-gray-800 border-b border-gray-700 flex-shrink-0 flex items-center justify-between px-4 lg:px-8">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </button>
          
          {/* Page Title */}
          <div className="text-lg font-semibold text-white">
            <span className="text-gray-400 font-medium">ACTIVE SCAN:</span> example.com
          </div>
          
          {/* Top Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white relative">
              <BellIcon />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-gray-800"></span>
            </button>
            {/* Red Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-700"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Center Column */}
            <div className="w-full lg:w-1/2 xl:flex-grow space-y-6">
              {/* AI Exploit Assistant */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/5 hover:shadow-red-500/10 hover:border-red-500 transition-all duration-300">
                <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                  <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428A8 8 0 1112 4a8 8 0 017.428 11.428zM12 9v4M12 17h.01"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-white">AI EXPLOIT ASSISTANT</h3>
                </div>
                
                {/* Vulnerability Map Placeholder */}
                <div className="p-4">
                  <div className="aspect-video bg-gray-900 rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center text-gray-500">
                    Vulnerability Map / Exploit Graph Placeholder
                  </div>
                </div>

                {/* Terminal/Input */}
                <div className="p-4 space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm border border-gray-700">
                    <span className="text-red-500">$</span>
                    <span className="text-white ml-2">generate payload for windows</span>
                  </div>
                  
                  {/* Radio Options */}
                  <div className="space-y-3">
                    <label className="flex items-start p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="exploit-type" className="mt-1 h-4 w-4 text-red-600 bg-gray-600 border-gray-600 focus:ring-red-500 focus:ring-2" defaultChecked />
                      <div className="ml-3">
                        <span className="font-medium text-white">Generate custom payload</span>
                        <p className="text-sm text-gray-400">Generates custom payload for <span className="text-red-500">struts.</span> Optimizes for minimum network footprint.</p>
                      </div>
                    </label>
                    <label className="flex items-start p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="radio" name="exploit-type" className="mt-1 h-4 w-4 text-red-600 bg-gray-600 border-gray-600 focus:ring-red-500 focus:ring-2" />
                      <div className="ml-3">
                        <span className="font-medium text-white">Enumerating root (advanced)</span>
                        <p className="text-sm text-gray-400">This chain attempts to find common misconfigurations to escalate privileges silently.</p>
                      </div>
                    </label>
                  </div>

                  {/* Action Button */}
                  <button className="btn w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                    GENERATE & EXECUTE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 xl:w-96 flex-shrink-0 space-y-6">
              {/* Commands & Options */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/5 hover:shadow-red-500/10 hover:border-red-500 transition-all duration-300">
                <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">COMMANDS & OPTIONS</h3>
                </div>
                <div className="p-4 space-y-4">
                  <ToggleOption label="Custom Payload Generation" defaultChecked />
                  <ToggleOption label="Explain Attack Methodologies" />
                  <ToggleOption label="Real-Time Exploit Generation" defaultChecked />
                </div>
              </div>

              {/* Knowledge Base (API options) */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/5 hover:shadow-red-500/10 hover:border-red-500 transition-all duration-300">
                <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">KNOWLEDGE BASE</h3>
                </div>
                <div className="p-4 space-y-4">
                  <ToggleOption label="No externals API requirements" defaultChecked />
                  <ToggleOption label="Use External APIs" />
                </div>
              </div>

              {/* Knowledge Base Filters */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/5 hover:shadow-red-500/10 hover:border-red-500 transition-all duration-300">
                <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">KNOWLEDGE BASE</h3>
                </div>
                <div className="p-4 grid grid-cols-2 gap-3">
                  {Object.entries(kbFilters).map(([filter, active]) => (
                    <button
                      key={filter}
                      onClick={() => toggleKbFilter(filter)}
                      className={`btn p-2 text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5 ${
                        active 
                          ? 'bg-red-600 hover:bg-red-700 shadow-lg' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {filter === 'Lcoration' ? (
                        <div className="flex items-center justify-center space-x-2">
                          <span>Lcoration</span>
                          {!active && (
                            <span className="text-xs font-bold bg-gray-500 text-gray-900 px-1.5 py-0.5 rounded-full">OFF</span>
                          )}
                        </div>
                      ) : (
                        filter
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-Time Status */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-2xl shadow-red-500/5 hover:shadow-red-500/10 hover:border-red-500 transition-all duration-300">
                <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                  <h3 className="text-lg font-semibold text-white">REAL-TIME STATUS</h3>
                </div>
                <div className="p-6 flex flex-col items-center justify-center space-y-4">
                  {/* Animated Circular Progress Bar */}
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-gray-700" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                      <circle 
                        className="text-green-500 progress-circle" 
                        strokeWidth="10"
                        strokeDasharray="251.2" 
                        strokeDashoffset="251.2" 
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40" cx="50" cy="50"
                        transform="rotate(-90 50 50)" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-green-500">98%</span>
                      <span className="text-sm text-gray-400">Confidence</span>
                    </div>
                  </div>
                  <div className="text-sm text-green-500 font-medium tracking-wider">ACTIVE</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Toggle Option Component
const ToggleOption = ({ label, defaultChecked = false }: { label: string, defaultChecked?: boolean }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-2 peer-focus:ring-red-500 peer-checked:bg-red-600 transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
    </div>
  );
};