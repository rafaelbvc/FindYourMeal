import Stars from "../../../components/stars";

type ReviewCardType = {
  review: {
    first_name: string;
    last_name: string;
    text: string;
    rating: number;
  };
};

function ReviewCard({ review }: ReviewCardType) {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl">{`${review.first_name.slice(
              0,
              1
            )} ${review.last_name.slice(0, 1)}`}</h2>
          </div>
          <p className="text-center">
            {" "}
            {review.first_name} <p />
            {review.last_name}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="mt-5">
              <div className="flex mr-5 mb-2">
                {Stars(review.rating)}
              </div>
              <p className="text-lg font-light">{review.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
