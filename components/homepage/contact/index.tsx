import { contact } from "@public";
import Heading from "components/heading";
import Image from "next/image";
import FormComponent from "./form";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="layout space-y-5">
      <Heading text="Contacts" heading="" />

      <div className="mx-auto w-[400px] max-w-full justify-between space-y-5 rounded-lg p-2 shadow-custom ls:p-4 md:flex md:w-[800px] md:space-y-0 lg:p-8">
        <div className="m-auto flex w-fit flex-col items-center justify-center space-y-2 md:m-0 md:justify-between">
          <div className="relative h-[235px] w-[235px] xls:h-[280px] xls:w-[280px]">
            <Image src={contact} alt="contact us" fill priority />
          </div>

          <div className="justify-between space-x-3 xls:flex xl:w-[365px]">
            <div className="flex flex-col items-center justify-center">
              <h5 className="flex items-center text-[18px] font-semibold">
                {" "}
                <FiPhone className="mr-2" /> Call us{" "}
              </h5>
              <a href="tel:+351-965-990-000" className="text-gray-400 lg:ml-3">
                {" "}
                360-504-6147{" "}
              </a>
            </div>

            <div className="mt-5 flex flex-col items-center justify-center xls:mt-0">
              <h5 className="text-[18px] font-semibold">
                {" "}
                <span className="font-extrabold"> @ </span> Our email{" "}
              </h5>
              <a
                href="mailto:helpyou@gmail.com"
                className="text-gray-400 lg:ml-3"
              >
                {" "}
                tamsonconstruction.com{" "}
              </a>
            </div>
          </div>
        </div>

        <FormComponent />
      </div>
    </div>
  );
};
export default Contact;
