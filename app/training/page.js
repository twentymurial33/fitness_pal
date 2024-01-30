import React from "react";
import Header from "../../components/common/Header";

async function getData() {
  const res = await fetch("/api/training");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page(activityData) {
  const data = await getData();
  return (
    <div>
      <Header />
      <h1>Activity Data</h1>
      <ul>
        {activityData.map((activity, index) => {
          <li key={index}>
            {activity.activityKind}: {activity.value} {activity.unit}
          </li>;
        })}
      </ul>
    </div>
  );
}
