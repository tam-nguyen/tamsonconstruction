import Link from "next/link";
import Image from "next/image";
import { logo } from "@public";
import Buttons from "components/homepage/section-layout/buttons";

const Footer = () => {
  const linkArr = [
    {
      heading: "About us",
      links: [
        { name: "Frequently asked questions", url: "/" },
        { name: "Confidentiality policy", url: "/" },
        { name: "Contact", url: "/" },
        { name: "Blog", url: "/" },
      ],
    },

    {
      heading: "Contacts",
      links: [
        { name: "206-715-3084", url: "tel:+1206-715-3084" },
        {
          name: "info@tamsonconstruction",
          url: "mailto:info@tamsonconstruction",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="xl:max-w-6xl m-auto px-4 sm:px-8 xl:px-0 flex flex-col py-4 space-y-6 overflow-hidden">
        <div className="flex justify-between flex-wrap gap-3">
          <div className="space-y-3 w-[350px] text-gray-400 font-normal">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={75}
                height={60}
                priority
              />
            </Link>

            <p> Make your to-do list wherever you are with our mobile app. </p>
            <p> ©2023. All rights reserved. </p>
          </div>

          {linkArr.map(({ heading, links }) => (
            <div
              className="flex flex-col space-y-1"
              key={heading}>
              <h5 className="text-primary font-bold text-[18px] mb-1">
                {" "}
                {heading}{" "}
              </h5>
              {links.map(({ name, url }) => (
                <Link
                  href={url}
                  key={name}
                  className="text-gray-400 font-normal">
                  {" "}
                  {name}{" "}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col space-x-1 w-[250px]">
            <h5 className="text-primary font-bold text-[18px] mb-1"> Hours </h5>
            <p className="text-gray-400 font-normal mb-1">
              {" "}
              Monday - Sunday <br /> 9:00AM - 6:00PM
            </p>
          </div>
        </div>

        <p className="text-center mx-auto mt-5 font-semibold text-gray-400">
          @2017-2024 All Rights Reserved | TamSon Construction, LLC | Lynnwood,
          WA, 98087 | 206-7153084 | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
