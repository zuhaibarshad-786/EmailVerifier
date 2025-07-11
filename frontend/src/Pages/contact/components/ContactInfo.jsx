import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { WiTime3 } from "react-icons/wi";
import { CiLocationOn } from "react-icons/ci";

function ContactInfo() {
  return (
    <div className="flex flex-col mb-20 animate-fade-in-down">
      <div className="contact-info-side" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-5">
          <TfiEmail className="text-[rgb(75,95,199)] text-2xl" />
          <h3 className="text-[30px] font-[600]">Email Support</h3>
        </div>
        <p className="text-[20px] text-[rgb(157,165,176)] mb-3">
          Get help with your account
        </p>
        <p className="text-[20px] text-[rgb(75,95,199)]">
          support@emailguardian.com
        </p>
      </div>
      <div className="contact-info-side" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-5">
          <FiPhone className="text-green-500 text-2xl" />
          <h3 className="text-[30px] font-[600]">Phone Support</h3>
        </div>
        <p className="text-[20px] text-[rgb(157,165,176)] mb-3">
          Enterprise customers only
        </p>
        <p className="text-[20px] text-green-500">+1 (800) 123-4567</p>
      </div>
      <div className="contact-info-side" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-5">
          <WiTime3 className="text-purple-400 text-3xl" />
          <h3 className="text-[30px] font-[600]">Business Hours</h3>
        </div>
        <p className="text-[17px] mb-2">
          <span className="font-[600]">Monday - Friday:</span> 9:00 AM - 6:00 PM
          PST
        </p>
        <p className="text-[17px] mb-2">
          <span className="font-[600]">Saturday:</span> 10:00 AM - 4:00 PM PST
        </p>
        <p className="text-[17px] mb-2">
          <span className="font-[600]">Sunday: </span>Closed
        </p>
      </div>
      <div className="contact-info-side" data-aos="fade-right">
        <div className="flex items-center gap-3 mb-5">
          <CiLocationOn className="text-red-500 text-3xl" />
          <h3 className="text-[30px] font-[600]">Office Location</h3>
        </div>
        <p className="text-[20px] text-[rgb(157,165,176)] mb-3">
          123 Tech Street San Francisco, CA 94105 United States
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
