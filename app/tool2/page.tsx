'use client'

import React, { useState, useEffect } from 'react'
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
  Fish,
  Facebook,
  Mail,
  Users,
  KeyRound,
  Download,
  Copy,
  StopCircle,
  BarChart2,
  FileWarning, 
  ShieldOff,
  Terminal,
  FileCode,
  CheckCircle,
  AlertTriangle,
  UploadCloud,
  Loader2,
  Lock,
  Zap
} from 'lucide-react'

// --- Reusable Components ---
const InfoCard = ({ title, children, showExpand = true, className = "" }: { title: string, children: React.ReactNode, showExpand?: boolean, className?: string }) => (
  <div className={`bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-300 ${className}`}>
    <div className="flex justify-between items-center p-4 border-b border-zinc-700">
      <h3 className="font-semibold text-sm text-white uppercase tracking-wider">{title}</h3>
      {showExpand && <ChevronRight size={18} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />}
    </div>
    <div className="p-4 space-y-4">
      {children}
    </div>
  </div>
)

const Toggle = ({ label, initialChecked = false, onChange, labelKey }: { label: string, initialChecked?: boolean, onChange: (key: string, state: boolean) => void, labelKey?: string }) => {
  const [isOn, setIsOn] = useState(initialChecked)

  useEffect(() => {
    setIsOn(initialChecked)
  }, [initialChecked])

  const handleClick = () => {
    const newState = !isOn
    setIsOn(newState)
    onChange(labelKey || label, newState)
  }

  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300 text-sm">{label}</span>
      <button
        onClick={handleClick}
        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 ${isOn ? 'bg-red-600 focus:ring-red-500' : 'bg-gray-700 focus:ring-gray-500'}`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 shadow-md ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  )
}

const SelectButton = ({ text, active = false, onClick }: { text: string, active?: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full text-left text-sm p-2 rounded-md ${
      active
        ? 'bg-cyan-600 text-white font-medium shadow-md shadow-cyan-600/30'
        : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
    } transition-all duration-150`}
  >
    {text}
  </button>
)

const ProgressCircle = ({ percentage, colorClass = "text-cyan-400" }: { percentage: number, colorClass?: string }) => {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 80 80">
        <circle
          className="text-zinc-700"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className={`${colorClass} drop-shadow-lg`}
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
            filter: `drop-shadow(0 0 4px var(--tw-shadow-color))`
          }}
          transform="rotate(-90 40 40)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white tracking-tight">{percentage}%</span>
      </div>
    </div>
  )
}

// --- View Components ---
const ExploitAssistantView = () => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
    <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
      <Bot size={20} className="text-red-500" />
      AI EXPLOIT ASSISTANT
    </h3>
    <div className="relative w-full h-64 bg-black rounded-lg p-4 border border-zinc-700 mb-6 overflow-hidden shadow-inner shadow-zinc-700/50">
      <div className="text-center text-gray-600 pt-20">
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
        <div className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2 border-red-500 bg-red-500/30"></div>
        <p className="text-sm text-gray-300">
          Generates custom payload for xll,sl,sl once tss pering (red | soon bream by) weneve sl 2my and jilorej...
        </p>
      </div>
      <div className="flex items-start gap-3">
        <div className="mt-1 w-4 h-4 flex-shrink-0 rounded-full border-2 border-gray-500"></div>
        <p className="text-sm text-gray-500">
          Penetrating mor betcher: (text truncated)
        </p>
      </div>
    </div>
    <button className="mt-8 w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 transform hover:scale-[1.005]">
      GENERATE & EXECUTE
    </button>
  </div>
)

const ScanView = ({ toggleStates, handleToggleChange }: { toggleStates: Record<string, boolean>, handleToggleChange: (key: string, state: boolean) => void }) => {
  const vulnerabilityData = [
    { id: 1, critical: 'Unauth. API Endpoint', discoveries: '00%', status: '10' },
    { id: 2, critical: 'Unauth. API Endpoint', discoveries: '33%', status: '19' },
    { id: 3, critical: 'Outdated Testover', discoveries: '30%', status: '00' },
    { id: 4, critical: 'Outdated Template', discoveries: '33%', status: '08' },
    { id: 5, critical: 'AI-POC | protected API-poc. Gen', discoveries: '89%', status: '00' },
    { id: 11, critical: 'AI-POC | Craphles for CVE-2023-XXX', discoveries: '99%', status: '00' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
        <h2 className="text-sm font-semibold text-gray-400 tracking-wider">ACTIVE SIMMAN: bugburitypro.com</h2>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <span className="text-4xl font-extrabold text-red-500 tracking-tighter">187</span>
            <span className="text-lg text-gray-400 ml-1">Critical</span>
            <p className="text-xs text-gray-500 mt-[-4px]">Total Assets</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-extrabold text-yellow-500 tracking-tighter">32</span>
            <span className="text-lg text-gray-400 ml-1">High</span>
            <p className="text-xs text-gray-500 mt-[-4px]">7 Exploit PoC Generated</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
          <h3 className="font-bold text-lg text-white mb-4">VULNERABILITY VISUALIZER</h3>
          <div className="relative w-full h-80 bg-black rounded-lg p-4 border border-zinc-700 overflow-hidden shadow-inner shadow-zinc-700/50">
            <div className="text-center text-gray-600 pt-32">
              <Network size={40} className="mx-auto mb-2" /> 
              <p>Vulnerability Dependency Graph (Static Demo)</p>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">AI-ASSISTED ANALYSIS</h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-300">AI Insight Score</span>
              <span className="text-cyan-400 font-bold">97%</span>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40">
              GENERATE AI REPORT
            </button>
            <button className="w-full bg-zinc-700 text-gray-300 font-bold py-3 rounded-lg hover:bg-zinc-600 transition-colors">
              <Share2 size={16} className="inline mr-2" /> SHARE VIA TELEGRAM
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
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
            <Toggle 
              label="Subdomain Enumeration" 
              initialChecked={toggleStates['Subdomain Enumeration']}
              onChange={handleToggleChange}
            />
            <Toggle 
              label="API Discovery" 
              initialChecked={toggleStates['API Discovery']}
              onChange={handleToggleChange}
            />
            <Toggle 
              label="Containment Exposure x-Ray" 
              initialChecked={toggleStates['Containment Exposure x-Ray']}
              onChange={handleToggleChange}
            />
            <button className="w-full mt-4 bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 flex items-center justify-center gap-2">
              <X size={16} /> STOP SCAN
            </button>
          </InfoCard>
          <InfoCard title="SCAN LOG OUTPUT" showExpand={false}>
            <div className="h-40 overflow-y-auto bg-zinc-950 p-3 rounded text-xs font-mono text-gray-500 border border-zinc-800">
              <p>[INFO] Initiating API discovery...</p>
              <p>[SUCCESS] Found 43 endpoints.</p>
            </div>
          </InfoCard>
        </div>
      </div>
    </div>
  )
}

const PhishletView = ({ toggleStates, handleToggleChange }: { toggleStates: Record<string, boolean>, handleToggleChange: (key: string, state: boolean) => void }) => {
  const TemplateButton = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <button className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 p-2.5 rounded-lg text-gray-300 hover:bg-zinc-700 hover:border-cyan-500 transition-all duration-200 w-full text-sm">
      {icon} {text}
    </button>
  )
  
  const ActivityItem = ({ text }: { text: string }) => (
    <li className="text-sm text-gray-400 flex items-center gap-2">
      <span className="text-cyan-400 text-xs">●</span> {text}
    </li>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-bold text-gray-200 tracking-wide">ZENITH ADVHANCED TOOLR|KIT v3.0</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
          <h3 className="font-semibold text-white uppercase tracking-wider border-b border-zinc-700 pb-3 mb-4">CAMPAIGNION MANAGEMENT & SETUP</h3>
          <div className="space-y-3">
            <input type="text" placeholder="Campaign Name" className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm" />
            <input type="text" placeholder="Target Domain" className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm" />
            <input type="text" placeholder="Phishing URL" className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded text-white text-sm" />
          </div>
          <h4 className="font-semibold text-white pt-3 border-t border-zinc-700 mt-4">TEMPLATE LIBRARY</h4>
          <div className="grid grid-cols-2 gap-3">
            <TemplateButton icon={<Facebook size={16} className="text-blue-500" />} text="Social Media" />
            <TemplateButton icon={<Mail size={16} className="text-yellow-500" />} text="Email Login" />
            <TemplateButton icon={<Users size={16} className="text-cyan-400" />} text="HR System" />
            <TemplateButton icon={<KeyRound size={16} className="text-red-500" />} text="2FA Bypass" />
          </div>
          <button className="w-full mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 transform hover:scale-[1.005]">
            LAUNCH CAMPAIGN
          </button>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
          <h3 className="font-semibold text-white uppercase tracking-wider border-b border-zinc-700 pb-3 mb-4">REAL-TIME CAMPAIGN MONITORING</h3>
          <div className="bg-black border border-zinc-700 rounded-lg p-4 h-48 overflow-y-auto font-mono text-xs text-gray-400 shadow-inner">
            <p><span className="text-cyan-400">&gt;</span> pkibb_aemll --torgr Jib [tmget_&lt;= emal_vob</p>
            <p>[INFO] Campaign 'A3-Q4-Finance' started.</p>
            <p>[SENT] Email 1/200 to user@corp.com</p>
            <p>[CLICK] User opened link from 10.0.0.5</p>
            <p className="text-green-400"><span className="text-gray-500">cmnil n, cmnil-pin 'gmil.cm' b, emxkm jm lms</span></p>
          </div>
          <div className="bg-black border border-zinc-700 rounded-lg p-4 h-64 flex items-center justify-center shadow-inner">
            <BarChart2 size={40} className="text-gray-700" />
            <p className="text-gray-700 ml-2">(Static Radar Chart Placeholder)</p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
          <h3 className="font-semibold text-white uppercase tracking-wider border-b border-zinc-700 pb-3 mb-4">METRICS & CONTROL PANEL</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-300">
              <span>Targets Sent:</span>
              <span className="font-bold text-lg text-cyan-400">200</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Credentials Captured:</span>
              <span className="font-bold text-lg text-red-500">12</span>
            </div>
          </div>
          <div className="space-y-3 pt-2">
            <h4 className="text-sm text-gray-400 font-medium mb-2">RECENT ACTIVITY</h4>
            <Toggle 
              label="CAPTURED Credentials Captured"
              labelKey="CAPTURED Credentials Captured"
              initialChecked={toggleStates['CAPTURED Credentials Captured']}
              onChange={handleToggleChange}
            />
            <Toggle 
              label="Recent Activity"
              labelKey="Recent Activity"
              initialChecked={toggleStates['Recent Activity']}
              onChange={handleToggleChange}
            />
          </div>
          <ul className="space-y-1.5 pl-2">
            <ActivityItem text="User A captured (2FA bypass)" />
            <ActivityItem text="User B captured (standard)" />
            <ActivityItem text="Link opened (IP 192.168.1.5)" />
          </ul>
          <button className="w-full mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 flex items-center justify-center gap-2">
            <StopCircle size={18} /> STOP CAMPAIGN
          </button>
        </div>
      </div>
    </div>
  )
}

const PayloadAnalysisView = ({ toggleStates, handleToggleChange, analysisType, setAnalysisType }: { toggleStates: Record<string, boolean>, handleToggleChange: (key: string, state: boolean) => void, analysisType: string, setAnalysisType: (type: string) => void }) => {
  const analysisResults = {
    fobne: [
      { name: "android_keylogger.pk", status: "SUCCESS", success: true },
      { name: "Sandbox Evasion", status: "SUCCESS", success: true },
      { name: "Min-o@sffil.exe", status: "SUCCESS", success: true },
    ],
    builds: [
      { name: "Target-A (DA/CD) ISR", status: "SUCCESS", success: true },
      { name: "Target-B (Offline)", status: "FAILED", success: false },
      { name: "win.exe (OnLine)", status: "SUCCESS", success: true },
    ]
  }

  const ResultItem = ({ name, status, success }: { name: string, status: string, success: boolean }) => (
    <div className="flex justify-between items-center bg-zinc-800 p-2.5 rounded-md border border-zinc-700">
      <span className="text-sm text-gray-300 font-mono">{name}</span>
      <span className={`text-xs font-bold ${success ? 'text-green-500' : 'text-red-500'}`}>{status}</span>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-bold text-gray-200 tracking-wide">ZEALTH PAYLOAD ANALYZER v3.0</h2>
        <div className="flex items-center gap-6 text-sm">
          <span className="text-gray-400">NODE: <span className="text-gray-200 font-medium">ZG-A3</span></span>
          <span className="flex items-center gap-2 text-cyan-400 font-medium">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            ENCRYPTED (AES-256)
          </span>
          <span className="text-gray-400">STATUS: <span className="text-green-500 font-medium">ONLINE</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
          <h3 className="font-semibold text-white uppercase tracking-wider border-b border-zinc-700 pb-3 mb-4">ANALYSIS CONFIGURATION</h3>
          
          <div className="p-4 bg-zinc-800 border-dashed border-2 border-zinc-600 rounded-lg text-center cursor-pointer hover:border-cyan-500 transition-colors">
            <UploadCloud size={32} className="mx-auto text-gray-500 mb-2" />
            <p className="text-sm text-gray-400">Drop payload file here or click</p>
          </div>

          <InfoCard title="Analysis Type" showExpand={false} className="!bg-zinc-800">
            <div className="grid grid-cols-2 gap-2">
              <SelectButton text="Android" active={analysisType === 'Android'} onClick={() => setAnalysisType('Android')} />
              <SelectButton text="macOS" active={analysisType === 'macOS'} onClick={() => setAnalysisType('macOS')} />
              <SelectButton text="Windows EXE" active={analysisType === 'Windows EXE'} onClick={() => setAnalysisType('Windows EXE')} />
              <SelectButton text="Linux" active={analysisType === 'Linux'} onClick={() => setAnalysisType('Linux')} />
              <SelectButton text="Android APK" active={analysisType === 'Android APK'} onClick={() => setAnalysisType('Android APK')} />
            </div>
          </InfoCard>

          <InfoCard title="Threat Indicators" showExpand={false} className="!bg-zinc-800">
            <Toggle label="Keylogger Detected" labelKey="Keylogger Detected" initialChecked={toggleStates['Keylogger Detected']} onChange={handleToggleChange} />
            <Toggle label="Persistence Attempt" labelKey="Persistence Attempt" initialChecked={toggleStates['Persistence Attempt']} onChange={handleToggleChange} />
            <Toggle label="Webcam Access" labelKey="Webcam Access" initialChecked={toggleStates['Webcam Access']} onChange={handleToggleChange} />
            <Toggle label="File Exfiltration" labelKey="File Exfiltration" initialChecked={toggleStates['File Exfiltration']} onChange={handleToggleChange} />
          </InfoCard>

          <InfoCard title="Detected Evasion Techniques" showExpand={false} className="!bg-zinc-800">
            <Toggle label="AV Evasion" labelKey="AV Evasion" initialChecked={toggleStates['AV Evasion']} onChange={handleToggleChange} />
            <Toggle label="Sandbox Check" labelKey="Sandbox Check" initialChecked={toggleStates['Sandbox Check']} onChange={handleToggleChange} />
            <Toggle label="Polymorphic Engine" labelKey="Polymorphic Engine" initialChecked={toggleStates['Polymorphic Engine']} onChange={handleToggleChange} />
          </InfoCard>

          <button className="w-full mt-4 bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition-colors duration-200 shadow-lg shadow-cyan-600/40">
            ANALYZE PAYLOAD
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-4">
          <h3 className="font-semibold text-white uppercase tracking-wider border-b border-zinc-700 pb-3 mb-4">STATIC & BEHAVIORAL ANALYSIS</h3>
          <div className="bg-black border border-zinc-700 rounded-lg p-4 h-full overflow-y-auto font-mono text-xs text-gray-400 shadow-inner">
            <p><span className="text-cyan-400">&gt;</span> analyzer --type {analysisType}</p>
            <p><span className="text-cyan-400">&gt;</span> target: uploaded_file.exe</p>
            <p><span className="text-gray-500">...</span></p>
            <p><span className="text-blue-400">[INFO]</span> Initializing obfuscation analysis...</p>
            <p><span className="text-blue-400">[INFO]</span> Applying deobfuscation (Pydeobf, UPX)...</p>
            <p><span className="text-yellow-400">[WARN]</span> Found packed section 'UPX1'.</p>
            <p><span className="text-green-400">[SUCCESS]</span> Deobfuscation complete.</p>
            <p><span className="text-gray-500">...</span></p>
            <p><span className="text-blue-400">[TASK]</span> Checking for persistence registry keys...</p>
            <p><span className="text-red-500">[CRITICAL]</span> Found 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' entry.</p>
            <p><span className="text-blue-400">[TASK]</span> Checking for sandbox evasion (vmcheck.dll)...</p>
            <p><span className="text-green-400">[SUCCESS]</span> No common sandbox evasion found.</p>
            <p><span className="text-gray-500">...</span></p>
            <p><span className="text-blue-400">[INFO]</span> Scanning for known malware signatures...</p>
            <p><span className="text-green-400">[SUCCESS]</span> No exact signatures found.</p>
            <p><span className="text-blue-400">[INFO]</span> ANALYSIS COMPLETE: 192.168.1.1</p>
            <p className="text-white mt-2">OUTPUT: Clean executable file, 1.2MB</p>
          </div>
          <button className="w-full mt-2 bg-zinc-700 text-gray-300 font-bold py-3 rounded-lg hover:bg-zinc-600 transition-colors">
            EXPORT ANALYSIS
          </button>
        </div>

        <div className="space-y-6">
          <InfoCard title="Risk Assessment" showExpand={false}>
            <div className="flex flex-col items-center">
              <ProgressCircle percentage={90} colorClass="text-red-500" />
              <span className="text-lg font-bold text-red-500 mt-2">HIGH RISK</span>
            </div>
          </InfoCard>

          <InfoCard title="Recent Analysis" showExpand={false}>
            <div className="space-y-2">
              {analysisResults.fobne.map(item => <ResultItem key={item.name} {...item} />)}
            </div>
          </InfoCard>
          
          <InfoCard title="Recent Detections" showExpand={false}>
            <div className="space-y-2">
              <button className="w-full bg-zinc-800 text-gray-300 p-2.5 rounded-md text-sm text-left hover:bg-zinc-700">
                <AlertTriangle size={16} className="inline mr-2 text-yellow-400" /> GENERATE PHISHING EMAIL
              </button>
              <button className="w-full bg-red-600 text-white p-2.5 rounded-md text-sm font-medium hover:bg-red-700 shadow-lg shadow-red-600/30">
                GENERATE PHISLODOS
              </button>
            </div>
          </InfoCard>
          
          <InfoCard title="Active Sandboxes" showExpand={false}>
            <div className="space-y-2">
              {analysisResults.builds.map(item => <ResultItem key={item.name} {...item} />)}
            </div>
          </InfoCard>
          
          <button className="w-full mt-4 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 flex items-center justify-center gap-2">
            <StopCircle size={18} /> STOP ALL ANALYSES
          </button>
        </div>
      </div>
    </div>
  )
}

const LoginScreen = ({ setIsLoggedIn }: { setIsLoggedIn: (loggedIn: boolean) => void }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (username === 'Zeshu' && password === 'Zeshu') {
      setIsLoggedIn(true)
    } else {
      setError('Invalid credentials. Check Username and Password.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-8 space-y-6 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-cyan-500/10">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <Zap size={36} className="text-cyan-400" />
          <h1 className="text-3xl font-extrabold text-white tracking-widest">ZENITH</h1>
          <p className="text-sm text-gray-500 uppercase">ACCESS CONTROL SYSTEM</p>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-10 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              required
            />
            <Lock size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium p-2 bg-red-900/20 border border-red-700 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-bold rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200 shadow-lg shadow-red-600/40 transform hover:scale-[1.005]"
          >
            ACCESS TERMINAL
          </button>
        </form>

        <div className="text-center text-sm space-y-2 pt-4 border-t border-zinc-800">
          <p className="text-gray-500">Forgotten Key? | Request Support</p>
          <p className="text-xs text-gray-600">Zenith Cybersecurity Framework v3.0</p>
        </div>
      </div>
    </div>
  )
}

const Sidebar = ({ activeItem, setActiveItem }: { activeItem: string, setActiveItem: (item: string) => void }) => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Scan Targets', icon: <ShieldCheck size={20} /> },
    { name: 'AI Chat', icon: <Bot size={20} /> },
    { name: 'Scans', icon: <ScanLine size={20} /> },
    { name: 'Phishlet', icon: <Fish size={20} /> }, 
    { name: 'Payloads', icon: <FileWarning size={20} /> },
    { name: 'Records', icon: <FileText size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ]

  return (
    <aside className="w-60 bg-zinc-900 flex flex-col h-screen p-4 border-r border-zinc-800 shadow-2xl">
      <div className="flex items-center gap-2 px-2 mb-8 text-cyan-400">
        <Zap size={24} className="text-red-500" />
        <span className="text-xl font-extrabold text-gray-100 tracking-widest">ZENITH</span>
      </div>
      <nav className="flex-col space-y-1">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setActiveItem(item.name)
            }}
            className={`
              flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
              ${activeItem === item.name
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-gray-400 hover:bg-zinc-800 hover:text-white'
              }
            `}
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}

const RightSidebar = ({ toggleStates, handleToggleChange }: { toggleStates: Record<string, boolean>, handleToggleChange: (key: string, state: boolean) => void }) => {
  return (
    <aside className="w-80 bg-zinc-900 flex flex-col h-screen p-6 gap-6 border-l border-zinc-800 overflow-y-auto shadow-2xl">
      <InfoCard title="COMMANDS & OPTIONS">
        <Toggle 
          label="Custom Payload Generation" 
          labelKey="Custom Payload Generation"
          initialChecked={toggleStates['Custom Payload Generation']}
          onChange={handleToggleChange}
        />
        <Toggle 
          label="Explain Attack Methodologies" 
          labelKey="Explain Attack Methodologies"
          initialChecked={toggleStates['Explain Attack Methodologies']}
          onChange={handleToggleChange}
        />
        <Toggle 
          label="Real-Time Exploit Generation" 
          labelKey="Real-Time Exploit Generation"
          initialChecked={toggleStates['Real-Time Exploit Generation']}
          onChange={handleToggleChange}
        />
      </InfoCard>

      <InfoCard title="API SETTINGS" showExpand={false}>
        <Toggle 
          label="No externals API requirments" 
          labelKey="No externals API requirments"
          initialChecked={toggleStates['No externals API requirments']}
          onChange={handleToggleChange}
        />
        <Toggle 
          label="Use External APIs" 
          labelKey="Use External APIs"
          initialChecked={toggleStates['Use External APIs']}
          onChange={handleToggleChange}
        />
      </InfoCard>
      
      <InfoCard title="KNOWLEDGE BASE" showExpand={false}>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-zinc-800 border border-zinc-700 p-2 rounded-md text-sm text-center text-gray-400 hover:bg-zinc-700 transition">CVE Database</div>
          <div className="bg-zinc-800 border border-zinc-700 p-2 rounded-md text-sm text-center text-gray-400 hover:bg-zinc-700 transition">MITRE ATT&CK</div>
          <div className="bg-zinc-800 border border-zinc-700 p-2 rounded-md text-sm text-center text-gray-400 hover:bg-zinc-700 transition">Payload Vault</div>
          <div className="bg-zinc-800 border border-zinc-700 p-2 rounded-md text-sm text-center text-gray-400 hover:bg-zinc-700 transition">Zenith Docs</div>
        </div>
      </InfoCard>

      <InfoCard title="REAL-TIME STATUS" showExpand={false}>
        <div className="flex flex-col items-center justify-center space-y-2">
          <ProgressCircle percentage={98} />
          <span className="text-sm text-gray-400 mt-2">SYSTEM STABILITY</span>
        </div>
      </InfoCard>
    </aside>
  )
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeItem, setActiveItem] = useState('Payloads')
  
  const [toggleStates, setToggleStates] = useState({
    'Custom Payload Generation': true,
    'Explain Attack Methodologies': false,
    'Real-Time Exploit Generation': true,
    'No externals API requirments': false,
    'Use External APIs': true,
    'Subdomain Enumeration': true,
    'API Discovery': true,
    'Containment Exposure x-Ray': false,
    'CAPTURED Credentials Captured': true,
    'Recent Activity': true,
    'Keylogger Detected': true,
    'Persistence Attempt': true,
    'Webcam Access': false,
    'File Exfiltration': true,
    'AV Evasion': true,
    'Sandbox Check': true,
    'Polymorphic Engine': false,
  })

  const [analysisType, setAnalysisType] = useState('Windows EXE')

  const handleToggleChange = (label: string, newState: boolean) => {
    setToggleStates(prev => ({
      ...prev,
      [label]: newState
    }))
    console.log(`Toggle '${label}' is now: ${newState}`)
  }
  
  const renderMainContent = () => {
    switch (activeItem) {
      case 'AI Chat':
        return <ExploitAssistantView />
      case 'Scans':
        return <ScanView toggleStates={toggleStates} handleToggleChange={handleToggleChange} />
      case 'Phishlet':
        return <PhishletView toggleStates={toggleStates} handleToggleChange={handleToggleChange} />
      case 'Payloads':
        return <PayloadAnalysisView 
                  toggleStates={toggleStates} 
                  handleToggleChange={handleToggleChange}
                  analysisType={analysisType}
                  setAnalysisType={setAnalysisType} 
                />
      default:
        return (
          <div className="flex-1 p-8 text-center pt-20">
            <h2 className="text-3xl font-bold text-gray-600">{activeItem} View Coming Soon...</h2>
          </div>
        )
    }
  }

  if (!isLoggedIn) {
    return <LoginScreen setIsLoggedIn={setIsLoggedIn} />
  }

  return (
    <div className="flex h-screen bg-black text-gray-100 font-sans overflow-hidden">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <main className="flex-1 p-8 overflow-y-auto">
        {renderMainContent()}
      </main>
      
      {activeItem !== 'Phishlet' && activeItem !== 'Payloads' && (
        <RightSidebar 
          toggleStates={toggleStates} 
          handleToggleChange={handleToggleChange}
        />
      )}
    </div>
  )
}