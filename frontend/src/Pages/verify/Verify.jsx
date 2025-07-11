import { useState } from "react";

import Header from "../../Components/HeaderSimple/Header";
import VerifyHeader from "./components/VerifyHeader";
import SingleMailVerification from "./components/SingleMailVerification";
import BulKMailVerification from "./components/BulkMailVerification";
import Footer from "../../Components/FooterSimple/Footer";

function Verify() {
  const [verifyMail, setVerifyMail] = useState("singleMail");
  const [showResult, setShowResult] = useState(false);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-30 animate-fade-in-down">
        <VerifyHeader setVerifyMail={setVerifyMail} />
      </div>
      {verifyMail === "singleMail" ? (
        <SingleMailVerification />
      ) : (
        <BulKMailVerification />
      )}

      {showResult ? <Result /> : null}

      <Footer />
    </>
  );
}

export default Verify;
