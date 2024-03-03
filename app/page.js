"use client";

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import GymCard from "../components/GymCards";
import FlipCards from "../components/FlipCards";
export default function Page() {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <GymCard />
        <FlipCards />
      </div>
    </>
  );
}
