"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import { ReactTyped } from "react-typed";
import { StyledHeader, StyledTable } from "./style";

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
      <StyledHeader>
        <ReactTyped
          className="typed-text"
          strings={["Train Like an Athlete", "Built for Everyone"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </StyledHeader>
      <StyledTable>
        <thead>
          <tr>
            <th>Activity Kind</th>
            <th>Unit</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(activityData).map((activity, index) => (
            <tr key={index}>
              <td>{activity.activityKind}</td>
              <td>{activity.unit}</td>
              <td>{activity.value}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
