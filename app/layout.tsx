import "@/app/ui/globals.css";
import {inter} from '@/app/ui/fonts'
import { Metadata } from "next";
import { Navigation } from "@/app/ui/home/navbar";
import NavbarProvider from "@/app/lib/navbarContext";
import { useShowNav } from "@/app/lib/navbarContext";

export const metadata: Metadata = {
  title: {
    default: "Sarilus Blondy Wadley | Full-stack developer",
    template: "%s | Sarilus Blondy Wadley | Full-stack developer",
  },
  description: "Portfolio of Sarilus Blaise : full-stack developer focusing in react , nextjs, typescript , firebase, mongodb, expressjs",
  openGraph: {
    title: "sarilusblaise.com",
    description:
      "ull-stack developer focusing in react , nextjs, typescript , firebase, mongodb, expressjs",
    url: "https://sarilusblaise.com",
    siteName: "sarilusblaise.com",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "sarilusblaise",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <head>
      </head>
      <NavbarProvider>
         <body
        className="bg-black overflow-x-hidden"
      >
        <Navigation/>
        {children}
      </body>
      </NavbarProvider>
     
    </html>
  );
}
