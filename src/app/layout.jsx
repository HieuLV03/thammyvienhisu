import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import BookingPopup from "@/components/BookingPopup/BookingPopup";
import ZaloButton from "@/components/ZaloButton/ZaloButton";
import BookingButton from "@/components/BookingButton/BookingButton";

export const metadata = {
  metadataBase: new URL(
    "https://thammyvienhisu.online"
  ),

  title: {
    default: "THẨM MỸ VIỆN HISU - Phun Xăm Thẩm Mỹ Uy Tín Chuyên Nghiệp TP.HCM",
    template: "%s | TMV HISU",
  },

  description: "HISU chuyên phun môi, phun mày, phun mí, phun hồng vùng kín tại nhà và tại cơ sở ở TP.HCM. Công nghệ hiện đại, an toàn, tự nhiên, tư vấn tận tình.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google:
      "4mLd0Os-KkaDCT-MWvcardRaqRs4ARy18-EvKlD6fdU",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="appBody">
        <Header />
        <main className="mainContent">{children}</main>
        <ZaloButton />
        <BookingButton />
        <BookingPopup />
        <Footer />
      </body>
    </html>
  );
}