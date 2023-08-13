import React from 'react';
import '../styles/globals.scss';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <title>Haley💗</title>
        <meta name="description" content="A special project for Haley." />
        <link rel='icon' href='/chai-tea.png' />
      </head>
      <body>{children}</body>
    </html>
  )
}