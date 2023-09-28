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
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-dark dark:text-light sm:mt-0">
          <li>
            <button
              onClick={() => router.push("/about")}
              className="mr-4 text-primary hover:underline md:mr-6 "
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/privacy")}
              className="mr-4 text-primary hover:underline md:mr-6"
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/licensing")}
              className="mr-4 text-primary hover:underline md:mr-6"
            >
              Licensing
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/contact")}
              className="text-primary hover:underline"
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
