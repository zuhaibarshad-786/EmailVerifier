import Header from "../../Components/HeaderSimple/Header";
import ContactHeader from "./components/ContactHeader";
import ContactInfo from "./components/ContactInfo";
import ContactMail from "./components/ContactMail";
import ContactFooter from "./components/ContactFooter";
import Footer from "../../Components/FooterSimple/Footer";

function Contact() {
  return (
    <>
      <Header />
      <>
        <div className="flex flex-col justify-center items-center mt-30 mb-20 animate-fade-in-down">
          <ContactHeader />
        </div>
        <div className="flex mx-15 gap-15 mt-15 max-sm:flex-col max-md:flex-col max-lg:flex-col max-xl:flex-col max-sm:mx-5 max-md:mx-5 max-lg:mx-5 max-xl:max-5 max-xl:items-center max-sm:items-center max-md:items-center max-lg:items-center">
          <ContactInfo />
          <ContactMail />
        </div>
        <ContactFooter />
      </>
      <Footer />
    </>
  );
}
export default Contact;
