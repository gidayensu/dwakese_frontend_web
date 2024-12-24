// 'use client'

import { Sidebar } from "@/components/dashboard/Sidebar";

export default function Dashboard() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Sidebar />
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}
      {/* </footer> */}
    </div>
  );
}
