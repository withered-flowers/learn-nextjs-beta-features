import "./globals.css";

export const metadata = {
  title: "Learning NextJS",
  description: "Modified by withered-flowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
