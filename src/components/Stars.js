import { StarIcon as SolidStar } from "@heroicons/react/solid";
import { StarIcon as outlineStar } from "@heroicons/react/outline";

function Stars({ rate, count }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {rate >= index + 1 ? "★" : rate >= number ? "☆" : "☆"}
      </span>
    );
  });

  return (
    <div className="flex items-center space-x-2">
      <span className="flex text-xl h-5 leading-4 text-yellow-400 ">
        {tempStars}{" "}
      </span>
      <span className="mb-1">({count}) customer reviews </span>
    </div>
  );
}

export default Stars;
