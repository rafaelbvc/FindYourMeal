import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAverage";
import Stars from "../../../components/stars";

type ReviewType = {
  id: number,
  first_name: string,
  last_name: string,
  text: string,
  rating: number,
  restaurant_id: number,
  user_id: number,
  created_at: Date,
  updated_at: Date,
}



export default function Ratings({reviews}: { reviews: ReviewType[] }) {


  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <div>{Stars(calculateReviewRatingAverage(reviews))}</div>
        <div className="text-reg ml-3">{calculateReviewRatingAverage(reviews).toFixed(1)}</div>
        {reviews.length <= 1  ? (<p className="ml-2">{`${reviews.length} Review`}</p>):(
              <p className="ml-2">{`${reviews.length} Reviews`}</p>
            )}
      </div>
    </div>
  );
}
