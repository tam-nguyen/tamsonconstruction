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

import React, { useEffect } from "react";

import {
  fenceGate1A,
  fenceGate1B,
  fence2a,
  fence2b,
  fence3a,
  fence3b,
} from "@public";
import Image from "next/image";

import LightGallery from "lightgallery/react";

import "../../styles/globals.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";

const ImageData = [
  {
    imageUrl: `${fenceGate1B.src}`,
    alt: "fenceGate1B",
  },
  {
    imageUrl: `${fenceGate1A.src}`,
    alt: "fenceGate1A",
  },
  {
    imageUrl: `${fence2b.src}`,
    alt: "fence2b",
  },
  {
    imageUrl: `${fence2a.src}`,
    alt: "fence2a",
  },
  {
    imageUrl: `${fence3b.src}`,
    alt: "fence3b",
  },
  {
    imageUrl: `${fence3a.src}`,
    alt: "fence3a",
  },
];

const Gallery = () => {
  const generateImageData = () => {
    return ImageData.map((image, index) => {
      return (
        <a
          key={index}
          data-lg-size="1600-1067"
          className="gallery-item m-2"
          data-src={image.imageUrl}
        >
          <Image
            src={image.imageUrl}
            alt={image.alt}
            className="img-responsive"
            width={250}
            height={250}
          />
        </a>
      );
    });
  };
  return (
    <Layout title="Our Gallery">
      <div className="mx-auto max-w-[1400px] space-y-8 overflow-hidden md:space-y-5">
        <h1 className="text-[18px] font-medium text-primary"> Gallery </h1>
        <LightGallery
          elementClassNames={"lightGalleryStyle"}
          plugins={[lgZoom, lgShare, lgHash]}
          speed={500}
          mode={"lg-fade"}
          addClass="tamnguyen"
          counter={false}
          download={false}
          customSlideName={false}
          share={false}
          actualSize={false}
          subHtmlSelectorRelative={false}
        >
          <div className="grid-sizer lightGalleryStyle"></div>

          {generateImageData()}
        </LightGallery>
      </div>
    </Layout>
  );
};

export default Gallery;
