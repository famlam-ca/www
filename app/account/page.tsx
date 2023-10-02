"use client";

import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Navigation/Sidebar";

const Account = () => {
  return (
    <Sidebar>
      <section className="max-md:grid-cols-dashboardMd xl:grid-cols-dashboardXl mx-4 grid gap-7 md:mx-8 lg:m-auto lg:ml-0 lg:mr-8 lg:grid-cols-dashboardLg ">
        <h1>Account</h1>

        <Header />
      </section>
    </Sidebar>
  );
};

export default Account;
