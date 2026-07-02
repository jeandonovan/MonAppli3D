'use client';

import Link from 'next/link';
import QualitySelector from '../components/QualitySelector';
import ExportButton from '../components/ExportButton';

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-white shadow-sm">
      <h1 className="text-lg font-medium">Kosytus — 3D Viewer</h1>
      <div className="flex gap-3 items-center">
        <Link href="/todos" className="text-sm text-gray-600">To‑Do</Link>
        <Link href="/" className="text-sm text-gray-600">Accueil</Link>
        <Link href="/" className="text-sm text-gray-600">Docs</Link>
        <QualitySelector />
        <ExportButton />
      </div>
    </header>
  );
}
