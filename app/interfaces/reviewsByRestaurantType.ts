import { Restaurant, Review, User } from "@prisma/client";

export interface ReviewsByRestaurantType {
    id: number,
    first_name: string,
    last_name: string,
    text: string,
    rating: number,
    restaurant: Restaurant,
    user: User,
}