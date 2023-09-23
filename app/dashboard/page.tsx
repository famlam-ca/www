"use client";

import Link from "next/link";

import { HiOutlineCpuChip, HiOutlineCircleStack } from "react-icons/hi2";
import { LuMemoryStick } from "react-icons/lu";

import CircularProgressbar from "@/components/Dashboard/CircularProgressbar/CircularProgressbar";
import RightColumn from "@/components/Dashboard/RightColumn/RightColumn";
import Sidebar from "@/components/Navigation/Sidebar";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <main className="mt-0 h-full bg-backgroundLight  dark:bg-backgroundDark">
      <section className="mx-4 grid gap-7 max-md:grid-cols-dashboardMd md:mx-8 lg:m-auto lg:ml-0 lg:mr-8 lg:grid-cols-dashboardLg xl:grid-cols-dashboardXl">
        <Sidebar />
        <div className="my-6">
          <h1 className="text-dark dark:text-light">Dashboard</h1>
          <small className=" block text-muted">
            Server Hardware Statistics
          </small>
          {/* <!-- Hardware summary --> */}
          <div className="grid lg:grid-cols-1 lg:gap-0 xl:grid-cols-3 xl:gap-6">
            {/* <!-- CPU usage --> */}
            <div className="mt-4 rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
              <HiOutlineCpuChip
                className="rounded-full bg-primary p-2 text-3xl text-light dark:text-dark"
                size={40}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-dark dark:text-light">
                  CPU Usage
                </h3>
                <div className="h-28 w-28">
                  <CircularProgressbar />
                </div>
              </div>
              <small className="text-muted">Last 5 min</small>
            </div>

            {/* <!-- Memory usage --> */}
            <div className="mt-4 rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
              <LuMemoryStick
                className="rounded-full bg-alert p-2 text-3xl text-light dark:text-dark"
                size={40}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-dark dark:text-light">
                  Memory Usage
                </h3>
                <div className="h-28 w-28">
                  <CircularProgressbar />
                </div>
              </div>
              <small className="text-muted">Last 5 min</small>
            </div>

            {/* <!-- Disk usage --> */}
            <div className="mt-4 rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
              <HiOutlineCircleStack
                className="rounded-full bg-success p-2 text-3xl text-light dark:text-dark"
                size={40}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-dark dark:text-light">
                  Disk Space
                </h3>
                <div className="h-28 w-28">
                  <CircularProgressbar />
                </div>
              </div>
              <small className="text-muted">Last 5 min</small>
            </div>
          </div>

          {/* <!-- Server states --> */}
          <div className="mt-8">
            <h2 className="mb-3 text-dark dark:text-light">Servers</h2>
            <div className="rounded-cardRadius bg-backgroundLight p-cardPadding text-center text-dark shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:text-light dark:shadow-Dark dark:hover:shadow-none">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Server name</th>
                    <th>CPU Usage</th>
                    <th>Memory Usage</th>
                    <th className="">Uptime</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="success">Up</td>
                    <td>NPM</td>
                    <td className="success">3%</td>
                    <td className="warning">72%</td>
                    <td className="success">7:31</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="success">Up</td>
                    <td>gs01</td>
                    <td className="success">6%</td>
                    <td className="success">34%</td>
                    <td className="success">7:42</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="success">Up</td>
                    <td>gs02</td>
                    <td className="success">1%</td>
                    <td className="success">6%</td>
                    <td className="success">7:42</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="success">Up</td>
                    <td>WebSrv</td>
                    <td className="success">0.2%</td>
                    <td className="success">56%</td>
                    <td className="success">7:36</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="success">Up</td>
                    <td>SQL-DB</td>
                    <td className="success">1%</td>
                    <td className="success">49%</td>
                    <td className="success">7:39</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="success">Up</td>
                    <td>DNS</td>
                    <td className="success">0.6%</td>
                    <td className="warning">70%</td>
                    <td className="success">7:42</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="alert">Down</td>
                    <td>PrintSrv</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <Link
                        className="text-primary hover:underline"
                        href="javascript:void(0)"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link
              className="text-center text-primary hover:underline mt-4 block"
              href="javascript:void(0)"
            >
              Show All
            </Link>
          </div>
        </div>

        <RightColumn />
      </section>
    </main>
  );
};

export default Dashboard;
