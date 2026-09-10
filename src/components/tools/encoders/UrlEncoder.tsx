import { useState } from 'react';
import Editor from '../../common/Editor';
import { Link, CheckCircle2, AlertCircle } from 'lucide-react';

export default function UrlEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    if (!input) {
      setOutput('');
      setError(null);
      return;
    }
    try {
      setOutput(encodeURIComponent(input));
      setError(null);
    } catch {
      setError('Gagal meng-encode URL.');
    }
  };

  const handleDecode = () => {
    if (!input) {
      setOutput('');
      setError(null);
      return;
    }
    try {
      setOutput(decodeURIComponent(input.replace(/\+/g, ' ')));
      setError(null);
    } catch {
      setError('String URL encoded tidak valid.');
    }
  };

  const handleSample = () => {
    setInput('https://formatdev.com/search?q=developer tools&category=encoders & decoders#section');
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Link className="w-6 h-6 text-indigo-600" />
            URL Encoder / Decoder
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Encode karakter khusus dalam URL query string dan decode URL encoded secara akurat.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Editor
          label="Input String"
          value={input}
          onChange={(val) => {
            setInput(val);
            setError(null);
          }}
          placeholder="Masukkan teks URL biasa atau encoded string..."
          onSample={handleSample}
          sampleLabel="Sample URL"
        />
        <Editor
          label="Output Result"
          value={output}
          readOnly
          placeholder="Hasil URL encode / decode akan tampil di sini..."
          statusBadge={
            output && !error ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3" /> Ready
              </span>
            ) : null
          }
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={handleEncode}
          className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition shadow-sm active:scale-[0.98]"
        >
          URL Encode
        </button>
        <button
          type="button"
          onClick={handleDecode}
          className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-50 transition shadow-xs active:scale-[0.98]"
        >
          URL Decode
        </button>
      </div>
    </div>
  );
}
