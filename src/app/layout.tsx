import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CCTV Hub - Premium CCTV & Surveillance Solutions",
  description:
    "Providing cutting-edge surveillance solutions for homes and businesses. Secure your property with our advanced CCTV systems and expert installation services.",
  keywords: "CCTV, security cameras, surveillance, home security, office security, security systems",
  openGraph: {
    title: "CCTV Hub - Premium CCTV & Surveillance Solutions",
    description:
      "Providing cutting-edge surveillance solutions for homes and businesses. Secure your property with our advanced CCTV systems and expert installation services.",
    url: "https://CCTV Hub.com",
    siteName: "CCTV Hub",
    images: [
      {
        url: "https://CCTV Hub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CCTV Hub - Premium CCTV & Surveillance Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
