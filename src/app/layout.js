import { Prompt } from 'next/font/google'

import { Aside } from '@/components/Aside'
import './globals.css'

export const metadata = {
  title: 'JotaPeTech',
  description: 'Sua plataforma de tecnologia e inovação!',
}

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}