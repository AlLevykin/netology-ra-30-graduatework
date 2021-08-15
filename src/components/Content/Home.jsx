import Banner from "../../pages/Banner";
import Catalog from "./Catalog";
import TopSales from "./TopSales";

const Home = () =>
    <div className="col">
        <Banner />
        <TopSales />
        <Catalog />
    </div>

export default Home;