import { prisma } from "../utils/constants"

export const FetchLocations = async() => {
    const locations = await prisma.location.findMany()
    return locations
}

