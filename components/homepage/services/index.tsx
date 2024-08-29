import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "components/heading";
import {
  cleaning,
  moving,
  mounting,
  plumbing,
  repairs,
  yard,
  electrical,
  carpentry,
  painting,
  flooring,
} from "@public";

import "swiper/css";

const Services = () => {
  const services = [
    { img: plumbing, title: "Plumbing Help", requests: "500" },
    { img: mounting, title: "Mounting", requests: "400" },
    { img: repairs, title: "Home repairs", requests: "300" },
    { img: carpentry, title: "Carpentry", requests: "500" },
    { img: painting, title: "Painting", requests: "400" },
    { img: flooring, title: "Flooring", requests: "300" },
  ];

  return (
    <div className="mx-auto max-w-[1400px] space-y-8 overflow-hidden md:space-y-5">
      <Heading text="Popular services" heading="" />

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        className="w-full !px-3 sm:!px-8 xl:!px-[calc((100vw-1152px)/2)] xxl:!px-[124px]"
      >
        {services.map(({ img, title, requests }) => {
          return (
            <SwiperSlide
              key={title}
              className="flex max-w-[200px] flex-col items-center space-y-1"
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
                <Image src={img} alt="logo" fill priority />
              </div>

              <p className="text-center text-[14px] font-medium"> {title} </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Services;
