import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Ivory NYC</title>
      </head>
      <body>{children}</body>
    </html>
  )
}