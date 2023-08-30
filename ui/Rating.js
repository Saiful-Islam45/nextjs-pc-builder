import { BsStarFill } from "react-icons/bs";

const Rating = ({ rating }) => {
  rating = Math.floor(rating);
  const filledArray = [1, 2, 3, 4, 5];
  return (
    <div className="mt-2.5 mb-5 flex items-center">
      <span className="mr-2 rounded bg-yellow-200 p-2 text-xs font-semibold">
        {rating}
      </span>
      {filledArray.map((val, i) => (
        <span key={"rating" + i}>
          <BsStarFill className=" text-red-500" />
        </span>
      ))}
    </div>
  );
};

export default Rating;
