import Image from "next/image";
import { StarIcon  } from "@heroicons/react/solid";
import { useState } from "react";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ title, price, description, catalog, image, rating }) {
//   const [rating] = useState(
//     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))
//   );

  return (
    <div>
      <p>{catalog}</p>
      <Image src={image} objectFit="contain" width={200} height={200} />
      <h4>{title}</h4>

      <div className="flex">
        {Array(Math.floor(rating.rate))
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
    </div>
  );
}

export default Product;
