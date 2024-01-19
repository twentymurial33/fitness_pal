import React from "react";

function Header() {
  const fetchData = async () => {
    const response = await fetch("/api/gyms");
    const data = response.json();
    console.log(data);
  };
  return <div>{fetchData}</div>;
}

export default Header;
