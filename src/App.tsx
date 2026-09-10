import './App.css';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import { TOOLS } from './data/tools';

// Formatters
import JsonFormatter from './components/tools/formatters/JsonFormatter';
import HtmlFormatter from './components/tools/formatters/HtmlFormatter';
import CssFormatter from './components/tools/formatters/CssFormatter';
import SqlFormatter from './components/tools/formatters/SqlFormatter';

// Minifiers
import JsonMinifier from './components/tools/minifiers/JsonMinifier';
import HtmlMinifier from './components/tools/minifiers/HtmlMinifier';
import CssMinifier from './components/tools/minifiers/CssMinifier';
import JsMinifier from './components/tools/minifiers/JsMinifier';

// Encoders
import Base64Encoder from './components/tools/encoders/Base64Encoder';
import UrlEncoder from './components/tools/encoders/UrlEncoder';
import HtmlEntityEncoder from './components/tools/encoders/HtmlEntityEncoder';
import JwtDecoder from './components/tools/encoders/JwtDecoder';

// Generators
import UuidGenerator from './components/tools/generators/UuidGenerator';
import JsonToCsv from './components/tools/generators/JsonToCsv';
import CsvToJson from './components/tools/generators/CsvToJson';
import LoremIpsum from './components/tools/generators/LoremIpsum';

// Utilities
import HashGenerator from './components/tools/utilities/HashGenerator';
import CaseConverter from './components/tools/utilities/CaseConverter';
import WordCounter from './components/tools/utilities/WordCounter';
import DiffChecker from './components/tools/utilities/DiffChecker';

export default function App() {
  const [activeToolId, setActiveToolId] = useState<string | null>('json-formatter');

  const renderTool = () => {
    switch (activeToolId) {
      case 'json-formatter': return <JsonFormatter />;
      case 'html-formatter': return <HtmlFormatter />;
      case 'css-formatter': return <CssFormatter />;
      case 'sql-formatter': return <SqlFormatter />;

      case 'json-minifier': return <JsonMinifier />;
      case 'html-minifier': return <HtmlMinifier />;
      case 'css-minifier': return <CssMinifier />;
      case 'js-minifier': return <JsMinifier />;

      case 'base64-encoder': return <Base64Encoder />;
      case 'url-encoder': return <UrlEncoder />;
      case 'html-entity': return <HtmlEntityEncoder />;
      case 'jwt-decoder': return <JwtDecoder />;

      case 'uuid-generator': return <UuidGenerator />;
      case 'json-to-csv': return <JsonToCsv />;
      case 'csv-to-json': return <CsvToJson />;
      case 'lorem-ipsum': return <LoremIpsum />;

      case 'hash-generator': return <HashGenerator />;
      case 'case-converter': return <CaseConverter />;
      case 'word-counter': return <WordCounter />;
      case 'diff-checker': return <DiffChecker />;

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOOLS.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className="p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 cursor-pointer transition shadow-sm"
              >
                <h2 className="font-bold text-slate-900">{tool.name}</h2>
                <p className="text-xs text-slate-500 mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <Layout activeToolId={activeToolId} onSelectTool={setActiveToolId}>
      {renderTool()}
    </Layout>
  );
}
