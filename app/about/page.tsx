import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navigation/Navbar";
import Banner from "@/public/images/Banner.gif";

const About = () => {
  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
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
          <article className="container mt-16 max-w-3xl text-dark dark:text-light">
            <h2 className="my-4 font-bold text-muted">First title?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              adipisci dolores possimus ab! Ullam ad cum, fugit aliquid laborum
              sunt praesentium sit earum quibusdam nulla omnis? Earum mollitia
              blanditiis debitis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              adipisci dolores possimus ab! Ullam ad cum, fugit aliquid laborum
              sunt praesentium sit earum quibusdam nulla omnis? Earum mollitia
              blanditiis debitis!
            </p>
            <h2 className="my-4 font-bold text-muted">Second title?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              adipisci dolores possimus ab! Ullam ad cum, fugit aliquid laborum
              sunt praesentium sit earum quibusdam nulla omnis? Earum mollitia
              blanditiis debitis!
            </p>
            <h2 className="my-4 font-bold text-muted">Third title?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              adipisci dolores possimus ab! Ullam ad cum, fugit aliquid laborum
              sunt praesentium sit earum quibusdam nulla omnis? Earum mollitia
              blanditiis debitis!
            </p>
            <h2 className="my-4 font-bold text-muted">Final title?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              adipisci dolores possimus ab! Ullam ad cum, fugit aliquid laborum
              sunt praesentium sit earum quibusdam nulla omnis? Earum mollitia
              blanditiis debitis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto voluptas ipsum quaerat sunt velit
              iste itaque nisi, molestias mollitia et eos nemo laboriosam
              ratione officiis ducimus sed deserunt quas rerum.
            </p>
          </article>
        </section>
      </Navbar>
    </main>
  );
};

export default About;
