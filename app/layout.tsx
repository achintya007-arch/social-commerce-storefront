import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
