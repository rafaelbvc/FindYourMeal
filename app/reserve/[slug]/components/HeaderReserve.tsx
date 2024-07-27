import { format } from "date-fns";
import {
  Time,
  convertToDisplayTime,
} from "../../../../utils/convertToDisplayTime";

const HeaderReserve = ({
  image,
  name,
  date,
  partySize,
}: {
  image: string;
  name: string;
  date: string;
  partySize: string;
}) => {
  const [day, time] = date.split("T");

  return (
    <header>
      {/* <h3 className="font-bold">You're almost done!</h3> */}
      <div className="mt-5 flex">
        <img src={image} alt="Image" className="w-32 h-18 rounded" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-black">{name}</h1>
          <div className="flex mt-3">
            <p className="mr-6 bold text-black">{format(new Date(date), "ccc, MMM d")}</p>
            <p className="mr-6 text-black">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6 text-black">
              {partySize} {parseInt(partySize) === 1 ? "person" : "people"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderReserve;
