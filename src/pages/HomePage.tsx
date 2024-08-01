import GlobalNavBar from "components/@shared/GlobalNavBar";
import Footer from "components/home/Footer";

function HomePage() {
  return (
    <>
      <GlobalNavBar isMain={true} isLogin={false} />
      <Footer />
    </>
  );
}

export default HomePage;
