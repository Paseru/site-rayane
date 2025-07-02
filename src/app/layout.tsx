import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayane Rachid - MVP en 1 semaine',
  description: 'Transformez votre idée en MVP fonctionnel en seulement 1 semaine. Développeur solo spécialisé dans les prototypes rapides.',
  keywords: 'MVP, développement, prototype, startup, Next.js, React',
  authors: [{ name: 'Rayane Rachid' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="font-sans">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
} 