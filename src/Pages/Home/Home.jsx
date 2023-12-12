import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";

import Categories from "../Categories/Categories";
import PopularBooks from "../PopularBooks/PopularBooks";
import Serveses from "../Serveses/Serveses";
import WeAreBest from "../WeAreBest/WeAreBest";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Serveses></Serveses>
            <PopularBooks></PopularBooks>
            <WeAreBest></WeAreBest>
            <Footer></Footer>
            
        </div>
        
    );
};

export default Home;