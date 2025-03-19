export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-4">
        <nav className="mb-4 bg-gray-200 p-3">
          <a href="/" className="mr-4">Home</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/users" className="mr-4">Users</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
