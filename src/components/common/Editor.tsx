import { useState, type ReactNode } from 'react';
import { Copy, Check, Trash2, Sparkles } from 'lucide-react';

interface EditorProps {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  rows?: number;
  onSample?: () => void;
  sampleLabel?: string;
  extraActions?: ReactNode;
  statusBadge?: ReactNode;
  showStats?: boolean;
}

export default function Editor({
  label,
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  rows = 10,
  onSample,
  sampleLabel = 'Sample Input',
  extraActions,
  statusBadge,
  showStats = true,
}: EditorProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async (): Promise<void> => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lineCount = value ? value.split('\n').length : 0;
  const charCount = value.length;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700">{label}</label>
          {statusBadge}
        </div>
        <div className="flex items-center gap-1.5">
          {extraActions}
          {onSample && !readOnly && (
            <button
              type="button"
              onClick={onSample}
              className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-md font-medium transition border border-indigo-200"
              title="Isi dengan contoh data"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>{sampleLabel}</span>
            </button>
          )}
          {value && !readOnly && onChange && (
            <button
              type="button"
              onClick={() => onChange('')}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 bg-slate-100 hover:bg-rose-50 px-2 py-1 rounded-md font-medium transition border border-slate-200 hover:border-rose-200"
              title="Bersihkan teks"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
          {value && (
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md border transition ${
                copied
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300 shadow-xs'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs transition-all focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
        <textarea
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange && onChange(e.target.value)}
          readOnly={readOnly}
          placeholder={placeholder}
          rows={rows}
          spellCheck={false}
          className={`w-full p-3.5 font-mono text-sm leading-relaxed transition resize-y focus:outline-none ${
            readOnly
              ? 'bg-slate-50/80 text-slate-800 cursor-default'
              : 'bg-white text-slate-900 placeholder:text-slate-400'
          }`}
        />
        {showStats && (
          <div className="bg-slate-100/80 border-t border-slate-200 px-3 py-1 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>{readOnly ? 'OUTPUT' : 'INPUT'}</span>
            <div className="flex gap-3">
              <span>{lineCount} baris</span>
              <span>{charCount} karakter</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
