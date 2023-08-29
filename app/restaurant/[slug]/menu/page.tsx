import { PrismaClient } from "@prisma/client";
import Menu from "../components/menu";
import RestaurantNavBar from "../components/restaurantNavBar";


const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items_id: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }
  return restaurant.items_id;
};

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
}
