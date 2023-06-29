/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import { Metadata } from 'next'
import 'ui/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
