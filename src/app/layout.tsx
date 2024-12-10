import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {

  openGraph: {
    title: 'Cursos gratis sepe 100% subvencionados',
    description: 'Descubre tu camino y expande tus conocimientos con nuestra amplia oferta de cursos de formación profesional y 100% subvencionados por instituciones estatales reconocidas como el SEPE, SOC, FUNDAE, Cámara de comercio ... No te piertas esta gran oportunidad',
    url: 'https://cursosepegratis.es',
    siteName: 'Cursos gratis sepe',
    images: [
      {
        url: 'https://res.cloudinary.com/dbunsnc88/image/upload/v1733848072/Redes_sepe_Mesa_de_trabajo_1_h0wq2s.jpg',
        width: 800,
        height: 600,
        alt: 'Imagen de presentación de curso sepe gratis'
      },
      {
        url: 'https://res.cloudinary.com/dbunsnc88/image/upload/v1733848072/Redes_sepe_Mesa_de_trabajo_1_h0wq2s.jpg',
        width: 1800,
        height: 1600,
        alt: 'Imagen de presentación de curso sepe gratis',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  title: "Create Next App",
  description: "Generated by create next app",


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-PRWWV43T" />
      <GoogleAnalytics gaId="G-5M11C6K7G4" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
