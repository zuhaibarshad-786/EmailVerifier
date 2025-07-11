import Header from "../../Components/HeaderSimple/Header";
import Footer from "../../Components/FooterSimple/Footer";
import LandingHeader from "./components/LandingHeader";
import DemoMails from "./components/DemoMails";
import WhyUs from "./components/WhyUs";
import TrustedBusiness from "./components/TrustedBusiness";
import LandingFooter from "./components/LandingFooter";

function Landing() {
  const businessList = [
    {
      description:
        "Increased our email deliverability by 40% after cleaning our list with this tool.",
      writer: "Sarah Johnson",
      designation: "Marketing Director",
    },
    {
      description:
        "Super fast verification and accurate results. Saved us hours of manual work.",
      writer: "Mike Chen",
      designation: "Growth Manager",
    },
    {
      description:
        "Easy to use interface and excellent customer support. Highly recommended!",
      writer: "Lisa Rodriguez",
      designation: "Email Specialist",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-30 mb-20 animate-fade-in-down">
        <LandingHeader />
        <DemoMails />
        <WhyUs />
        <TrustedBusiness businessList={businessList} />
      </div>
      <LandingFooter />
      <Footer />
    </>
  );
}

export default Landing;
