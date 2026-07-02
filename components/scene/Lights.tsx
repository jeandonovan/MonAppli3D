'use client';

export default function Lights() {
  // Minimal and cheap lighting
  return (
    <>
      <hemisphereLight intensity={0.6} groundColor={0x444444} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </>
  );
}
