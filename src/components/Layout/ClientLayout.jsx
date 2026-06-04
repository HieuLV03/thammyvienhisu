"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.ttq) {
      window.ttq.page(); // 🔥 bắt buộc mỗi route change
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <ZaloButton />
      <BookingButton />
      <BookingPopup />
      <Footer />
    </>
  );
}