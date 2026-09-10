import React, { useState } from 'react';

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState('');

  const loremText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const handleGenerate = () => {
    const result = Array.from({ length: paragraphs }, () => loremText).join('\n\n');
    setOutput(result);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Lorem Ipsum Generator</h1>
        <p className="text-sm text-slate-500 mt-1">Generate teks dummy untuk kebutuhan layout dan mockup.</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="text-sm font-medium text-slate-700">Jumlah Paragraf:</label>
        <input
          type="number"
          min={1}
          max={20}
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
          className="w-20 px-3 py-1.5 border border-slate-300 rounded-md text-sm"
        />
        <button onClick={handleGenerate} className="px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-800 transition">
          Generate Teks
        </button>
      </div>
      <textarea
        value={output}
        readOnly
        rows={10}
        className="w-full p-3 font-sans text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none"
      />
    </div>
  );
}
