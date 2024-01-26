import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import GymCard from "../components/GymCards";
export default function Page() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ backgroundColor: "#cf76a7" }}>
        <GymCard />
      </div>
    </>
  );
}
