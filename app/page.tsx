"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Bot,
  ScanLine,
  FileText,
  Settings,
  ChevronRight,
  ShieldCheck,
  Network,
  X,
  Share2,
  Menu,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";

// Responsive Next.js client page (app/page.tsx)
// Mobile-first, Tailwind-based responsive layout with slide-over sidebars

// --- Reusable Components ---
const InfoCard = ({ title, children, showExpand = true }: any) => (
  <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-300">
    <div className="flex justify-between items-center p-4 border-b border-zinc-700">
      <h3 className="font-semibold text-sm text-white uppercase tracking-wider">{title}</h3>
      {showExpand && <ChevronRight size={18} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />}
    </div>
    <div className="p-4 space-y-4">{children}</div>
  </div>
);

const Toggle = ({ label, initialChecked = false, onChange }: any) => {
  const [isOn, setIsOn] = useState(initialChecked);
  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange(label, newState);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300 text-sm">{label}</span>
      <button
        onClick={handleClick}
        aria-pressed={isOn}
        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 ${
          isOn ? "bg-red-600 focus:ring-red-500" : "bg-gray-700 focus:ring-gray-500"
        }`}
      >
        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 shadow-md ${isOn ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
};

const ProgressCircle = ({ percentage }: any) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 80 80">
        <circle className="text-zinc-700" strokeWidth="6" stroke="currentColor" fill="transparent" r={radius} cx="40" cy="40" />
        <circle
          className="text-cyan-400 drop-shadow-lg"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset, transition: "stroke-dashoffset 0.5s ease-in-out" }}
          transform="rotate(-90 40 40)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white tracking-tight">{percentage}%</span>
        <span className="text-xs text-gray-400 -mt-1">ACTIVE</span>
      </div>
    </div>
  );
};

// --- Views ---
const ExploitAssistantView = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
      <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
        <Bot size={20} className="text-red-500" /> AI EXPLOIT ASSISTANT
      </h3>

      <div className="relative w-full h-48 md:h-64 bg-black rounded-lg p-4 border border-zinc-700 mb-6 overflow-hidden shadow-inner shadow-zinc-700/50">
        <div className="text-center text-gray-600 pt-16 md:pt-20">
          <Network size={40} className="mx-auto mb-2" />
          <p>Network Exploit Path Visualizer (Static Demo)</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-700">
          <p className="text-sm font-mono text-gray-400 leading-relaxed">
            <span className="text-cyan-400">$</span> genwete payload for windows
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2 border-red-500 bg-red-500/30" />
          <p className="text-sm text-gray-300">Generates custom payload for xll,sl,sl once tss pering (red | soon bream by) weneve sl 2my and jilorej...</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2 border-gray-500" />
          <p className="text-sm text-gray-500">Penetrating mor betcher: (text truncated)</p>
        </div>
      </div>

      <button className="mt-8 w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 transform hover:scale-[1.005]">
        GENERATE & EXECUTE
      </button>
    </div>
  );
};

const ScanView = ({ toggleStates, handleToggleChange }: any) => {
  const vulnerabilityData = [
    { id: 1, critical: "Unauth. API Endpoint", discoveries: "00%", status: "10" },
    { id: 2, critical: "Unauth. API Endpoint", discoveries: "33%", status: "19" },
    { id: 3, critical: "Outdated Testover", discoveries: "30%", status: "00" },
    { id: 4, critical: "Outdated Template", discoveries: "33%", status: "08" },
    { id: 5, critical: "AI-POC | protected API-poc. Gen", discoveries: "89%", status: "00" },
    { id: 11, critical: "AI-POC | Craphles for CVE-2023-XXX", discoveries: "99%", status: "00" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-800 pb-4 gap-4">
        <h2 className="text-sm font-semibold text-gray-400 tracking-wider">ACTIVE SIMMAN: bugburitypro.com</h2>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <span className="text-3xl sm:text-4xl font-extrabold text-red-500 tracking-tighter">187</span>
            <span className="text-sm sm:text-lg text-gray-400 ml-1">Critical</span>
            <p className="text-xs text-gray-500">Total Assets</p>
          </div>
          <div className="text-right">
            <span className="text-3xl sm:text-4xl font-extrabold text-yellow-500 tracking-tighter">32</span>
            <span className="text-sm sm:text-lg text-gray-400 ml-1">High</span>
            <p className="text-xs text-gray-500">7 Exploit PoC Generated</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <h3 className="font-bold text-lg text-white mb-4">VULNERABILITY VISUALIZER</h3>
          <div className="relative w-full h-56 md:h-80 bg-black rounded-lg p-4 border border-zinc-700 overflow-hidden shadow-inner shadow-zinc-700/50">
            <div className="text-center text-gray-600 pt-20">
              <Network size={40} className="mx-auto mb-2" />
              <p>Vulnerability Dependency Graph (Static Demo)</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">AI-ASSISTED ANALYSIS</h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-300 text-sm">AI Insight Score</span>
              <span className="text-cyan-400 font-bold">97%</span>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40">GENERATE AI REPORT</button>
            <button className="w-full bg-zinc-700 text-gray-300 font-bold py-3 rounded-lg hover:bg-zinc-600 transition-colors"><Share2 size={16} className="inline mr-2" /> SHARE VIA TELEGRAM</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl overflow-x-auto">
          <h3 className="font-bold text-lg text-white mb-4">TOP VULLENIABILITES</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-700">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase text-gray-400 tracking-wider">
                  <th className="py-3 pr-2">TYPE</th>
                  <th className="py-3 pr-2">CRITICAL</th>
                  <th className="py-3 pr-2">DISCOVERED</th>
                  <th className="py-3 pr-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm text-gray-300">
                {vulnerabilityData.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-800 transition-colors">
                    <td className="py-2 pr-2 text-cyan-400">{item.id}</td>
                    <td className="py-2 pr-2">{item.critical}</td>
                    <td className="py-2 pr-2">{item.discoveries}</td>
                    <td className="py-2 pr-2">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <InfoCard title="ACTIVE SCAN CONTROLS" showExpand={false}>
            <Toggle label="Subdomain Enumeration" initialChecked={toggleStates['Subdomain Enumeration']} onChange={handleToggleChange} />
            <Toggle label="API Discovery" initialChecked={toggleStates['API Discovery']} onChange={handleToggleChange} />
            <Toggle label="Containment Exposure x-Ray" initialChecked={toggleStates['Containment Exposure x-Ray']} onChange={handleToggleChange} />
            <button className="w-full mt-4 bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 flex items-center justify-center gap-2"><X size={16} /> STOP SCAN</button>
          </InfoCard>

          <InfoCard title="SCAN LOG OUTPUT" showExpand={false}>
            <div className="h-40 overflow-y-auto bg-zinc-950 p-3 rounded text-xs font-mono text-gray-500 border border-zinc-800">
              <p>[INFO] Initiating API discovery...</p>
              <p>[SUCCESS] Found 43 endpoints.</p>
              <p>[WARN] Rate limit encountered on /auth/login.</p>
              <p>[DEBUG] Analyzing response headers...</p>
              <p>[INFO] Starting Subdomain Enumeration...</p>
              <p>[SUCCESS] 12 new subdomains identified.</p>
              <p>[CRITICAL] Unauth API endpoint exposed: /admin/users</p>
              <p>[INFO] Running Containment Exposure x-Ray...</p>
              <p>[DEBUG] Processing metadata for CVE-2023-XXX.</p>
              <p>[INFO] Scan complete.</p>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

// --- Layout / Navigation ---
const Sidebar = ({ activeItem, setActiveItem, onClose }: any) => {
  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Scan Targets", icon: <ShieldCheck size={18} /> },
    { name: "AI Chat", icon: <Bot size={18} /> },
    { name: "Scans", icon: <ScanLine size={18} /> },
    { name: "Records", icon: <FileText size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <nav className="w-72 md:w-60 bg-zinc-900 flex flex-col h-full p-4 border-r border-zinc-800 shadow-2xl">
      <div className="flex items-center gap-2 px-2 mb-6 text-cyan-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6L12 10L20 6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 18L12 22L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg md:text-xl font-extrabold text-gray-100 tracking-widest">ZENITH</span>
        <button onClick={onClose} className="ml-auto md:hidden p-1 rounded-md hover:bg-zinc-800"><ChevronLeft size={18} /></button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeItem === item.name ? "bg-red-600 text-white shadow-md shadow-red-600/30" : "text-gray-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs text-gray-400">© Zenith</div>
      </div>
    </nav>
  );
};

const RightSidebar = ({ toggleStates, handleToggleChange }: any) => {
  const handleButtonClick = (buttonText: string) => console.log(`Knowledge Base Button Clicked: ${buttonText}`);
  return (
    <aside className="w-full md:w-80 bg-zinc-900 flex flex-col h-full p-4 gap-4 border-l border-zinc-800 overflow-y-auto">
      <InfoCard title="COMMANDS & OPTIONS">
        <Toggle label="Custom Payload Generation" initialChecked={toggleStates['Custom Payload Generation']} onChange={handleToggleChange} />
        <Toggle label="Explain Attack Methodologies" initialChecked={toggleStates['Explain Attack Methodologies']} onChange={handleToggleChange} />
        <Toggle label="Real-Time Exploit Generation" initialChecked={toggleStates['Real-Time Exploit Generation']} onChange={handleToggleChange} />
      </InfoCard>

      <InfoCard title="KNOWLEDGE BASE" showExpand={false}>
        <Toggle label="No externals API requirments" initialChecked={toggleStates['No externals API requirments']} onChange={handleToggleChange} />
        <Toggle label="Use External APIs" initialChecked={toggleStates['Use External APIs']} onChange={handleToggleChange} />
      </InfoCard>

      <InfoCard title="TOOLS" showExpand={false}>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => handleButtonClick('Linux')} className="bg-zinc-700 text-gray-200 text-sm py-2 rounded-md hover:bg-zinc-600">Linux</button>
          <button onClick={() => handleButtonClick('UI')} className="bg-zinc-700 text-gray-200 text-sm py-2 rounded-md hover:bg-zinc-600">UI</button>
          <button onClick={() => handleButtonClick('SQL')} className="bg-zinc-700 text-gray-200 text-sm py-2 rounded-md hover:bg-zinc-600">SQL</button>
          <button onClick={() => handleButtonClick('Autoload')} className="bg-zinc-700 text-gray-200 text-sm py-2 rounded-md hover:bg-zinc-600">Autoload</button>
          <button onClick={() => handleButtonClick('Ancilage')} className="bg-zinc-700 text-gray-200 text-sm py-2 rounded-md hover:bg-zinc-600">Ancilage</button>
          <button onClick={() => handleButtonClick('Lispelion')} className="bg-cyan-600 text-white text-sm py-2 rounded-md hover:bg-cyan-700">Lispelion</button>
        </div>
      </InfoCard>

      <InfoCard title="REAL-TIME STATUS" showExpand={false}>
        <div className="flex flex-col items-center justify-center space-y-2">
          <ProgressCircle percentage={98} />
          <span className="text-sm text-gray-400 mt-2">REAL-TIME STATUS</span>
        </div>
      </InfoCard>
    </aside>
  );
};

// --- Page Component ---
export default function Page() {
  const [activeItem, setActiveItem] = useState("Scans");
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile left sidebar
  const [toolsOpen, setToolsOpen] = useState(false); // mobile right sidebar

  const [toggleStates, setToggleStates] = useState<any>({
    "Custom Payload Generation": true,
    "Explain Attack Methodologies": false,
    "Real-Time Exploit Generation": true,
    "No externals API requirments": false,
    "Use External APIs": true,
    "Subdomain Enumeration": true,
    "API Discovery": true,
    "Containment Exposure x-Ray": false,
  });

  const handleToggleChange = (label: string, newState: boolean) => setToggleStates((prev: any) => ({ ...prev, [label]: newState }));

  const renderMainContent = () => {
    switch (activeItem) {
      case "AI Chat":
        return <ExploitAssistantView />;
      case "Scans":
      default:
        return <ScanView toggleStates={toggleStates} handleToggleChange={handleToggleChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <style>{`body { background-color: #000; } ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #000000; } ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #52525b; }`}</style>

      {/* Top header for mobile */}
      <header className="md:hidden flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-900">
        <button aria-label="Open menu" onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-zinc-800"><Menu size={20} /></button>
        <div className="flex items-center gap-2">
          <div className="text-cyan-400 font-extrabold">ZENITH</div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setToolsOpen(true)} className="p-2 rounded-md hover:bg-zinc-800"><ChevronDown size={18} /></button>
        </div>
      </header>

      <div className="flex">
        {/* Left sidebar: large screens */}
        <aside className="hidden md:flex md:flex-shrink-0">
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} onClose={() => {}} />
        </aside>

        {/* Slide-over left sidebar (mobile) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 bg-zinc-900 shadow-xl">
              <Sidebar activeItem={activeItem} setActiveItem={(name: string) => { setActiveItem(name); setSidebarOpen(false); }} onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {renderMainContent()}
        </main>

        {/* Right sidebar - large screens */}
        <div className="hidden lg:block w-80">
          <RightSidebar toggleStates={toggleStates} handleToggleChange={handleToggleChange} />
        </div>

        {/* Slide-over right tools (mobile + tablet) */}
        {toolsOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setToolsOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-zinc-900 shadow-xl p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold">TOOLS</h4>
                <button onClick={() => setToolsOpen(false)} className="p-1 rounded-md hover:bg-zinc-800"><X size={18} /></button>
              </div>
              <RightSidebar toggleStates={toggleStates} handleToggleChange={handleToggleChange} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
