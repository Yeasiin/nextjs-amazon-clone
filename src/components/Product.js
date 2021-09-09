import Image from "next/image";
import Stars from "./Stars";
import { formatPrice } from "./../utils/helper";

function Product({ title, price, description, category, image, rating }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} objectFit="contain" width={200} height={200} />
      <h4 className="my-3">{title}</h4>

      <Stars {...rating} />
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="mb-5">{formatPrice(price)}</p>
      {rating.rate > 4 && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-14"
            src="https://i.ibb.co/F31MxVb/image.png"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
}

export default Product;
