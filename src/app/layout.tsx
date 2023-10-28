import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/themeProvider'
import { Header } from '../components/ui/header'
import Footer from '../components/ui/footer'
import { WhatsButton } from '../components/ui/whatsapp'
import { AuthProvider } from '../hooks/useAuth'
import { Toaster } from '../components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autotech',
  description: 'Reserve ou alugue seu veículo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <AuthProvider>
            <Header/>
            {children}
            <WhatsButton/>
            <Footer/>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
