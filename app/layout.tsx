import type { Metadata } from 'next'
import Sidebar from './components/sidebar'
import './globals.css'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Minh-Hien Le',
  description: 'Minh-Hien Le | minh.hin.le[at]gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]'
      )}
    >
      <body className="antialiased max-w-2xl mb-20 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          {/* <Analytics /> */}
        </main>
      </body>
    </html>
  )
}
