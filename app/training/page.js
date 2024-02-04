"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import { StyledHeader } from "./style";

async function getData() {
  const res = await fetch("http://localhost:3000/api/training");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default function Page() {
  const [activityData, setActivityData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setActivityData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <StyledHeader>Activity Data</StyledHeader>
      <ul>
        {Object.values(activityData).map((activity, index) => (
          <li key={index}>
            {activity.activityKind}
            <li>{activity.unit}</li>
            <li>{activity.value}</li>
          </li>
        ))}
      </ul>
    </>
  );
}
