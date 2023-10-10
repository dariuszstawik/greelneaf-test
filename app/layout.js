import Footer from "./components/global-components/footer";
import Navbar from "./components/global-components/navbar";
import "./globals.css";

export const metadata = {
  title: "Green Leaf Power",
  description:
    "Instalacje fotowoltaiczne, magazyny energii, systemy smart home, a także serwisy fotowoltaiki dla klientów biznesowych oraz indywidualnych.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
