import Question from "../../../Components/General/Question";
import { CommonQuestionList } from "../JS/contactsMetaData";
function ContactFooter() {
  return (
    <div className="mb-20 animate-fade-in-down">
      <h2 className="text-[30px] font-bold text-[min(10vw,30px)] text-center " data-aos="fade-up">
        Common Questions
      </h2>
      <p className="why-us-p mx-3" data-aos="fade-up">Quick answers to questions you might have</p>

      <div className="grid grid-cols-2 gap-5 mx-10 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1" data-aos="fade-up">
        {CommonQuestionList.map((question, index) => (
          <Question question={question} />
        ))}
      </div>
    </div>
  );
}

export default ContactFooter;
