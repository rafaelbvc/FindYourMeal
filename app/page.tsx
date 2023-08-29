import { FetchRestaurants } from "../services/fetchRestaurants";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const Home = async () => {
  const restaurants = await FetchRestaurants();

  return (
    <main>
      <Header />
      <div className="mx-auto py-3 px-48 mt-10 flex flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Home;
