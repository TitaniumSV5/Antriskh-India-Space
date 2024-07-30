import React from "react";

export default function Skeleton1() {
  return (
    <section className="bg-slate-500 py-20 ">
      <div className="container">
        <div className="mx-auto w-full max-w-[570px] space-y-4">
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-1 to-gray-4 "></div>
          <div className="h-3 w-4/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 "></div>
          <div className="h-3 w-5/6 rounded-full bg-gradient-to-r from-gray-1 to-gray-4 "></div>
          <div className="h-3 w-full rounded-full bg-gradient-to-r from-gray-1 to-gray-4 "></div>
        </div>
      </div>
    </section>
  );
}
