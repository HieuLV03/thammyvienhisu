"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { bookingBtnRef } from "@/components/BookingButton/BookingButton";
import "./BookingPopup.css";

export default function BookingPopup() {
  const [show, setShow] = useState(false);
  const [animating, setAnimating] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const flyToButtonAndClose = (callback) => {
    const popup = document.querySelector(".popupBox");
    const btn = bookingBtnRef.current;

    if (!popup || !btn) {
      setShow(false);
      return;
    }

    const popupRect = popup.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    const deltaX =
      btnRect.left +
      btnRect.width / 2 -
      (popupRect.left + popupRect.width / 2);

    const deltaY =
      btnRect.top +
      btnRect.height / 2 -
      (popupRect.top + popupRect.height / 2);

    setAnimating(true);

    popup.style.transition =
      "0.65s cubic-bezier(.2,.8,.2,1)";
    popup.style.transform = `
      translate(${deltaX}px, ${deltaY}px)
      scale(0.1)
    `;
    popup.style.opacity = "0";

    setTimeout(() => {
      setShow(false);
      setAnimating(false);

      if (callback) callback();

      // 🔥 bùng nổ button
      if (window.__bookingBurst) {
        window.__bookingBurst();
      }
    }, 650);
  };

  const closePopup = () => {
    flyToButtonAndClose();
  };

  const handleBooking = () => {
    flyToButtonAndClose(() => {
      router.push("/booking");
    });
  };

  if (!show) return null;

  return (
    <div className="popupOverlay">
      <div className="popupBox">
        <button className="popupClose" onClick={closePopup}>
          ×
        </button>

        <div className="popupBadge">ƯU ĐÃI HÔM NAY</div>

        <p>Nhận tư vấn miễn phí và ưu đãi dành riêng hôm nay</p>

        <div className="popupBenefit">✨ Chuyên viên tư vấn riêng</div>
        <div className="popupBenefit">💖 Nhận ưu đãi khi đặt lịch</div>
        <div className="popupBenefit">🌸 Không phát sinh chi phí</div>

        <button className="popupBtn" onClick={handleBooking}>
          Đặt lịch ngay
        </button>

        <span className="popupSmall">
          Hỗ trợ nhanh chóng • Miễn phí
        </span>
      </div>
    </div>
  );
}