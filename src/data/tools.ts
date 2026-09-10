import type { Category, Tool } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'formatters', name: 'Formatters & Prettiers', desc: 'Rapikan dan rapihkan sintaks kode', iconName: 'Code' },
  { id: 'minifiers', name: 'Minifiers & Compactors', desc: 'Kompres kode untuk ukuran file lebih kecil', iconName: 'Minimize2' },
  { id: 'encoders', name: 'Encoders & Decoders', desc: 'Encode dan decode data aman & URL', iconName: 'Binary' },
  { id: 'generators', name: 'Generators & Converters', desc: 'Hasilkan UUID, Lorem Ipsum, & konversi data', iconName: 'Wand2' },
  { id: 'utilities', name: 'Text & Hash Utilities', desc: 'Analisis teks, komparasi diff & cryptographic hash', iconName: 'Terminal' },
];

export const TOOLS: Tool[] = [
  // Formatters
  { id: 'json-formatter', category: 'formatters', name: 'JSON Formatter', desc: 'Rapikan dan validasi sintaks JSON dengan indentasi rapi', iconName: 'FileJson', tags: ['json', 'pretty', 'format'] },
  { id: 'html-formatter', category: 'formatters', name: 'HTML Formatter', desc: 'Format dan rapikan hirarki elemen markup HTML', iconName: 'Code2', tags: ['html', 'format', 'markup'] },
  { id: 'css-formatter', category: 'formatters', name: 'CSS Formatter', desc: 'Format stylesheet CSS agar terstruktur dan mudah dibaca', iconName: 'Palette', tags: ['css', 'style', 'format'] },
  { id: 'sql-formatter', category: 'formatters', name: 'SQL Formatter', desc: 'Rapikan kueri SQL dan kapitalisasi keyword database', iconName: 'Database', tags: ['sql', 'query', 'database'] },

  // Minifiers
  { id: 'json-minifier', category: 'minifiers', name: 'JSON Minifier', desc: 'Hapus spasi dan newline pada JSON untuk menghemat bandwidth', iconName: 'FileJson', tags: ['json', 'minify', 'compress'] },
  { id: 'html-minifier', category: 'minifiers', name: 'HTML Minifier', desc: 'Kompres kode HTML dengan mengeliminasi spasi dan komentar', iconName: 'FileCode', tags: ['html', 'minify', 'compress'] },
  { id: 'css-minifier', category: 'minifiers', name: 'CSS Minifier', desc: 'Kompres stylesheet CSS menjadi baris tunggal ringkas', iconName: 'Scissors', tags: ['css', 'minify', 'compress'] },
  { id: 'js-minifier', category: 'minifiers', name: 'JS Minifier', desc: 'Minifikasi sintaks JavaScript sederhana dan hapus komentar', iconName: 'FileSpreadsheet', tags: ['js', 'javascript', 'minify'] },

  // Encoders
  { id: 'base64-encoder', category: 'encoders', name: 'Base64 Encoder/Decoder', desc: 'Encode teks biasa atau UTF-8 ke Base64 dan sebaliknya', iconName: 'ShieldCheck', tags: ['base64', 'encode', 'decode'] },
  { id: 'url-encoder', category: 'encoders', name: 'URL Encoder/Decoder', desc: 'Encode dan decode karakter khusus untuk URL query/parameter', iconName: 'Link', tags: ['url', 'uri', 'encode'] },
  { id: 'html-entity', category: 'encoders', name: 'HTML Entity Encoder', desc: 'Ubah karakter spesial menjadi HTML Entities aman (&amp;, &lt;, dll)', iconName: 'Braces', tags: ['html', 'entity', 'encode'] },
  { id: 'jwt-decoder', category: 'encoders', name: 'JWT Decoder', desc: 'Bongkar & inspeksi isi Header, Payload, serta Expire date JWT token', iconName: 'KeyRound', tags: ['jwt', 'token', 'auth', 'decode'] },

  // Generators
  { id: 'uuid-generator', category: 'generators', name: 'UUID Generator', desc: 'Generate string UUID v4 secara acak (tunggal atau banyak)', iconName: 'Fingerprint', tags: ['uuid', 'guid', 'generate'] },
  { id: 'json-to-csv', category: 'generators', name: 'JSON to CSV', desc: 'Konversi data array object JSON menjadi format tabel CSV', iconName: 'FileSpreadsheet', tags: ['json', 'csv', 'convert'] },
  { id: 'csv-to-json', category: 'generators', name: 'CSV to JSON', desc: 'Konversi tabel CSV menjadi struktur array JSON', iconName: 'FileJson', tags: ['csv', 'json', 'convert'] },
  { id: 'lorem-ipsum', category: 'generators', name: 'Lorem Ipsum Generator', desc: 'Generate teks dummy placeholder untuk desain UI dan layout', iconName: 'FileType', tags: ['lorem', 'text', 'dummy'] },

  // Utilities
  { id: 'hash-generator', category: 'utilities', name: 'Hash Generator', desc: 'Hasilkan nilai hash cryptographic SHA-256, SHA-512, SHA-1, dan MD5', iconName: 'Lock', tags: ['hash', 'sha256', 'md5', 'crypto'] },
  { id: 'case-converter', category: 'utilities', name: 'Case Converter', desc: 'Ubah format teks ke UPPERCASE, lowercase, camelCase, snake_case, dll', iconName: 'Type', tags: ['case', 'uppercase', 'camelcase'] },
  { id: 'word-counter', category: 'utilities', name: 'Word & Character Counter', desc: 'Hitung kata, karakter, baris, dan estimasi waktu baca teks', iconName: 'Calculator', tags: ['words', 'count', 'character'] },
  { id: 'diff-checker', category: 'utilities', name: 'Text Diff Checker', desc: 'Bandingkan dua versi teks dan lihat perbedaan baris secara jelas', iconName: 'GitCompare', tags: ['diff', 'compare', 'text'] },
];
