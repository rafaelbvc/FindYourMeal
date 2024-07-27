import { FetchRestaurants } from "../services/fetchRestaurants";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  
  const restaurants = await FetchRestaurants();

  return (
    <main>
      <Header />
      <div className="flex flex-wrap mx-auto w-[76%]  justify-center py-3 mt-10">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
