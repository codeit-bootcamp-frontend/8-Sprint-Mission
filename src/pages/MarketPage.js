import Navbar from "../components/Navbar";
import AllItems from "../components/AllItems";
import BestItems from "../components/BestItems";

function MarketPage() {
  return (
    <>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="wrapper">
        <BestItems />
        <AllItems />
      </div>
    </>
  );
}

export default MarketPage;
