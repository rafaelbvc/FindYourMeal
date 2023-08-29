import { PRICE } from "@prisma/client";

export interface SearchParamsType {
    city?: string | undefined,
    cuisine?: string | undefined,
    price?: PRICE,
};
