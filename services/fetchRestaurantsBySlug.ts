import FetchRestaurantBySlug from "../app/interfaces/restaurantBySlugType";
import { prisma } from "../utils/constants";

export const FetchRestaurantBySlug = async (
    slug: string,
  ): Promise<FetchRestaurantBySlug> => {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        images: true,
        description: true,
        reviews: true,
        slug: true,
        open_time: true,
        close_time: true,
        main_image: true,
      },
    });
  
    if (!restaurant) {
      throw new Error("Page not found");
    }
  
    return restaurant;
  };