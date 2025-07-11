import { useRef } from "react";
import { toast } from "react-toastify";
import { sendMail } from "../JS/contactsMetaData";

function ContactMail() {
  const userName = useRef("");
  const userMail = useRef("");
  const subject = useRef("");
  const message = useRef("");

  return (
    <div className="w-[100%] mb-10 animate-fade-in-down" data-aos="fade-left">
      <div className="flex flex-col p-10 rounded-[8px] shadow-lg ">
        <h3 className="text-[30px] font-[600] max-sm:text-center max-md:text-center max-lg:text-center">
          Send us a Message
        </h3>
        <p className="text-[20px] text-[rgb(157,165,176)] mb-3 max-sm:text-center max-md:text-center max-lg:text-center text-justify mb-5">
          Please take a moment to fill out the form below with your details. Our
          team carefully reviews every inquiry we receive. Once we’ve looked
          over your message, we’ll be in touch shortly. We appreciate your
          interest and look forward to connecting with you. Your satisfaction is
          our priority!{" "}
        </p>

        <div className="flex gap-5 w-[100%] max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:gap-1 max-md:gap-1 max-lg:gap-1">
          <div className="flex flex-col w-[100%] gap-5">
            <label htmlFor="" className="sign-in-label">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Enter your full Name"
              ref={userName}
              className="userName "
            />
            <p className="name-error-message hidden -mt-5 mb-5">
              Name is required.
            </p>
          </div>
          <div className="flex flex-col w-[100%] gap-5">
            <label htmlFor="" className="sign-in-label">
              Email Address*
            </label>
            <input
              className="userMail"
              type="text"
              placeholder="Enter your Email"
              ref={userMail}
            />
            <p className="email-error-message hidden -mt-5 mb-5">
              Email is required.
            </p>
          </div>
        </div>
        <label htmlFor="" className="sign-in-label">
          Subject*
        </label>
        <select name="" id="" ref={subject} className="subject my-5">
          <option value="">Select a Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Billing Question">Billing Question</option>
          <option value="Partnership">Partnership</option>
          <option value="Others">Others</option>
        </select>
        <p className="subject-error-message hidden -mt-5 mb-5">
          Select a subject.
        </p>

        <label htmlFor="" className="sign-in-label">
          Message*
        </label>
        <textarea
          className="message my-5"
          name=""
          rows={8}
          id=""
          placeholder="Please provide details about your inquiry..."
          ref={message}
        ></textarea>
        <p className="error-message hidden -mt-5 mb-5">
          Describe your message.
        </p>
        <button
          className="mt-8 text-white bg-[#24A0ED] hover:opacity-70 bg-gradient-to-r from-[rgb(75,95,199)] to-green-200"
          onClick={() => {
            if (!sendMail(userName, userMail, subject, message)) {
              toast.error("Fill the required Info first.");
              return;
            }
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactMail;
