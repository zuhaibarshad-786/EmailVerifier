function Question({ question }) {
  return (
    <div className="flex flex-col gap-3 p-5 shadow-lg rounded-[8px] mt-10 transition duration-500 hover:scale-105">
      <h4 className="font-bold text-xl" data-aos="fade-up">
        {question.question}
      </h4>
      <p className="text-[20px] text-[rgb(157,165,176)]" data-aos="fade-up">
        {question.answer}.
      </p>
    </div>
  );
}
export default Question;
