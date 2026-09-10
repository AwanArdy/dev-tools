import { useState } from 'react';
import Editor from '../../common/Editor';

export default function CaseConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toUpper = () => setOutput(input.toUpperCase());
  const toLower = () => setOutput(input.toLowerCase());
  const toCamel = () =>
    setOutput(
      input
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    );
  const toKebab = () =>
    setOutput(
      input
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    );
  const toSnake = () =>
    setOutput(
      input
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase()
    );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Case Converter</h1>
        <p className="text-sm text-slate-500 mt-1">Ubah casing teks menjadi UPPERCASE, camelCase, kebab-case, dll.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input Text" value={input} onChange={setInput} />
        <Editor label="Converted Output" value={output} readOnly />
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={toUpper} className="px-3 py-1.5 bg-slate-100 border border-slate-300 text-xs font-medium rounded hover:bg-slate-200">UPPERCASE</button>
        <button onClick={toLower} className="px-3 py-1.5 bg-slate-100 border border-slate-300 text-xs font-medium rounded hover:bg-slate-200">lowercase</button>
        <button onClick={toCamel} className="px-3 py-1.5 bg-slate-100 border border-slate-300 text-xs font-medium rounded hover:bg-slate-200">camelCase</button>
        <button onClick={toKebab} className="px-3 py-1.5 bg-slate-100 border border-slate-300 text-xs font-medium rounded hover:bg-slate-200">kebab-case</button>
        <button onClick={toSnake} className="px-3 py-1.5 bg-slate-100 border border-slate-300 text-xs font-medium rounded hover:bg-slate-200">snake_case</button>
      </div>
    </div>
  );
}
