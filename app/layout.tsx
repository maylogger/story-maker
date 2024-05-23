import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansTC = Noto_Sans_TC({
  weight: ['400', '600'],
  preload: false,
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  title: '故事創作機',
  description: '簡單入門的時間軸製作工具',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-TW' className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className='py-10'>{children}</body>
    </html>
  )
}
