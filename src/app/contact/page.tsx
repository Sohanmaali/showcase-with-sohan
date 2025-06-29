import React from "react";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
    
      <div>
        <div className="mb-4 md:mb-0">
          <div className="ps-2 pe-2 md:-mt-16 mt-4 mb-5">
            <h1 className="text-3xl font-bold text-white">Contact</h1>
            <div className="w-12 h-1 bg-yellow-500 my-2"></div>
            {/* <div className="my-2 mt-10 flex flex-wrap gap-6 justify-center "> */}
            <div className="my-2 mt-10 flex flex-wrap rounded-3xl shadow-lg h-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.40054122605!2d76.88450474085475!3d22.748308433127516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d1f239bcfb471%3A0x5c3761e6edb78afe!2sDurga%20MANDIR!5e0!3m2!1sen!2sin!4v1739894481656!5m2!1sen!2sin"
                className="border-0 rounded-3xl shadow-lg filter grayscale"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="my-2 mt-4 rounded-3xl h-lg ">
              <div className="mb-5 flex gap-4 font-bold text-2xl">
                Contact Form
              </div>
              <ContactForm />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
