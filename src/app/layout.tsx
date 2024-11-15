import type { Metadata } from "next";
import Form from 'next/form';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Watchlist",
  description: "Create a watchlist of movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Form className="flex p-4" action="/">
          <input className="flex-1 mr-4 p-2 border-none rounded-md text-black" type="text" name="query" placeholder="Search for a movie" />
          <button className="bg-green-300 p-2 text-black rounded-md">Search</button>
        </Form>
        {children}
      </body>
    </html>
  );
}
