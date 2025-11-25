import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import ExploreRecipes from "../Components/ExploreRecipes/ExploreRecipes";
import PromoBanner from "../Components/PromoBanner/PromoBanner";
import Videos from "../Components/Videos/Videos";



const Home = () => {
    return (
        <div className=" font-poppins">
            <main>
                 <Banner></Banner>
                 <ExploreRecipes></ExploreRecipes>
                 <PromoBanner></PromoBanner>
                 <Categories></Categories>
                <Videos></Videos>
            </main>
             
        </div>
    );
};

export default Home;