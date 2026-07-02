'use client';

import React from 'react';
import { exportCanvasAsPng } from '../../lib/export';

export default function ExportButton() {
  const handleExport = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
    if (!canvas) {
      alert('Canvas introuvable');
      return;
    }
    const ok = exportCanvasAsPng(canvas, 'scene-export.png');
    if (!ok) alert('Échec de l\'export');
  };

  return (
    <button
      onClick={handleExport}
      className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
    >
      Exporter image
    </button>
  );
}
