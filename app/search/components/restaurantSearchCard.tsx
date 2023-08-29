import Link from "next/link";
import Price from "../../components/price";
import RestaurantSearchCartdType from "../../interfaces/restaurantSearchCardType";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";
import stars from "../../components/stars";

const RestaurantSearchCard = ({restaurant}: RestaurantSearchCartdType) => {


  const calculateRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "";
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <img
        src={restaurant.main_image}
        alt="Image"
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex bm-2 self-center">{stars(calculateReviewRatingAverage(restaurant.reviews))}</div>
          <p className="ml-2 text-sm self-center">
            {calculateRatingText()}
          </p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">
              {restaurant.cuisine.name}
            </p>
            <p className="mr-4 capitalize">
              {restaurant.location.name}
            </p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSearchCard;
