import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First Nextjs App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
        </head>
        <body className={inter.className}>
          <Navigation/>
          <div className='container p-4'>
            {children}
          </div>
          
        </body>
    </html>
  )
}
