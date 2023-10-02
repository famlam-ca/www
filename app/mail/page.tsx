"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Navigation/Sidebar";
import Header from "@/components/Dashboard/Header";
import RightColumn from "@/components/Dashboard/RightColumn";

const Mail = () => {
  useEffect(() => {
    document.title = "Email | HHN";
  });

  return (
    <Sidebar>
      <section className="mx-4 gap-7 md:mx-8 lg:m-auto lg:ml-0 lg:mr-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-dark dark:text-light">Email</h1>
            <small className="text-muted">Inbox</small>
          </div>
          <Header />
        </div>
        <iframe
          src="https://mail.famlam.ca"
          className="h-[calc(100vh-7rem)] w-full"
        />
      </section>
      <RightColumn />
    </Sidebar>
  );
};

export default Mail;
