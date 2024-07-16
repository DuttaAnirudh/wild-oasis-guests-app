import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_context/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "The Wild Oasis: %s",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolom, meets surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 
        text-primary-100 flex flex-col`}
      >
        <Header />
        <div className="flex-1 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer className="flex items-center justify-center">
          &copy; Copyright by the wild oasis {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
