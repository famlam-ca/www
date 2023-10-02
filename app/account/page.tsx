"use client";

import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Navigation/Sidebar";

const Account = () => {
  return (
    <main className="mt-0 h-screen bg-backgroundLight  dark:bg-backgroundDark">
      <section className="mx-4 grid gap-7 max-md:grid-cols-dashboardMd md:mx-8 lg:m-auto lg:ml-0 lg:mr-8 lg:grid-cols-dashboardLg xl:grid-cols-dashboardXl ">
        <Sidebar />
        <h1>Account</h1>

        <Header />
      </section>
    </main>
  );
};

export default Account;
