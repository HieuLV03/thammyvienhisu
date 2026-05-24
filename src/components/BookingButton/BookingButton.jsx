"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./BookingButton.css";

// export ref global đơn giản
export const bookingBtnRef = { current: null };

export default function BookingButton() {
  const [burst, setBurst] = useState(false);

  const triggerBurst = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 500);
  };

  // expose function để popup gọi
  useEffect(() => {
    window.__bookingBurst = triggerBurst;
  }, []);

  return (
    <Link
      href="/booking"
      className="bookingFloat"
      ref={(el) => (bookingBtnRef.current = el)}
    >
      <div className={`bookingIcon ${burst ? "burst" : ""}`}>
        📅
      </div>
    </Link>
  );
}