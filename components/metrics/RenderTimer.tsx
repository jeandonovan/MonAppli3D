'use client';

import React from 'react';
import { useMetricsStore } from '../../store/useMetricsStore';

export default function RenderTimer() {
  const first = useMetricsStore((s) => s.times.firstFrameMs);
  return (
    <div className="bg-white/80 px-2 py-1 rounded text-sm shadow">
      <div>Render: {first ? `${first} ms` : '—'}</div>
    </div>
  );
}
