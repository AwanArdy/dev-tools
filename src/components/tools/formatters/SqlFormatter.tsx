import { useState } from 'react';
import { format } from 'sql-formatter';
import Editor from '../../common/Editor';

export default function SqlFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      const formatted = format(input, { language: 'sql', keywordCase: 'upper' });
      setOutput(formatted);
    } catch {
      setOutput(input);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">SQL Formatter</h1>
        <p className="text-sm text-slate-500 mt-1">Rapikan kueri SQL dan kapitalisasi keyword otomatis.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Editor label="Input SQL" value={input} onChange={setInput} placeholder="select * from users where id = 1" />
        <Editor label="Formatted Output" value={output} readOnly placeholder="Hasil akan muncul di sini..." />
      </div>
      <button onClick={handleFormat} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
        Format SQL
      </button>
    </div>
  );
}
