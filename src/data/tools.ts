import type { Category, Tool } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'formatters', name: 'Formatters & Prettiers' },
  { id: 'minifiers', name: 'Minifiers & Compactors' },
  { id: 'encoders', name: 'Encoders & Decoders' },
  { id: 'generators', name: 'Generators & Converters' },
  { id: 'utilities', name: 'Text & Hash Utilities' },
];

export const TOOLS: Tool[] = [
  // Formatters
  { id: 'json-formatter', category: 'formatters', name: 'JSON Formatter', desc: 'Rapikan dan validasi sintaks JSON' },
  { id: 'html-formatter', category: 'formatters', name: 'HTML Formatter', desc: 'Format dan rapikan struktur elemen HTML' },
  { id: 'css-formatter', category: 'formatters', name: 'CSS Formatter', desc: 'Format aturan CSS agar mudah dibaca' },
  { id: 'sql-formatter', category: 'formatters', name: 'SQL Formatter', desc: 'Rapikan kueri SQL dan kapitalisasi keyword' },

  // Minifiers
  { id: 'json-minifier', category: 'minifiers', name: 'JSON Minifier', desc: 'Hapus spasi dan newline pada JSON' },
  { id: 'html-minifier', category: 'minifiers', name: 'HTML Minifier', desc: 'Kompres file HTML dengan menghapus spasi/komentar' },
  { id: 'css-minifier', category: 'minifiers', name: 'CSS Minifier', desc: 'Kompres aturan CSS menjadi satu baris' },
  { id: 'js-minifier', category: 'minifiers', name: 'JS Minifier', desc: 'Minify sintaks JavaScript sederhana' },

  // Encoders
  { id: 'base64-encoder', category: 'encoders', name: 'Base64 Encoder/Decoder', desc: 'Encode teks biasa ke Base64 dan sebaliknya' },
  { id: 'url-encoder', category: 'encoders', name: 'URL Encoder/Decoder', desc: 'Encode karakter khusus untuk URL' },
  { id: 'html-entity', category: 'encoders', name: 'HTML Entity Encoder', desc: 'Ubah karakter khusus jadi entitas HTML' },
  { id: 'jwt-decoder', category: 'encoders', name: 'JWT Decoder', desc: 'Decode header & payload dari string JWT' },

  // Generators
  { id: 'uuid-generator', category: 'generators', name: 'UUID Generator', desc: 'Generate string UUID v4 secara acak' },
  { id: 'json-to-csv', category: 'generators', name: 'JSON to CSV', desc: 'Konversi data JSON array menjadi format CSV' },
  { id: 'csv-to-json', category: 'generators', name: 'CSV to JSON', desc: 'Konversi tabel CSV menjadi struktur JSON' },
  { id: 'lorem-ipsum', category: 'generators', name: 'Lorem Ipsum Generator', desc: 'Generate teks dummy untuk placeholder' },

  // Utilities
  { id: 'hash-generator', category: 'utilities', name: 'Hash Generator', desc: 'Buat hash SHA-256, SHA-1, atau MD5' },
  { id: 'case-converter', category: 'utilities', name: 'Case Converter', desc: 'Ubah format teks ke UPPERCASE, camelCase, dll' },
  { id: 'word-counter', category: 'utilities', name: 'Word & Character Counter', desc: 'Hitung jumlah kata, karakter, dan baris' },
  { id: 'diff-checker', category: 'utilities', name: 'Text Diff Checker', desc: 'Bandingkan dua teks dan lihat perbedaannya' },
];
