"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full bg-light dark:bg-backgroundDark">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex items-center text-sm text-dark dark:text-light sm:text-center">
          © 2023&nbsp;
          <Link
            href="https://www.famlam.ca/"
            className="text-primary hover:underline"
          >
            HHN™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-dark dark:text-light sm:mt-0 md:gap-6">
          <li>
            <button
              onClick={() => router.push("/about")}
              className="
              relative
              flex
              text-sm
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-bottom-right
              after:scale-x-0
              after:bg-primary
              after:transition-transform
              after:duration-200
              after:content-['']
              hover:after:origin-bottom-left
              hover:after:scale-100
              "
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/privacy")}
              className="
              relative
              flex
              text-sm
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-bottom-right
              after:scale-x-0
              after:bg-primary
              after:transition-transform
              after:duration-200
              after:content-['']
              hover:after:origin-bottom-left
              hover:after:scale-100
              "
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/licensing")}
              className="
              relative
              flex
              text-sm
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-bottom-right
              after:scale-x-0
              after:bg-primary
              after:transition-transform
              after:duration-200
              after:content-['']
              hover:after:origin-bottom-left
              hover:after:scale-100
              "
            >
              Licensing
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/contact")}
              className="
              relative
              flex
              text-sm
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-bottom-right
              after:scale-x-0
              after:bg-primary
              after:transition-transform
              after:duration-200
              after:content-['']
              hover:after:origin-bottom-left
              hover:after:scale-100
              "
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
