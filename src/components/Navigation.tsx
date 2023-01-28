import { BsFillMoonStarsFill } from "react-icons/bs";
import { Button } from "./Button";

export function Navigation() {
  return (
    <nav className="py-10 flex justify-between">
      <ul className="min-w-full flex justify-end items-center gap-4">
        <li>
          <BsFillMoonStarsFill className=" text-2xl" />
        </li>
        <li>
          <Button href="#experiences" target="_self" text="Currículo" />
        </li>
      </ul>
    </nav>
  );
}
