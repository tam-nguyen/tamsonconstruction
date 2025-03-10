"use client";
import {
  Layout,
  Hero,
  Services,
  App,
  FAQs,
  Contact,
  Reviews,
} from "@components";

import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import {
  fenceGate1A,
  fenceGate1B,
  fence2a,
  fence2b,
  fence3a,
  fence3b,
} from "@public";

const data = {
  firstImage: [
    {
      imageUrl: `${fenceGate1A.src}`,
    },
    {
      imageUrl: `${fence2a.src}`,
    },
    {
      imageUrl: `${fence3a.src}`,
    },
  ],
  secondImage: [
    {
      imageUrl: `${fenceGate1B.src}`,
    },
    {
      imageUrl: `${fence2b.src}`,
    },
    {
      imageUrl: `${fence3b.src}`,
    },
  ],
};
const FirstImage = [
  {
    imageUrl: `${fenceGate1A.src}`,
  },
  {
    imageUrl: `${fence2a.src}`,
  },
  {
    imageUrl: `${fence3a.src}`,
  },
];

const SecondImage = [
  {
    imageUrl: `${fenceGate1B.src}`,
  },
  {
    imageUrl: `${fence2b.src}`,
  },
  {
    imageUrl: `${fence3b.src}`,
  },
];

const Gallery = () => {
  const generateSlide = () => {
    return data.firstImage.map((_, i) => (
      <ReactBeforeSliderComponent
        key={i}
        firstImage={data.firstImage[i]}
        secondImage={data.secondImage[i]}
        className="w-48! mx-8"
      />
    ));
  };

  return (
    <Layout title="Our work">
      <div className="mx-auto max-w-[1400px] space-y-8 overflow-hidden md:space-y-5">
        <h1 className="text-[18px] font-medium text-primary"> Gallery </h1>
        <div className="flex items-center justify-center">
          {generateSlide()}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
