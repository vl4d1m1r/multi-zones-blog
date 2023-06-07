import { AppProps } from 'next/app'
import Header from "@/components/Header";
import React from 'react';
import "./global.css"

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
    <body>
      <Header />
      {children}
    </body>
    </html>
  )
}