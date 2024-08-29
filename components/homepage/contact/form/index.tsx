import { useState } from "react";
import { ContactInitialValues } from "@types";
import { Loader } from "components/loader";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormField from "./field";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import axios from "axios";
import { sendEmail } from "components/sendemail";
import Image from "next/image";

const FormComponent = () => {
  const [loading, setLoading] = useState(false);

  const initialValues: ContactInitialValues = {
    name: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter name"),
    subject: Yup.string().required("Enter subject"),
    message: Yup.string().required("Enter message"),
  });

  // const handleSubmit = (
  //   values: ContactInitialValues,
  //   { setSubmitting, resetForm }: FormikHelpers<ContactInitialValues>
  // ) => {
  //   setLoading(true);

  //   // sample request. just send success alert after. just for testing purpose
  //   axios
  //     .post("/url", values)
  //     .then(async (res) => {
  //       setLoading(false);
  //       setSubmitting(false);
  //       resetForm();
  //       alert("Message sent! we will get back to you");

  //       // if (res.status === 200) {

  //       // }
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setSubmitting(false);
  //       resetForm();
  //       alert(error);
  //     });
  // };

  const fieldArr = [
    {
      icon: <AiOutlineUser size={25} className="text-[rgba(0,0,0,0.5)]" />,
      name: "name",
      placeholder: "Your Name",
    },
    {
      icon: <AiOutlineMail size={25} className="text-[rgba(0,0,0,0.5)]" />,
      name: "subject",
      placeholder: "Your Subject",
    },
    {
      icon: <FiMessageCircle size={25} className="text-[rgba(0,0,0,0.5)]" />,
      name: "message",
      placeholder: "Your Message",
    },
  ];

  return (
    <div>
      <form action={async (formData) => await sendEmail(formData)}>
        <div className="flex flex-col space-y-4">
          {fieldArr.map(({ icon, name, placeholder }) => {
            return (
              <div
                className="relative flex w-full items-center justify-end rounded-lg border border-gray-400 p-4"
                key={name}
              >
                <>{icon}</>
                <input
                  placeholder={placeholder}
                  className="focus:outline-none"
                  name={name}
                />
              </div>
            );
          })}

          <button
            type="submit"
            disabled={false}
            className="h-[43px] w-full rounded-2xl border-none bg-primary py-2 text-[18px] font-semibold text-white outline-none disabled:bg-opacity-70"
          >
            {loading ? <Loader /> : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
