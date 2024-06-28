import BestCard from "./components/BestCard";
import AllCard from "./components/AllCard";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className="MarketPage">
      <BestCard />
      <AllCard />
    </div>
  );
}

export default MarketPage;
