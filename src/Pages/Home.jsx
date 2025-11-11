import Banner from "../Components/Banner/Banner";
import ExploreRecipes from "../Components/ExploreRecipes/ExploreRecipes";
import PromoBanner from "../Components/PromoBanner/PromoBanner";



const Home = () => {
    return (
        <div className=" font-poppins">
            <main>
                 <Banner></Banner>
                 <ExploreRecipes></ExploreRecipes>
                 <PromoBanner></PromoBanner>
            </main>
             
        </div>
    );
};

export default Home;