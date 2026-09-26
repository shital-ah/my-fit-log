import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FitLogProvider } from "../context/FitLogContext";
import Toast from "./components/Toast";
import ToastProvider from "./components/ToastProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FitLogProvider>
          <Navbar></Navbar>
          {children}
          <ToastProvider />
          <Footer></Footer>
        </FitLogProvider>

      </body>
    </html>
  );
} 