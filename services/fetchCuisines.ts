import { prisma } from "../utils/constants"

export const FetchCuisines = async() => {
    const cuisines = await prisma.cuisine.findMany()
    return cuisines
}

