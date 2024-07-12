import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
  icons: {
    icon: "/img/logo10.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {/* <div className="flex z-50 justify-end">
          <div className="h-6 px-5 bg-primary-100">primary-100</div>
          <div className="h-6 px-5 bg-primary-200">primary-200</div>
          <div className="h-6 px-5 bg-primary-300">primary-300</div>
          <div className="h-6 px-5 bg-accent-100">accent-100</div>
          <div className="h-6 px-5 bg-accent-200">accent-200</div>
          <div className="h-6 px-5 bg-text-100">text-100</div>
          <div className="h-6 px-5 bg-text-200">text-200</div>
          <div className="h-6 px-5 bg-bg-100">bg-100</div>
          <div className="h-6 px-5 bg-bg-200">bg-200</div>
          <div className="h-6 px-5 bg-bg-300">bg-300</div>
          <div className="h-6 px-5 bg-dark">dark</div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
