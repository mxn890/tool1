'use client';
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Target,
  FileText,
  Search,
  BarChart3,
  Settings,
  Lock,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  Loader,
  XCircle,
  ArrowRight,
  Menu,
  X,
  Eye,
  EyeOff,
  LogOut,
} from 'lucide-react';

// Color Palette based on images
const colors = {
  bgPrimary: 'bg-[#1a1d21]',
  bgSecondary: 'bg-[#2a2f36]',
  bgTertiary: 'bg-[#353a43]',
  accent: 'text-[#00e0b0]',
  accentGradient: 'bg-gradient-to-r from-[#00e0b0] to-[#00c49b]',
  accentGradientHover: 'bg-gradient-to-r from-[#00c49b] to-[#00e0b0]',
  safe: 'text-[#00e0b0]',
  safeBg: 'bg-[#00e0b0]',
  textPrimary: 'text-gray-200',
  textSecondary: 'text-gray-400',
  textActive: 'text-white',
  critical: 'text-red-500',
  high: 'text-yellow-400',
  medium: 'text-blue-400',
  low: 'text-green-500',
  border: 'border-gray-700',
};

// Logo Component
const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex shrink-0 items-center gap-2 ${className}`}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
        stroke="#00e0b0"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 7L12 12L22 7"
        stroke="#00e0b0"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-2xl font-bold tracking-wider text-white">ZENITH</span>
  </div>
);

// Login Page Component
const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'Zeshu' && password === 'Zeshu') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#1a1d21] text-gray-200 font-inter">
      <div 
        className="w-full max-w-sm rounded-xl p-6 md:p-8 shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2e343c, #262a31)',
          boxShadow: '10px 10px 20px #22262c, -10px -10px 20px #323840',
        }}
      >
        <Logo className="justify-center mb-2" />
        <p className="text-center text-sm text-gray-400 mb-8">
          YOUR TRUSTED CYBERSECURITY PARTNER
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1d21] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00e0b0] transition-all duration-300 shadow-inner"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-10 bg-[#1a1d21] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00e0b0] transition-all duration-300 shadow-inner"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 hover:text-gray-200 transition-colors"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
          )}

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded bg-[#1a1d21] border-gray-600 text-[#00e0b0] focus:ring-0 focus:ring-offset-0"
              />
              <span className="ml-2 text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#00e0b0] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#00e0b0] to-[#00c49b] hover:from-[#00c49b] hover:to-[#00e0b0] text-black font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            LOGIN
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="text-center mt-6">
            <span className="text-gray-400">OR</span>
            <a href="#" className="block mt-2 text-sm text-[#00e0b0] hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

// Dashboard Sidebar
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, onLogout }: { isSidebarOpen: boolean, setIsSidebarOpen: (open: boolean) => void, onLogout: () => void }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Scan Targets', icon: Target },
    { name: 'Template', icon: FileText },
    { name: 'Scans', icon: Search },
    { name: 'Reports', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-[#2a2f36] p-6 flex flex-col h-full fixed top-0 left-0 z-40 transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:shadow-lg`}
      >
        <div className="flex items-center justify-between lg:justify-start">
          <Logo className="mb-10 lg:mb-0" />
          <button
            className="lg:hidden text-gray-400 hover:text-gray-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="lg:hidden h-px bg-gray-700 my-4" />
        <nav className="flex-1 mt-6 lg:mt-10">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <button
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 transform w-full text-left
                  ${
                    activeItem === item.name
                      ? 'bg-gradient-to-r from-[#00e0b0] to-[#00c49b] text-black font-medium shadow-lg hover:scale-105'
                      : 'text-gray-400 hover:bg-[#353a43] hover:text-white hover:translate-x-1'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Logout Button */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 transform w-full text-gray-400 hover:bg-[#353a43] hover:text-white hover:translate-x-1"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

// Dashboard Mobile Header
const MobileHeader = ({ setIsSidebarOpen }: { setIsSidebarOpen: (open: boolean) => void }) => (
  <header className="lg:hidden sticky top-0 z-20 bg-[#2a2f36] p-4 shadow-md flex items-center justify-between">
    <Logo />
    <button
      onClick={() => setIsSidebarOpen(true)}
      className="text-gray-400 hover:text-gray-200"
    >
      <Menu className="h-6 w-6" />
    </button>
  </header>
);

// Vulnerability Visualizer
const VulnerabilityVisualizer = () => {
  const animationStyle = `
    @keyframes flow {
      to {
        stroke-dashoffset: -100;
      }
    }
    .line-flow {
      stroke-dasharray: 20 10;
      stroke-dashoffset: 0;
      animation: flow 2s linear infinite;
    }
    .critical-pulse {
      box-shadow: 0 0 12px 3px rgba(255, 71, 87, 0.7);
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% { box-shadow: 0 0 12px 3px rgba(255, 71, 87, 0.5); }
      70% { box-shadow: 0 0 18px 6px rgba(255, 71, 87, 0.0); }
      100% { box-shadow: 0 0 12px 3px rgba(255, 71, 87, 0.5); }
    }
  `;

  const Node = ({ text, x, y, status, delay = 0 }: { text: string, x: string, y: string, status: 'critical' | 'safe' | 'pending', delay?: number }) => {
    const statusClasses: Record<'critical' | 'safe' | 'pending', string> = {
      critical: 'bg-red-500/20 text-red-400 border-red-500',
      safe: 'bg-teal-500/20 text-[#00e0b0] border-teal-500',
      pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500',
    };
    return (
      <div
        className={`absolute w-36 h-20 ${statusClasses[status]} border rounded-lg flex items-center justify-center p-2 text-center text-xs shadow-lg transition-all hover:scale-110 hover:shadow-cyan-500/20
        ${status === 'critical' ? 'critical-pulse' : ''}
        `}
        style={{ left: x, top: y, animationDelay: `${delay}ms` }}
      >
        <span className="relative flex h-3 w-3 mr-2">
          {status === 'pending' && <span className="animate-spin absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>}
          {status === 'critical' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}
          {status === 'safe' && <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${status === 'pending' ? 'bg-yellow-500' : status === 'critical' ? 'bg-red-500' : 'bg-teal-500'}`}></span>
        </span>
        {text}
      </div>
    );
  };

  const Line = ({ x1, y1, x2, y2 }: { x1: string, y1: string, x2: string, y2: string }) => (
    <svg className="absolute w-full h-full" style={{ left: 0, top: 0, zIndex: -1 }}>
      <path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke="#4a5568"
        strokeWidth="3.5"
        fill="none"
        className="line-flow"
      />
      <path
        d={`M ${x1} ${y1} L ${x2} ${y2}`}
        stroke="#353a43"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );

  return (
    <div className="h-96 w-full relative overflow-hidden p-4">
      <style>{animationStyle}</style>
      {/* Lines */}
      <Line x1="124" y1="50" x2="224" y2="120" />
      <Line x1="124" y1="50" x2="224" y2="220" />
      <Line x1="364" y1="120" x2="224" y2="120" />
      <Line x1="364" y1="220" x2="224" y2="220" />
      <Line x1="364" y1="120" x2="464" y2="50" />
      <Line x1="364" y1="120" x2="464" y2="220" />

      {/* Nodes */}
      <Node text="Subdomain Discovery & API" x="50px" y="10px" status="safe" delay={0} />
      <Node text="Geo-record Nuclei" x="150px" y="80px" status="safe" delay={200} />
      <Node text="ISSR B-820 Xebs" x="150px" y="180px" status="critical" delay={300} />
      <Node text="Present/Inactive Client API" x="290px" y="80px" status="safe" delay={400} />
      <Node text="Nuclei Reactor Proof" x="290px" y="180px" status="pending" delay={500} />
      <Node text="Recent Nmapred Exploit" x="390px" y="10px" status="critical" delay={600} />
      <Node text="Anr-test Exposure" x="390px" y="180px" status="safe" delay={700} />
    </div>
  );
};

// Dashboard Main Content
const MainContent = () => {
  const vulnerabilities = [
    {
      id: 1,
      type: 'Unauth. API Endpoint',
      discovered: '00%',
      status: 10,
      severity: 'CRITICAL',
      color: 'text-red-500',
    },
    {
      id: 2,
      type: 'Auth. API Endpoint',
      discovered: '33%',
      status: 19,
      severity: 'HIGH',
      color: 'text-yellow-400',
    },
    {
      id: 3,
      type: 'OutdateddIn Tekuover',
      discovered: '39%',
      status: '08',
      severity: 'MEDIUM',
      color: 'text-blue-400',
    },
    {
      id: 4,
      type: 'Outdated Template',
      discovered: '33%',
      status: '08',
      severity: 'MEDIUM',
      color: 'text-blue-400',
    },
    {
      id: 15,
      type: 'AI-POCS | protected API-Adjacent Gen',
      discovered: '37%',
      status: '00',
      severity: 'LOW',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 text-gray-200">
      {/* Main Column (Left) */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Vulnerability Visualizer */}
        <DashboardCard title="VULNERABILITY VISUALIZER">
          <VulnerabilityVisualizer />
        </DashboardCard>

        {/* Top Vulnerabilities */}
        <DashboardCard title="TOP VULNERABILITIES">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-sm text-left">
              <thead className="border-b border-gray-700 text-gray-400 uppercase">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Discovered</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y border-gray-700">
                {vulnerabilities.map((vuln) => (
                  <tr key={vuln.id} className="hover:bg-[#353a43] transition-colors duration-200">
                    <td className="py-3 px-4 text-gray-400">{vuln.id}</td>
                    <td className="py-3 px-4 text-gray-200 font-medium">
                      <span className={`${vuln.color} font-bold mr-2`}>{vuln.severity}</span>
                      {vuln.type}
                    </td>
                    <td className="py-3 px-4 text-gray-200">{vuln.discovered}</td>
                    <td className="py-3 px-4 text-gray-200">{vuln.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>

      {/* Side Column (Right) */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        {/* Active Scan Stats */}
        <DashboardCard title="ACTIVE SCAN: bugbountypro.com">
          <div className="flex justify-around items-center text-center">
            <div>
              <div className="text-4xl sm:text-6xl font-bold text-red-500">187</div>
              <div className="text-gray-400">Critical</div>
            </div>
            <div>
              <div className="text-4xl sm:text-6xl font-bold text-yellow-400">32</div>
              <div className="text-gray-400">High</div>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="text-gray-200">7 Explicit PoCs Generated</div>
            <div className="text-gray-400">Total Assets: 250</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 py-2 px-4 rounded-lg bg-[#353a43] hover:bg-[#1a1d21] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
              Download Report
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-[#353a43] hover:bg-[#1a1d21] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
              Share via Telegram
            </button>
          </div>
        </DashboardCard>

        {/* AI-Assisted Analysis */}
        <DashboardCard title="AI-ASSISTED ANALYSIS">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">AI Insight Score</span>
            <span className="text-lg font-bold text-[#00e0b0]">97%</span>
          </div>
          <div className="w-full bg-[#1a1d21] rounded-full h-2.5 shadow-inner">
            <div className="bg-gradient-to-r from-[#00e0b0] to-[#00c49b] h-2.5 rounded-full" style={{ width: '97%' }}></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-[#00e0b0] to-[#00c49b] hover:from-[#00c49b] hover:to-[#00e0b0] text-black font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Generate AI Report
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-[#353a43] hover:bg-[#1a1d21] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
              Share
            </button>
          </div>
        </DashboardCard>

        {/* Active Scan Controls */}
        <DashboardCard title="ACTIVE SCAN CONTROLS">
          <ul className="space-y-3">
            <ScanControlItem title="Subdomain Enumeration" status="running" />
            <ScanControlItem title="API Discovery" status="completed" />
            <ScanControlItem title="Content Exposure/Relay" status="stopped" />
          </ul>
          <button
            className="w-full py-3 mt-6 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            STOP SCAN
          </button>
        </DashboardCard>

        {/* Scan Log Output */}
        <DashboardCard title="SCAN LOG OUTPUT" padding="p-0">
          <pre
            className="text-xs text-gray-400 p-4 h-48 overflow-y-auto bg-black/50 rounded-b-lg"
            style={{ fontFamily: 'monospace' }}
          >
            {`[INFO] Starting scan on bugbountypro.com...
[INFO] Running Subdomain Enumeration...
[DATA] Found: api.bugbountypro.com
[DATA] Found: test.bugbountypro.com
[INFO] Subdomain Enumeration complete.
[INFO] Starting API Discovery...
[WARN] Rate limit detected, slowing down.
[DATA] Found endpoint: /v1/users
[DATA] Found endpoint: /v1/auth
[INFO] API Discovery complete.
[INFO] Starting Content Exposure/Relay...
[STOP] Scan manually stopped by user.
`}
          </pre>
        </DashboardCard>
      </div>
    </div>
  );
};

// Helper Components for Dashboard
const DashboardCard = ({ title, children, padding = 'p-4 sm:p-6' }: { title: string, children: React.ReactNode, padding?: string }) => (
  <div className="bg-[#2a2f36] rounded-xl shadow-lg border border-gray-700 border-opacity-50 transition-all duration-300 hover:shadow-cyan-500/10 hover:border-cyan-500/30">
    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4 sm:px-6 pt-5 pb-4 border-b border-gray-700">
      {title}
    </h3>
    <div className={padding}>{children}</div>
  </div>
);

const ScanControlItem = ({ title, status }: { title: string, status: 'running' | 'completed' | 'stopped' }) => {
  const statusIcons: Record<'running' | 'completed' | 'stopped', React.ReactNode> = {
    running: <Loader className="h-4 w-4 text-yellow-400 animate-spin" />,
    completed: <CheckCircle className="h-4 w-4 text-[#00e0b0]" />,
    stopped: <XCircle className="h-4 w-4 text-red-500" />,
  };
  return (
    <li className="flex items-center justify-between p-3 rounded-lg bg-[#353a43] transition-all duration-300 hover:bg-[#1a1d21] hover:shadow-md">
      <span className="text-gray-200">{title}</span>
      <div className="flex items-center gap-2">
        {statusIcons[status]}
        <span className="text-sm capitalize text-gray-400">{status}</span>
      </div>
    </li>
  );
};

// Main App Component
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.className = 'bg-[#1a1d21] font-inter';
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-[#1a1d21]">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col lg:ml-64">
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
