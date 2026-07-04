// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - Scoped Review Pulse Three
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CheckCircle2, Cpu, Database, RadioTower, RefreshCw } from "lucide-react";


export type StatusUtilityScopedReviewPulseThreeActionId = "refresh-status-1";

export interface StatusUtilityScopedReviewPulseThreeProps {
  actions?: Partial<Record<StatusUtilityScopedReviewPulseThreeActionId, () => void>>;

}

export function StatusUtilityScopedReviewPulseThree({ actions }: StatusUtilityScopedReviewPulseThreeProps) {
  return (
    <>
      {/* Utility Board Container */}
      <main className="w-full max-w-[600px] bg-surface-container-lowest border border-outline-variant rounded-lg shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <header className="px-gutter py-3 border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Scoped Review Pulse Three</h1>
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary-container inline-block animate-pulse"></span>
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Live</span>
      </div>
      </header>
      {/* Main Content Area */}
      <div className="p-gutter flex flex-col gap-component-gap-md">
      {/* Status Cards (Bento style grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-unit">
      {/* System Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">System</span>
      <Cpu className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-body-md text-body-md text-primary font-medium">Optimal</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">CPU: 12% | RAM: 4.2GB</div>
      </div>
      </div>
      {/* Data Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Data Source</span>
      <Database className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-body-md text-body-md text-primary font-medium">Synced</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Latency: 14ms</div>
      </div>
      </div>
      {/* Network Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-3 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Network</span>
      <RadioTower className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-body-md text-body-md text-primary font-medium">Connected</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">100% Packets received</div>
      </div>
      </div>
      </div>
      {/* Control Section */}
      <div className="bg-surface border border-outline-variant rounded p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Data Sync Engine</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant" id="last-updated">Last Updated: Just now</span>
      </div>
      <div className="flex items-center gap-4 w-full sm:w-auto">
      {/* Toggle Switch */}
      <label className="flex items-center cursor-pointer gap-2">
      <div className="relative">
      <input defaultChecked={true} className="sr-only" id="engine-toggle" type="checkbox" />
      <div className="block bg-surface-tint w-10 h-6 rounded-full transition-colors duration-200 ease-in-out" id="toggle-bg"></div>
      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-4" id="toggle-dot"></div>
      </div>
      <span className="font-label-md text-label-md text-on-surface" id="toggle-label">Ready</span>
      </label>
      {/* Refresh Button */}
      <button className="flex-1 sm:flex-none bg-primary text-on-primary font-label-md text-label-md px-3 py-2 rounded flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors active:scale-95" id="refresh-btn" type="button" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
      <RefreshCw  id="refresh-icon" className="text-[16px]" aria-hidden={true} focusable="false" />
                              Refresh Status
                          </button>
      </div>
      </div>
      {/* Feedback Area */}
      <div className="mt-2 flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded px-3 py-2">
      <CheckCircle2 className="text-[16px] text-secondary" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm text-on-surface">All systems operational. Ready for next cycle.</span>
      </div>
      </div>
      </main>
      
    </>
  );
}
