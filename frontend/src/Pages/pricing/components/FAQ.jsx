import Question from "../../../Components/General/Question";

function FAQ({FAQList}) {
  return (
    <div className="mx-5">
      {" "}
      <h2 className="text-[40px] font-bold text-[min(10vw,40px)] text-center">
        Frequently Asked Questions
      </h2>
      {FAQList.map((question, index)=>(
        <Question key={index} question={question}/>
      ))}
    </div>
  );
}
export default FAQ;
