import React, { useState } from 'react';

interface EditorProps {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function Editor({
  label,
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  rows = 10,
}: EditorProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <div className="flex gap-2">
          {value && !readOnly && onChange && (
            <button
              onClick={() => onChange('')}
              className="text-xs text-slate-500 hover:text-red-600 font-medium px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition"
            >
              Clear
            </button>
          )}
          {value && (
            <button
              onClick={handleCopy}
              className="text-xs text-slate-700 font-medium px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 transition"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange && onChange(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        rows={rows}
        className={`w-full p-3 font-mono text-sm rounded-lg border focus:outline-none transition resize-y ${
          readOnly
            ? 'bg-slate-50 text-slate-800 border-slate-200'
            : 'bg-white text-slate-900 border-slate-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500'
        }`}
      />
    </div>
  );
}
