// app/components/ImageSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import Shoes from "@/app/assets/images/products/shoes.png";
import Airpods from "@/app/assets/images/products/airpods.png";
import Headphone from "@/app/assets/images/products/headphone.png";
import Jackets from "@/app/assets/images/products/jackets.png";

export default function ImageSlider() {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop
            className="w-full h-[400px]"
        >
            <SwiperSlide>
                <div className="flex items-center justify-center h-full bg-red-400 text-white text-3xl">
                    <Image src={Shoes} alt="slider image" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex items-center justify-center h-full bg-blue-400 text-white text-3xl">
                    <Image src={Airpods} alt="slider image" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex items-center justify-center h-full bg-green-400 text-white text-3xl">
                    <Image src={Headphone} alt="slider image" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex items-center justify-center h-full bg-green-400 text-white text-3xl">
                    <Image src={Jackets} alt="slider image" />
                </div>
            </SwiperSlide>


        </Swiper>
    );
}
