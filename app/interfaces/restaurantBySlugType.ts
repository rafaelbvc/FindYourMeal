import { Review } from "@prisma/client";

export default interface FetchRestaurantBySlug {
    id: number;
    name: string;
    images: string[];
    description: string;
    reviews: Review[];
    slug: string;
    open_time: string,
    close_time: string,
    main_image: string,
  }