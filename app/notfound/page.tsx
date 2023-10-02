"use client";

import { useEffect } from "react";
import Astronaut from "./Astronaut";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | HHN";
  });

  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden lg:w-full lg:flex-row">
        <div className="w-4/5 md:w-2/5 lg:w-9/12">
          <Astronaut />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl md:text-9xl">404</h1>
          <h2 className=" mb-2 text-lg font-bold sm:text-3xl">
            Oops! Looks like you{"'"}re lost.
          </h2>
          <p className="w-2/4">
            It looks like the page you were looking for does not exist, has been
            removed, has been changed, or is temporarily unavailable.
          </p>
          <a href="/">
            <button className="relative z-10 mx-0 my-1 cursor-pointer overflow-hidden rounded-radius2 border-4 border-solid border-primary bg-transparent px-12 py-2 text-xs font-bold tracking-tighter text-dark transition-all duration-200 hover:bg-primary hover:text-dark dark:text-light md:text-xl">
              GO TO HOMEPAGE
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
