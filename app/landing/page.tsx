"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineAcademicCap,
  HiOutlineServerStack,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import Navbar from "@/components/Navigation/Navbar";
import Banner from "@/public/images/Banner.gif";

const Landing = () => {
  const router = useRouter();

  return (
    <Navbar>
      <section className="flex h-[calc(100vh-5rem)] text-muted">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 md:flex-row lg:px-20">
          <div className="flex w-full flex-col items-center pt-0 text-left md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24 lg:text-center">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-primary">
              Welcome, Enjoy Your Stay!
            </h2>
            <h1 className="text-2x1 mb-8 text-center font-bold tracking-tighter text-dark dark:text-light lg:text-left lg:text-5xl">
              Humble Home Network
            </h1>
            <div className="-mx-4 -mb-10 -mt-4 flex flex-col sm:-m-4 md:flex-row">
              {/* Card Homelab */}
              <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/2 lg:items-start lg:text-left">
                <div className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-backgroundLight text-dark dark:bg-backgroundDark dark:text-light">
                  <HiOutlineServerStack size={24} />
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
                  className="group/hoverLeft mx-0 my-4 inline-flex items-center font-semibold text-primary md:mb-2 lg:mb-0"
                >
                  Explore
                  <div className="ml-2 h-4 w-4 transition-all group-hover/hoverLeft:ml-4">
                    <HiOutlineArrowRight size={15} />
                  </div>
                </button>
              </div>

              {/* Card Learning */}
              <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/2 lg:items-start lg:text-left 2xl:whitespace-nowrap">
                <div className="mb-5 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-backgroundLight text-dark dark:bg-backgroundDark dark:text-light">
                  <HiOutlineAcademicCap size={24} />
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
                  className="group/hoverLeft mx-0 inline-flex items-center font-semibold text-primary md:mb-2 lg:mb-0"
                >
                  Learn More
                  <div className="ml-2 h-4 w-4 transition-all group-hover/hoverLeft:ml-4">
                    <HiOutlineArrowRight size={15} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* Banner and credit to HomeLab gif */}
          <Link
            href="https://myhomelab.gr/"
            className="flex flex-col text-center font-semibold hover:text-primary hover:underline"
            target="_blank"
          >
            <Image
              className="w-auto md:max-w-md"
              alt="Banner credit"
              src={Banner}
            />
            <span className="mt-2 transition">Zois Roupas</span>
          </Link>
        </div>
      </section>
    </Navbar>
  );
};

export default Landing;
