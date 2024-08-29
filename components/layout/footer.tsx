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
        { name: "360-504-6147", url: "tel:+13605046147" },
        {
          name: "info@tamsonconstruction",
          url: "mailto:info@tamsonconstruction",
        },
      ],
    },
  ];

  return (
    <footer>
      <div className="m-auto flex flex-col space-y-6 overflow-hidden px-4 py-4 sm:px-8 xl:max-w-6xl xl:px-0">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="w-[350px] space-y-3 font-normal text-gray-400">
            <Link href="/">
              <Image src={logo} alt="logo" width={75} height={60} priority />
            </Link>

            <p> Make your to-do list wherever you are with our mobile app. </p>
            <p> ©2023. All rights reserved. </p>
          </div>

          {linkArr.map(({ heading, links }) => (
            <div className="flex flex-col space-y-1" key={heading}>
              <h5 className="mb-1 text-[18px] font-bold text-primary">
                {" "}
                {heading}{" "}
              </h5>
              {links.map(({ name, url }) => (
                <Link
                  href={url}
                  key={name}
                  className="font-normal text-gray-400"
                >
                  {" "}
                  {name}{" "}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex w-[250px] flex-col space-x-1">
            <h5 className="mb-1 text-[18px] font-bold text-primary"> Hours </h5>
            <p className="mb-1 font-normal text-gray-400">
              {" "}
              Monday - Sat <br /> 8:00AM - 4:00PM
            </p>
          </div>
        </div>

        <p className="mx-auto mt-5 text-center font-semibold text-gray-400">
          @2017-2024 All Rights Reserved | TamSon Construction, LLC | Lynnwood,
          WA, 98087 | 360-504-6147 | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
