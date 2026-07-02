'use client';

import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useMetricsStore } from '../../store/useMetricsStore';

export default function ModelLoader({ src }: { src: string }) {
  const metrics = useMetricsStore();
  const start = React.useRef<number>(0);

  start.current = performance.now();
  const gltf = useGLTF(src, true) as any;

  useEffect(() => {
    // called after gltf is available and mounted
    const t = performance.now() - start.current;
    metrics.recordRenderTime('firstFrameMs', Math.round(t));
    // cleanup: nothing for now
  }, [gltf, metrics]);

  return <primitive object={gltf.scene} />;
}
