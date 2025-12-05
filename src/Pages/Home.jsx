import Banner from "../Components/Banner/Banner";
import Categories from "../Components/Categories/Categories";
import CategoryName from "../Components/CategoryName/CategoryName";
import ExploreRecipes from "../Components/ExploreRecipes/ExploreRecipes";
import Journal from "../Components/Journal/Journal";
import PromoBanner from "../Components/PromoBanner/PromoBanner";
import RecipeHighlights from "../Components/RecipeHighlights/RecipeHighlights";
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
                      <RecipeHighlights></RecipeHighlights>
                 <CategoryName></CategoryName>
                  <Journal></Journal>
                  
               
            </main>
             
        </div>
    );
};

export default Home;