import { FetchRestaurantBySlug } from "../../../services/fetchRestaurantsBySlug";
import RestaurantHeader from "./components/RestaurantHeader";
import "react-datepicker/dist/react-datepicker.css";


export function generateMetadata({params}:{params: {slug: string}}){
  const pageName = params.slug.split("-"); 
  for (let i = 0; i < pageName.length; i++){
    pageName[i] = pageName[i][0].toUpperCase() + pageName[i].substring(1)
  }
  const sPageName = `${pageName.join(" ")}`
  return {title: sPageName}
}


async function RestaurantLayout({ children, params }: { children: React.ReactNode; params: {slug: string} }) {

  const restaurant = await FetchRestaurantBySlug(params.slug);


  return (
      <>
        <RestaurantHeader name={params.slug} image={restaurant.main_image}/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          {children}
        </div>
      </>
  );
}

export default RestaurantLayout;

