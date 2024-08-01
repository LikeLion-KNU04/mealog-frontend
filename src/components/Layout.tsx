'use client'

import Footer from './Footer'
import MainNavbar from './MainNavbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainNavbar />

      <div className="h-16" />

      <div className="container px-36 mx-auto py-6">{children}</div>

      <Footer />
    </>
  )
}
