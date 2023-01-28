import { FaUserAlt } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

export function Menu() {
  return (
    <div
      className=" 
    bg-primaryVariant
    text-white p-4 rounded-2xl 
    z-10 fixed 
    flex flex-col justify-center items-center 
    gap-6
    right-0 -translate-x-full
    top-2/4
    text-xl"
    >
      <a href="#top">
        <FaUserAlt className="text-white" />
      </a>

      <a href="#experiences">
        <CgMenu className="text-white" />
      </a>
    </div>
  );
}
