"use client";

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import GymCard from "../components/GymCards";
export default function Page() {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <GymCard />
      </div>
    </>
  );
}
