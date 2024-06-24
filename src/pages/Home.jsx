import "../assets/styles/home.css";
import HomeFooter from "../components/home/HomeFooter";
import HeaderNav from "../components/reusable/HeaderNav";
import HomeMain from "../components/home/HomeMain";

function Home() {
  return (
    <>
      <HeaderNav />
      <HomeMain />
      <HomeFooter />
    </>
  );
}

export default Home;
