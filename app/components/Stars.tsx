import Image from "next/image";
import FullStar from "../../public/stars/full-star.png";
import HalfStar from "../../public/stars/half-star.png";
import EmptyStar from "../../public/stars/empty-star.png";

function Stars(reviews: number) {
  const FullStarImage = (
    <Image src={FullStar} alt="full-star" className="w-3 h-3" />
  );
  const HalfStarImage = (
    <Image
      src={HalfStar}
      alt="half-star"
      className="w-3 h-3 transform -scale-x-100"
    />
  );
  const EmptyStarImage = (
    <Image src={EmptyStar} alt="empty-star" className="w-3 h-3" />
  );
  return (
    <div>
      {reviews === 5 ? (
        <div className="flex">
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 4.5 ? (
        <div className="flex">
          {HalfStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 4 ? (
        <div className="flex">
          {EmptyStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 3.5 ? (
        <div className="flex">
          {EmptyStarImage}
          {HalfStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 3 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {FullStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 2.5 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {HalfStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 2 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {FullStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 1.5 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {HalfStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 1 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {FullStarImage}
        </div>
      ) : reviews >= 0.5 ? (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {HalfStarImage}
        </div>
      ) : (
        <div className="flex">
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
          {EmptyStarImage}
        </div>
      )}
    </div>
  );
}

export default Stars;
