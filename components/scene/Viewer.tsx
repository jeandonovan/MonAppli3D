import { existsUrl } from '../../lib/loaders';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import { useQualityStore } from '../../store/useQualityStore';
import CameraControls from './CameraControls';
import Lights from './Lights';
import FallbackMesh from './FallbackMesh';
import ModelLoader from './ModelLoader';
import RenderTimer from '../metrics/RenderTimer';

export default function Viewer({ modelUrl = '/models/test.glb' }: { modelUrl?: string }) {
  const quality = useQualityStore((s) => s.quality);
  const dpr = quality === 'high' ? [1, 1.5] : [0.6, 1];
  const antialias = quality === 'high';
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    existsUrl(modelUrl).then((ok) => mounted && setExists(ok));
    return () => {
      mounted = false;
    };
  }, [modelUrl]);

  return (
    <div className="h-full relative">
      <Canvas
        className="h-full"
        frameloop="demand"
        dpr={dpr}
        gl={{ antialias, powerPreference: 'low-power' }}
        camera={{ position: [2, 2, 2], fov: 45 }}
      >
        <ambientLight intensity={0.8} />
        <Lights />
        <SuspenseFallback exists={exists} modelUrl={modelUrl} />
        <CameraControls />
      </Canvas>

      <div className="absolute top-3 left-3">
        <RenderTimer />
      </div>
    </div>
  );
}

function SuspenseFallback({ exists, modelUrl }: { exists: boolean | null; modelUrl: string }) {
  if (exists === null) return <Html center>Vérification modèle…</Html>;
  if (!exists) return <FallbackMesh />;
  return (
    // @ts-ignore - suspense in canvas
    <>
      <ModelLoader src={modelUrl} />
    </>
  );
}
