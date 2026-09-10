import { useState } from 'react';
import Editor from '../../common/Editor';
import { ArrowLeftRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  // UTF-8 Safe Base64 Encoding
  const handleEncode = () => {
    if (!input) {
      setOutput('');
      setError(null);
      return;
    }
    try {
      const bytes = new TextEncoder().encode(input);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      setOutput(btoa(binary));
      setError(null);
    } catch {
      setError('Gagal meng-encode teks.');
    }
  };

  // UTF-8 Safe Base64 Decoding
  const handleDecode = () => {
    if (!input) {
      setOutput('');
      setError(null);
      return;
    }
    try {
      const cleaned = input.trim();
      const binary = atob(cleaned);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      setOutput(new TextDecoder().decode(bytes));
      setError(null);
    } catch {
      setError('String Base64 tidak valid.');
    }
  };

  const handleSampleEncode = () => {
    setInput('FormatDev Tools - Platform Utilitas Developer Indonesia 🚀');
    setError(null);
  };

  const handleSampleDecode = () => {
    setInput('Rm9ybWF0RGV2IFRvb2xzIC0gUGxhdGZvcm0gVXRpbGl0YXMgRGV2ZWxvcGVyIEluZG9uZXNpYSA=');
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
            Base64 Encoder / Decoder
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Encode teks biasa (termasuk emoji & UTF-8) ke Base64 dan decode kembali secara aman.
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
          label="Input Text / Base64"
          value={input}
          onChange={(val) => {
            setInput(val);
            setError(null);
          }}
          placeholder="Ketik teks biasa untuk di-encode, atau string Base64 untuk di-decode..."
          onSample={handleSampleEncode}
          sampleLabel="Sample Text"
          extraActions={
            <button
              type="button"
              onClick={handleSampleDecode}
              className="text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md font-medium transition"
            >
              Sample Base64
            </button>
          }
        />
        <Editor
          label="Output Result"
          value={output}
          readOnly
          placeholder="Hasil encode / decode akan muncul di sini..."
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
          Encode to Base64
        </button>
        <button
          type="button"
          onClick={handleDecode}
          className="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-50 transition shadow-xs active:scale-[0.98]"
        >
          Decode Base64
        </button>
      </div>
    </div>
  );
}
