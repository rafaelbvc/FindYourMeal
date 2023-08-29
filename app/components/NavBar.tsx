"use client";

import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModal from "./AuthModal";
import GitHubSVG from "./icons/GitHubSVG";
import TableIcon from "./icons/TableIconSVG";
import LinkedInSVG from "./icons/LinkedInSVG";

function NavBar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="flex p-2 justify-between">
      <div className="flex">
        <TableIcon />
        <Link
          href="/"
          className="pl-1 font-bold text-gray-700 text-2xl hover:text-gray-500"
        >
          FindYourMeal
        </Link>
      </div>

      <menu className="flex justify-between w-[20rem]">
        <p className="pl-1 font-bold whitespace-nowrap text-gray-700 text-2xl hover:text-gray-500 flex mr-[-4rem]">
          Rafael Vendramini
        </p>
        <Link
          className="ml-6"
          href={"https://github.com/rafaelbvc/rvbvcopentablenextjs"}
          target="blank"
        >
          <GitHubSVG className="w-[2rem] h-[2rem] " />
        </Link>
        <Link
          className=""
          href={"https://www.linkedin.com/in/rafael-vendramini/"}
          target="blank"
        >
          <LinkedInSVG className="w-[2rem] h-[2rem] ml-[-2rem]" />
        </Link>
      </menu>

      <menu className="self-end">
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white p-1 px-4 rounded hover:bg-blue-500 mr-5"
                onClick={signout}
              >
                Sign Out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </menu>
    </nav>
  );
}

export default NavBar;
