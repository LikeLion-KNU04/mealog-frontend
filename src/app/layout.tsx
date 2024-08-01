import type { Metadata } from 'next'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'Mealog',
  description: '밀로그',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <NextTopLoader color="#61967E" showSpinner={false} />
        {children}
      </body>
    </html>
  )
}
