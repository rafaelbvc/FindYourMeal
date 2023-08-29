import { Cuisine, Location, Review, PRICE } from "@prisma/client";

export interface FetchRestaurantsByFiltersType {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}
