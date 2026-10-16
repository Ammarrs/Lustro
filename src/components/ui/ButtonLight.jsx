import { IoIosArrowRoundForward } from "react-icons/io";

function ButtonLight() {
  let portofolioLink = "https://am-dev-seven.vercel.app/";
  return (
    <div className="m-5">
      <button
        className="btn group bg-(--ink) text-black font-body font-medium border flex items-center gap-1 py-3 px-5 rounded-3xl shadow-md shadow-indigo-500/10
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:shadow-[0_0_30px_20px_rgba(99,102,241,0.35)]"
      >
        <a href={portofolioLink} target="_blank">About Me</a>
        <IoIosArrowRoundForward className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export default ButtonLight;
