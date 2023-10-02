"use client";

import { useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";

import type { Database } from "@/types_db";

import Navbar from "@/components/Navigation/Navbar";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const { session } = useSessionContext();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (session) {
      router.refresh();
    }
  };

  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <Navbar>
        <section className="flex justify-center">
          <div className="relative mt-16 flex h-auto w-auto items-center justify-center rounded-radius2 bg-light shadow-Light dark:bg-backgroundVariant dark:shadow-Dark md:h-register md:w-entry lg:mt-16">
            <div className="container box-border flex flex-col items-center justify-center p-10">
              <h2 className="text-center text-4xl">Register</h2>
              <form className="container">
                <div className="flex items-center justify-between">
                  <div className="group/inputBox container relative mx-0 mt-7 h-12 border-b-2 border-solid border-primary invalid:border-alert invalid:text-alert focus-within:border-opacity-75">
                    <div className="pointer-events-none absolute left-12 top-1/4 -translate-x-2/4 text-base font-medium text-dark transition-all duration-200 ease-in-out after:ml-0.5 after:text-alert after:content-['*'] group-valid/inputBox:-top-5 group-focus-within/inputBox:-top-5 dark:text-light">
                      Username
                    </div>
                    <span className="absolute right-2 text-2xl leading-10">
                      <HiOutlineUser size={24} />
                    </span>
                    <input
                      className="container h-full border-none bg-transparent py-0 pl-9 pr-0 text-base font-semibold text-dark outline-none dark:text-light"
                      type="username"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="group/inputBox container relative mx-0 mt-7 h-12 border-b-2 border-solid border-primary invalid:border-alert invalid:text-alert focus-within:border-opacity-75">
                    <div className="pointer-events-none absolute left-8 top-1/4 -translate-x-2/4 text-base font-medium text-dark transition-all duration-200 ease-in-out after:ml-0.5 after:text-alert after:content-['*'] group-valid/inputBox:-top-5 group-focus-within/inputBox:-top-5 dark:text-light">
                      Email
                    </div>
                    <span className="absolute right-2 text-2xl leading-10">
                      <HiOutlineEnvelope size={24} />
                    </span>
                    <input
                      className="container h-full border-none bg-transparent py-0 pl-9 pr-0 text-base font-semibold text-dark outline-none dark:text-light"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="group/inputBox container relative mx-0 my-7 h-12 border-b-2 border-solid border-primary invalid:border-alert invalid:text-alert focus-within:border-opacity-75">
                    <div className="pointer-events-none absolute left-11 top-1/4 -translate-x-2/4 text-base font-medium text-dark transition-all duration-200 ease-in-out after:ml-0.5 after:text-alert after:content-['*'] group-valid/inputBox:-top-5 group-focus-within/inputBox:-top-5 dark:text-light">
                      Password
                    </div>
                    <span className="absolute right-2 text-2xl leading-10">
                      <HiOutlineLockClosed size={24} />
                    </span>
                    <input
                      className="container h-full border-none bg-transparent py-0 pl-9 pr-0 text-base font-semibold text-dark outline-none dark:text-light"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                </div>

                <div className="mx-0 -mt-4 mb-4 flex text-xs font-medium">
                  <Checkbox required />
                  <label className="flex items-center justify-center gap-1">
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="underline transition hover:text-primary"
                    >
                      terms & conditions
                    </a>
                  </label>
                </div>

                <div className="flex flex-col">
                  <button
                    onClick={handleSignUp}
                    className="container h-10 rounded-radius1 bg-primary text-base font-semibold text-light transition hover:bg-opacity-75"
                    type="submit"
                  >
                    Register
                  </button>
                  <Link
                    className="container mx-0 mb-2 mt-6 h-10 rounded-radius1 border-2 border-solid border-primary bg-transparent text-center font-semibold transition hover:border-opacity-75 hover:bg-primary hover:hover:bg-opacity-75"
                    href="/login"
                  >
                    <button
                      className="my-0 p-2 text-dark dark:text-light"
                      type="button"
                    >
                      OR LOGIN HERE
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Navbar>
    </main>
  );
};

export default Register;
