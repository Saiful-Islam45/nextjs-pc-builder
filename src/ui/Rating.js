import { BsStarFill } from "react-icons/bs";

const Rating = ({ rating, isNumberShow=true }) => {
  const filledArray = [1, 2, 3, 4, 5];
  return (
    <div className="mt-2.5 mb-5 flex items-center">
      {isNumberShow && <span className="mr-2 rounded bg-yellow-300 p-2 text-xs font-semibold">
        {rating}
      </span>}
      {filledArray.map((val, i) => (
        <span key={"rating" + i}>
          <BsStarFill color={`${Math.round(rating) <= i ? 'gray' : 'rgb(253 224 71 / 600)'}`}className={`${Math.floor(rating) <= i ? 'text-blue-500' : 'bg-transparent'}`} />
        </span>
      ))}
    </div>
  );
};

export default Rating;
