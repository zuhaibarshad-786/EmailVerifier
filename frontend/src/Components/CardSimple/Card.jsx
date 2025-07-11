import { IoStarSharp } from "react-icons/io5";

function Card({ business }) {
  return (
    <div className="flex flex-col gap-4 p-5 shadow-xl rounded-[8px] transition duration-500 hover:scale-105">
      <div className="flex items-center text-left text-yellow-500 " data-aos="fade-up">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
      <p className="why-us-p">"{business.description}"</p>
      <h4 className="text-[17px] font-bold">
        {business.writer}, {business.designation}
      </h4>
    </div>
  );
}
export default Card;
