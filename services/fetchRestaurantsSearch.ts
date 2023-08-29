import { prisma } from "../utils/constants";
import {RestaurantCardType} from "../app/interfaces/restaurantCardType";

export const FetchRestaurantsSearch = async (): Promise<RestaurantCardType[]> => {
    const restaurants = await prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true, 
        price: true,
        reviews: true,
        slug: true,
      },
    });
    return restaurants;
  };
