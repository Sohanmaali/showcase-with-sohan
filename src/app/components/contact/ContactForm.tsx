"use client";

import { sendMail } from "@/lib/send-mail";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdMessage, MdOutlineEmail, MdSend } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const ValidateData = () => {
    let err: any = {};
    let isValid = true;

    if (!formData.name?.trim()) {
      err.name = "Name is required";
      isValid = false;
    }

    if (!formData.subject?.trim()) {
      err.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.email?.trim()) {
      err.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      err.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.mobile?.trim()) {
      err.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      err.mobile = "Invalid mobile number (must be 10 digits)";
      isValid = false;
    }

    if (!formData.message?.trim()) {
      err.message = "Message is required";
      isValid = false;
    }

    setErrors(err);

    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if (!ValidateData()) {
    //   return;
    // }
    setIsLoading(true);

    try {
      const response = await sendMail({
        email: "sohanmaali4@gmail.com",
        sendTo: "sohanmaali4@gmail.com",
        subject: "New Contact Inquiry Received",
        templateName: "contact",
        variables: formData,
      });

      console.log("response-=-=-=-=-", response);

      toast.success("Message successfully send to sohan 😊");
    } catch (error) {
      toast.error("Message Send fail to Sohan ");
      // toast.error("Message Send fail to Sohan 😒");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="">
      <form className="w-full mx-auto" onSubmit={handleSubmit}>
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
              {errors?.subject && (
                <span className="text-white-900">{errors?.subject} </span>
              )}
            </div>

            {/* ================================ */}
            {/* <div className="relative z-0 w-full mb-5 group ">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
              {errors?.subject && (
                <span className="text-white-900">{errors?.subject} </span>
              )}
            </div> */}
            <div className="relative z-0 w-full mb-5 group ">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Complite Name
              </label>
              {errors?.name && (
                <span className="text-white-900">{errors?.name} </span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
              {errors?.email && (
                <span className="text-white-900">{errors?.email} </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              />
              <label
                htmlFor="mobile"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile Number
              </label>
              {errors?.mobile && (
                <span className="text-white-900">{errors?.mobile} </span>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid grid-cols-1  gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#BCA358] focus:outline-none focus:ring-0 focus:border-[#BCA358] peer"
                placeholder=" "
                onChange={handleChange}
              ></textarea>
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#BCA358] peer-focus:dark:text-[#BCA358] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Message
              </label>
              {errors?.message && (
                <span className="text-white-900">{errors?.message} </span>
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid grid-cols-1 gap-6">
            <div className="relative z-0 w-full mb-5 group flex justify-end">
              <button
                className="relative h-12 shadow px-8 rounded-lg overflow-hidden transition-all duration-500 group border border-[#BCA358] bg-transparent hover:bg-gradient-to-bl from-[#BCA358] to-transparent"
                //   onClick={handleClick}
                disabled={isLoading}
              >
                <div className="relative flex items-center justify-center gap-2 text-[#BCA358] group-hover:text-white transition-colors duration-500">
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                      >
                        <circle
                          cx="25"
                          cy="25"
                          r="20"
                          stroke="#BCA358"
                          strokeWidth="5"
                          fill="none"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon s-ion-icon"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                        style={{ fill: "currentColor" }}
                      >
                        <title>Paper Plane</title>
                        <path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z"></path>
                      </svg>
                      Send Message
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
