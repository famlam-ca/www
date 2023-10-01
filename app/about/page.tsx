import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navigation/Navbar";
import Banner from "@/public/images/Banner.gif";
import Logo from "@/components/Logo";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <main className="mt-0 h-full bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <Navbar>
        <section className="flex flex-col items-center justify-center">
          <header className="flex w-full flex-col items-center">
            <h1 className="text-center font-bold tracking-tighter text-dark dark:text-light md:text-5xl">
              About
            </h1>
            <Link
              href="https://myhomelab.gr/"
              className="group/banner flex flex-col text-center font-semibold"
              target="_blank"
            >
              <Image
                className="w-auto md:max-w-md"
                alt="Banner credit"
                src={Banner}
              />
              <span className="mt-2 text-muted transition group-hover/banner:text-primary group-hover/banner:underline">
                myhomelab.gr
              </span>
            </Link>
          </header>

          <article className="container my-16 max-w-3xl break-words leading-relaxed tracking-wide text-dark dark:text-light">
            {/* Why? */}
            <div className="my-6">
              <h2 className="font-bold text-muted">Why? - Reasons Why.</h2>
              <div className="h-[1px] rounded-full bg-muted"></div>
            </div>
            <p>
              Initially my plan was to create a place for me to collect all and
              any data, that I wished to display, in a central location. This
              lead me down the path of learning basic{" "}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/HTML5"
                className="text-primary underline-offset-2 hover:underline"
              >
                HTML5
              </Link>{" "}
              and{" "}
              <Link
                target="_blank"
                href="https://en.wikipedia.org/wiki/CSS"
                className="text-primary underline-offset-2 hover:underline"
              >
                CSS
              </Link>
              .
            </p>
            <p>...</p>

            {/* How it started */}
            <div className="my-6">
              <h2 className="font-bold text-muted">
                How It Started? - What I Did To Get Here.
              </h2>
              <div className="h-[1px] rounded-full bg-muted"></div>
            </div>
            <p>
              Way back, around 2015, I started to build minecraft servers for my
              friends and myself. This started me off on my journey to develop a
              homelab. Although in the beginning services were running on my PC,
              I would soon get my hand on spare parts to use as my first
              servers. The lab has come a long way from then, even though the
              machines are still old PCs, they are much more powerful.
            </p>
            <p className="mt-2">
              The upgrading over the years has allowed to me to run more and
              more services. At some point in adding to my network I had the
              idea of localizing management, since I was jumping around quite a
              lot between VMs, containers, and GUIs. Eventually I decided to
              start creating a website, with the plan to use established systems
              to manage everything in one interface.
            </p>
            <p className="mt-2">
              As previously mentioned I wanted to create a localized web
              interface for services running in my network. And after I had
              created my first{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">webpage</Button>
                </HoverCardTrigger>
                <Link target="_blank" href="https://old.famlam.ca">
                  <HoverCardContent className="group/hoverContent w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage
                          src={"https://github.com/SlickYeet/famlam.ca"}
                        />
                        <AvatarFallback>HHN</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-primary group-hover/hoverContent:underline">
                          old.famlam.ca
                        </h4>
                        <p className="text-sm">
                          The first look of www.famlam.ca.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </Link>
              </HoverCard>{" "}
              using HTML and CSS I moved on, trying to implement some
              functionally, since at the moment it was just an interface.
              However, anyone with any amount of experience with a web UI would
              realize that the old UI was hardly fit to host any functionality,
              such as server statics.
            </p>
            <p className="mt-2">
              This is why I went through several iterations of the now called
              dashboard.{" "}
              <span className="text-muted">
                {"(The first being the one at old.famlam.ca)"}
              </span>{" "}
              During this process I started to create other pages, at the
              beginning simply because I was procrastinating the making/redesign
              of the dashboard,
            </p>
            {/* End Goal? */}
            <div className="my-6">
              <h2 className="font-bold text-muted">
                End Goal? - What I Want Out Of This Project.
              </h2>
              <div className="h-[1px] rounded-full bg-muted"></div>
            </div>
            <p>Localized web management.</p>
            <p>...</p>
          </article>
        </section>
      </Navbar>
    </main>
  );
};

export default About;
