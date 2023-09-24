"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/Navigation/Navbar";
import Banner from "@/public/images/Banner.gif";

const Landing = () => {
  const router = useRouter();

  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <Navbar>
        <section className="body-font align-center flex justify-center text-gray-700">
          <div className="container mx-auto flex flex-col items-center px-5 py-16 md:mt-40 md:flex-row lg:mt-48 lg:px-20 lg:py-24">
            <div className="mb-16 flex w-full flex-col items-center pt-0  text-left md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24 lg:text-center">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-primary">
                Welcome, Enjoy Your Stay!
              </h2>
              <h1 className="text-2x1 title-font mb-8 text-center font-bold tracking-tighter text-dark dark:text-light lg:text-left lg:text-5xl">
                Humble Home Network
              </h1>
              <div className="-mx-4 -mb-10 -mt-4 flex flex-col sm:-m-4 md:flex-row">
                {/* Card Homelab */}
                <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/2 lg:items-start lg:text-left">
                  <div className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-backgroundLight text-dark dark:bg-backgroundDark dark:text-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="title-font mb-3 text-lg font-medium tracking-tighter text-darkVariant">
                      Homelab
                    </h2>
                    <p className="text-base leading-relaxed text-darkVariant">
                      A humble home lab environment for friends and family.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="mx-0 my-4 group/hoverLeft inline-flex items-center font-semibold text-primary md:mb-2 lg:mb-0"
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 group-hover/hoverLeft:ml-4 transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>

                {/* Card Learning */}
                <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/2 whitespace-nowrap lg:items-start lg:text-left">
                  <div className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-backgroundLight text-dark dark:bg-backgroundDark dark:text-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="title-font mb-3 text-lg font-medium tracking-tighter text-darkVariant">
                      Learning
                    </h2>
                    <p className="text-base leading-relaxed text-darkVariant">
                      One SysAdmin, with one dream. Learning in the process.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/about")}
                    className="mx-0 inline-flex items-center group/hoverLeft font-semibold text-primary md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4 group-hover/hoverLeft:ml-4 transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <Image className="w-auto md:max-w-md" alt="Banner" src={Banner} />
          </div>
        </section>
      </Navbar>
    </main>
  );
};

export default Landing;
