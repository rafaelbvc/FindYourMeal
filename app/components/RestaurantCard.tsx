import Link from "next/link";
import  {RestaurantCardType}  from "../interfaces/restaurantCardType";
import Price from "./price";
import Stars from "./stars";
import { calculateReviewRatingAverage } from "../../utils/calculateReviewRatingAverage";

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.main_image} alt="imagem" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="flex self-center">{Stars(calculateReviewRatingAverage(restaurant.reviews))}</div>
            {restaurant.reviews?.length <= 1 ? (<p className="ml-2 self-center">{`${restaurant.reviews.length} Review`}</p>):(
              <p className="ml-2 self-center">{`${restaurant.reviews.length} Reviews`}</p>
            )}
            
          </div>
        </div>
        <div className="flex text-reg font-light capitalize ml-1">
          <p className=" mr-3">{restaurant.cuisine.name}</p>
          <Price price={restaurant.price}/>
          <p>{restaurant.location.name}</p>
        </div>
        <p className="text-sm mt-1 ml-1 font-bold">Booked 29 times today</p>
      </Link>
    </div>
  );
}
