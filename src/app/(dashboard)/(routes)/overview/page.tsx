"use client";
import React from "react";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@clerk/nextjs";
import TotalSpent from "@/components/TotalSpent";
import PieCard from "@/components/PieCard";
import WeeklyRevenue from "@/components/WeeklyRevenue";
import CheckTable from "@/components/charts/CheckTable";
import tableDataCheck from "@/lib/tableDataCheck";

const data = {
  labels: ["2023-12-01", "2023-12-02", "2023-12-03"], // replace with your dates
  datasets: [
    {
      label: "Engagement Score",
      data: [3, 6, 1], // replace with your scores
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

function Overview() {
  const user = useUser();
  return (
    <div className="h-full bg-white">
      <div className="w-full flex">
        <Header title="Overview" />
      </div>

      <Tabs defaultValue="analytics" className="pt-8">
        <TabsList className="border-b w-full flex justify-start opacity-100 top-48 z-100">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="manage">Manage Members</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics">
          <div className="p-10">
            <div className="flex flex-row items-center gap-6 w-full justify-start">
              <div className="text-5xl">👋🏻</div>
              <div>
                <div className="text-xl font-semibold uppercase">Welcome</div>
                <div className="text-3xl text-[#00A198]">
                  {user?.user?.fullName}
                </div>
              </div>
            </div>

            <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                <div className="text-[1rem] font-medium text-black">
                  Experiences Completed
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                    className="h-14 w-14 rounded-full bg-gray-100 p-3 text-[#00A198]"
                  >
                    <path d="M180.782-100.782v-718.436h395.045l16.226 80h227.165v438.436H504.173l-16-80h-201.39v280H180.782Z"></path>
                  </svg>
                  <div className="flex items-end gap-2 flex-wrap">
                    <div>
                      <div className="text-3xl font-normal">10</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                <div className="text-[1rem] font-medium text-black">
                  Active Members
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="#00A198"
                    viewBox="0 -960 960 960"
                    className="h-14 w-14 rounded-full bg-gray-100 p-3 text-[#00A198]"
                  >
                    <path d="M145.087-65.869q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-469.826q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h230.782v-129.826q0-29.652 19.913-49.913 19.913-20.261 50.544-20.261h68.196q29.652 0 49.913 20.261 20.261 20.261 20.261 49.913v129.826h230.217q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v469.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H145.087ZM232-241.913h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5t-48.5 13.5q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q23 0 38.5-15.5t15.5-38.5q0-23-15.5-38.5t-38.5-15.5q-23 0-38.5 15.5t-15.5 38.5q0 23 15.5 38.5t38.5 15.5Zm214-63h170v-50H568v50ZM451.13-600.174h58.305v-219.261H451.13v219.261Z"></path>
                  </svg>
                  <div className="flex items-end gap-2 flex-wrap">
                    <div>
                      <div className="text-3xl font-normal">20</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                <div className="text-[1rem] font-medium text-black">
                  New Waitlist Signups
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                    className="h-14 w-14 rounded-full bg-gray-100 p-3 text-[#00A198]"
                  >
                    <path d="M166.783-140.782q-44.305 0-75.153-30.848-30.848-30.848-30.848-75.153v-466.434q0-44.305 30.848-75.153 30.848-30.848 75.153-30.848h626.434q44.305 0 75.153 30.848 30.848 30.848 30.848 75.153v466.434q0 44.305-30.848 75.153-30.848 30.848-75.153 30.848H166.783ZM480-415.694l313.217-200v-97.523L480-513.217l-313.217-200v97.523l313.217 200Z"></path>
                  </svg>
                  <div className="flex items-end gap-2 flex-wrap">
                    <div>
                      <div className="text-3xl font-normal">44</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-row gap-3 items-center p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="text-[#00A198] h-5 w-5"
                >
                  <g clipPath="url(#home-filled_svg__a)">
                    <path
                      fill="currentColor"
                      d="M15.686 6.521 8.615.236a.928.928 0 0 0-1.236 0L.315 6.52a.932.932 0 0 0-.25 1.022c.135.357.485.6.864.6.229 0 .45-.086.621-.236l.022-.021v7.185c0 .515.414.929.928.929h11a.927.927 0 0 0 .929-.929V7.886l.021.021c.172.15.393.236.622.236a.93.93 0 0 0 .614-1.621Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M6.65 10.05a.928.928 0 1 0-1.75.621A3.298 3.298 0 0 0 8 12.864a3.288 3.288 0 0 0 3.1-2.193.9.9 0 0 0-.035-.707.942.942 0 0 0-.53-.478.9.9 0 0 0-.706.035.906.906 0 0 0-.472.529c-.2.571-.743.95-1.35.95a1.443 1.443 0 0 1-1.35-.95H6.65Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="home-filled_svg__a">
                      <rect width="100%" height="100%" fill="#fff"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="font-medium text-2xl">Charts</div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <TotalSpent />
                <WeeklyRevenue />
              </div>

              <div className="mt-10">
                <div className="flex flex-col gap-3 p-3">
                  <div className="text-2xl font-medium">Monthly Stats</div>
                  <div className="font-light">
                    Get more detailed insights into how your membership program
                    has been doing in the past month.
                    <br />
                    <i className="text-sm">
                      Note that weekly and monthly stats are updated once every
                      24 hours so there might be a slight delay.
                    </i>
                  </div>

                  <div className="mt-5 gap-5 grid xl:grid-cols-2">
                    <PieCard />
                    <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
                      <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                        <div className="text-[1rem] font-medium text-black">
                          Portal Impressions
                        </div>
                        <div className="mt-3 flex items-center gap-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <div>
                              <div className="text-3xl font-normal">6</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                        <div className="text-[1rem] font-medium text-black">
                          Unique Visitors
                        </div>
                        <div className="mt-3 flex items-center gap-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <div>
                              <div className="text-3xl font-normal">2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                        <div className="text-[1rem] font-medium text-black">
                          Top Location
                        </div>
                        <div className="mt-3 flex items-center gap-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <div className="flex flex-row items-center gap-2">
                              <div className="text-3xl font-normal">
                                Calcutta
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                        <div className="text-[1rem] font-medium text-black">
                          Total Time Spent
                        </div>
                        <div className="mt-3 flex items-center gap-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <div className="flex flex-row items-end gap-2">
                              <div className="text-3xl font-normal">197</div>
                              <div className="text-base uppercase font-semibold text-gray-500">
                                minutes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                        <div className="text-[1rem] font-medium text-black">
                          Visits from iPhone App
                        </div>
                        <div className="mt-3 flex items-center gap-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <div>
                              <div className="text-3xl font-normal">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-col gap-3 p-3">
                  <div className="text-2xl font-medium">Other Stats</div>
                  <div className="font-light">
                    Get other stats &amp; information about your membership
                    program.
                  </div>

                  <div className="gap-5 mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                      <div className="text-[1rem] font-medium text-black">
                        Members with Apple Pass
                      </div>
                      <div className="mt-3 flex items-center gap-5">
                        <div className="flex items-end gap-2 flex-wrap">
                          <div>
                            <div className="text-3xl font-normal">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                      <div className="text-[1rem] font-medium text-black">
                        Circulating Points
                      </div>
                      <div className="mt-3 flex items-center gap-5">
                        <div className="flex items-end gap-2 flex-wrap">
                          <div className="flex flex-row items-end gap-2">
                            <div className="text-3xl font-normal">600</div>
                            <div className="text-base uppercase font-semibold text-gray-500">
                              points
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                      <div className="text-[1rem] font-medium text-black">
                        Experiences Created
                      </div>
                      <div className="mt-3 flex items-center gap-5">
                        <div className="flex items-end gap-2 flex-wrap">
                          <div>
                            <div className="text-3xl font-normal">1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="manage">
          <div className="p-10">
            <div>
              <div className="text-2xl font-medium">Member Management</div>
              <div className="font-light tracking-wide mt-2">
                Easily invite, add, or remove members. Manage your membership
                list seamlessly here.
              </div>
              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                  <div className="font-medium text-sm">Active Members</div>
                  <div className="flex flex-row gap-5 mt-5 mb-3">
                    <div className="text-5xl font-light">20</div>
                    <div className=""></div>
                  </div>
                </div>
                <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                  <div className="font-medium text-sm">Members in Waitlist</div>
                  <div className="flex flex-row gap-5 mt-5 mb-3">
                    <div className="text-5xl font-light">40</div>
                    <div className=""></div>
                  </div>
                </div>
                <div className="rounded-2xl border-none bg-white p-4 shadow-xl w-full">
                  <div className="font-medium text-sm">Membership Revenue</div>
                  <div className="flex flex-row gap-5 mt-5 mb-3">
                    <div className="text-5xl font-light">$230.00</div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-2xl font-medium">All Members</div>
              <div className="font-light tracking-wide mt-2">
                Invite, manage and view your invited members.{" "}
                <a
                  target="_blank"
                  className="text-[#00A198] font-medium underline"
                  href="https://kalder.substack.com/"
                >
                  Learn more
                </a>{" "}
              </div>
              <div className="mt-5">
                <CheckTable tableData={tableDataCheck} />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Overview;
