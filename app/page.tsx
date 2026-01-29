import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link href={"/admin/dashboard"} className="text-blue-500 underline
      ">To admin Dashboard</Link>
    </div>
  );
};

export default page;
