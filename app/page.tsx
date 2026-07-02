import './globals.css';

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Kosytus — Visionneuse 3D légère</h2>
        <p className="text-gray-600 mb-4">Charge un modèle, bascule la qualité, mesure le temps de rendu et exporte une image. Conçu pour machines modestes.</p>
        <div className="flex justify-center gap-3">
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded">Ouvrir viewer</a>
          <a href="/todos" className="px-4 py-2 border rounded">To‑Do</a>
        </div>
      </div>
    </main>
  );
}
