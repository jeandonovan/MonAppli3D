import './globals.css';
import Header from '../components/layout/Header';

export const metadata = {
  title: 'Kosytus — 3D Viewer',
  description: 'Léger viewer 3D pour architectes et étudiants',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
