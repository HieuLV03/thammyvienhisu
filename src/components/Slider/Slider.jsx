"use client";

import "./Slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

export default function Slider({
  sliders,
}) {
  return (
    <section className="heroSlider">

      {sliders.length > 0 && (
        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          slidesPerView={1}
          loop={sliders.length > 1}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="heroSwiper"
        >

          {sliders.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="heroSlide">

                <picture>

                  <source
                    media="(max-width: 768px)"
                    srcSet={item.image_mobile}
                  />

                  <img
                    src={
                      item.image_desktop ||
                      item.image
                    }
                    alt={item.title}
                    className="heroImg"
                  />

                </picture>

                <div className="heroOverlay" />

                <div className="heroContent">

                  <h1>{item.title}</h1>

                  <div className="heroActions">

                    <Link
                      href="/booking"
                      className="btnPrimary"
                    >
                      Đặt lịch ngay
                    </Link>

                    <Link
                      href="/services"
                      className="btnOutline"
                    >
                      Xem dịch vụ
                    </Link>

                    <Link
                      href="/posts"
                      className="btnOutline"
                    >
                      Xem bài viết
                    </Link>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      )}

    </section>
  );
}