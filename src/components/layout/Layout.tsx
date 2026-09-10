import { useState, type ReactNode } from 'react';
import { CATEGORIES, TOOLS } from '../../data/tools';
import type { Tool } from '../../types';

interface LayoutProps {
  activeToolId: string | null;
  onSelectTool: (id: string | null) => void;
  children: ReactNode;
}

export default function Layout({ activeToolId, onSelectTool, children }: LayoutProps) {
  const [search, setSearch] = useState<string>('');

  const filteredTools: Tool[] = TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen bg-slate-50 text-slate-800 font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-14 shrink-0 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onSelectTool(null)}>
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xs">
            F
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">FormatDev</span>
        </div>

        <div className="w-64">
          <input
            type="text"
            placeholder="Cari fitur..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className="w-full text-xs px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-md focus:outline-none focus:bg-white focus:border-slate-400 transition"
          />
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar Navigasi */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 hidden md:block shrink-0 overflow-y-auto overscroll-contain">
          <div className="space-y-6">
            {CATEGORIES.map((cat) => {
              const catTools = filteredTools.filter((t) => t.category === cat.id);
              if (catTools.length === 0) return null;

              return (
                <div key={cat.id}>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {cat.name}
                  </h3>
                  <ul className="space-y-1">
                    {catTools.map((tool) => (
                      <li key={tool.id}>
                        <button
                          onClick={() => onSelectTool(tool.id)}
                          className={`w-full text-left text-sm px-2.5 py-1.5 rounded-md transition ${
                            activeToolId === tool.id
                              ? 'bg-slate-900 text-white font-medium'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          {tool.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Area Utama */}
        <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 md:p-8 max-w-5xl mx-auto w-full">{children}</main>
      </div>
    </div>
  );
}
