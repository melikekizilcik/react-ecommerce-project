//import components
import DesktopShopHeader from "../../components/desktop-shop-header/DesktopShopHeader";
import Clients from "../../components/desktop-clients/Clients";

//import styles
import "./Home.css";
import HomeBody from "../../components/home-body/HomeBody";

function Home() {
  return (
    <div className="Home">
      <DesktopShopHeader />
      <Clients />
      <HomeBody />
    </div>
  );
}

export default Home;
