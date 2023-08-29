import { prisma } from "../utils/constants";
import { SearchParamsType } from "../app/interfaces/searchParamsType";


export const  FetchRestaurantsByFilters = async(
  searchParams: SearchParamsType
) => {
  const querySearch = await prisma.restaurant.findMany({
    where: {
      cuisine: {
        name: {
          equals: searchParams.cuisine?.toLocaleLowerCase(),
        },
      },
      location: {
        name: {
          equals: searchParams.city?.toLocaleLowerCase(),
        },
      },
      price: {
        equals: searchParams.price,
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
    },
  })
  if (!querySearch) {
    throw new Error("NULL");
  }
  return querySearch







  // const where: any = {};

  
  // if (searchParams.city) {
  //   const location = {
  //     name: {
  //       equals: searchParams.city.toLocaleLowerCase(),
  //     },
  //   };
  //   where.location = location;
  // } else return prisma.restaurant.findMany();

  // if (searchParams.cuisine) {
  //   const cuisine = {
  //     name: {
  //       equals: searchParams.cuisine.toLocaleLowerCase(),
  //     },
  //   };
  //   where.cuisine = cuisine;
  // } else return prisma.restaurant.findMany();

  // if (searchParams.price) {
  //   const price = {
  //     equals: searchParams.price,
  //   };
  //   where.price = price;
  // } else return prisma.restaurant.findMany();

  // const select = {
  //   id: true,
  //   name: true,
  //   main_image: true,
  //   price: true,
  //   cuisine: true,
  //   location: true,
  //   slug: true,
  // };

  // return prisma.restaurant.findMany({ where, select });


};
