import Banner from "../Components/Banner/Banner";
import ExploreRecipes from "../Components/ExploreRecipes/ExploreRecipes";



const Home = () => {
    return (
        <div className=" font-poppins">
            <main>
                 <Banner></Banner>
                 <ExploreRecipes></ExploreRecipes>
            </main>
             
        </div>
    );
};

export default Home;