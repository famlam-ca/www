"use client";

import { useEffect } from "react";
import Link from "next/link";

import { HiOutlineCpuChip, HiOutlineCircleStack } from "react-icons/hi2";
import { LuMemoryStick } from "react-icons/lu";

import servers from "@/server_stats";

import CircularProgressbar from "@/components/Dashboard/CircularProgressbar/CircularProgressbar";
import RightColumn from "@/components/Dashboard/RightColumn";
import Sidebar from "@/components/Navigation/Sidebar";
import Header from "@/components/Dashboard/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | HHN";
  });

  return (
    <Sidebar>
      <section className="mx-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-dark dark:text-light">Dashboard</h1>
            <small className="text-muted">Server Hardware Statistics</small>
          </div>
          <Header />
        </div>

        {/* Hardware Summary */}
        <div className="md:flex md:gap-2 lg:gap-4 xl:gap-6">
          {/* <!-- CPU usage --> */}
          <div className="mt-4 w-full rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
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
          <div className="mt-4 w-full rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
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
          <div className="mt-4 w-full rounded-cardRadius bg-backgroundLight p-cardPadding shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:shadow-Dark dark:hover:shadow-none">
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
        <div className="my-8">
          <h2 className="mb-3 text-dark dark:text-light">Servers</h2>
          <div className="rounded-cardRadius bg-backgroundLight p-cardPadding text-center text-dark shadow-Light hover:shadow-none dark:bg-backgroundVariant dark:text-light dark:shadow-Dark dark:hover:shadow-none">
            <Table>
              <TableHeader>
                <TableRow className="whitespace-nowrap text-base font-semibold">
                  <TableHead className="max-md:hidden">Status</TableHead>
                  <TableHead>Server Name</TableHead>
                  <TableHead>CPU Usage</TableHead>
                  <TableHead>Memory Usage</TableHead>
                  <TableHead className="max-md:hidden">Uptime</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-dark dark:text-light">
                {servers.map((server) => (
                  <TableRow key={server.status}>
                    {server.status === "Up" ? (
                      <TableCell className="text-success max-md:hidden">
                        {server.status}
                      </TableCell>
                    ) : (
                      <TableCell className="text-alert max-md:hidden">
                        {server.status}
                      </TableCell>
                    )}
                    <TableCell>{server.serverName}</TableCell>
                    {server.cpuUsage <= "50%" ? (
                      <TableCell className="text-success">
                        {server.cpuUsage}
                      </TableCell>
                    ) : (
                      <TableCell className="text-alert">
                        {server.cpuUsage}
                      </TableCell>
                    )}
                    <TableCell>{server.memoryUsage}</TableCell>
                    <TableCell className="max-md:hidden">
                      {server.uptime}
                    </TableCell>
                    <TableCell className="text-right text-primary max-md:hidden"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption className="text-muted">
                Hardware Statics for VMs and Containers
              </TableCaption>
            </Table>
          </div>
        </div>
      </section>
      <RightColumn />
    </Sidebar>
  );
};

export default Dashboard;
