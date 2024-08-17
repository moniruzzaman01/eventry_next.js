import Link from "next/link";
import SignInOut from "./auth/SignInOut";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <div className=" text-3xl font-extralight">
              <span className=" text-orange-500">E</span>
              <span className=" ml-[-3px] text-orange-400">V</span>
              <span className=" ml-[-4px] text-orange-300">N</span>
              <span className=" ml-[-4px] text-orange-200">T</span>
            </div>
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <SignInOut />
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
