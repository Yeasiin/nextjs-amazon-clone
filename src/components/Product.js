import Image from "next/image";
import Stars from "./Stars";
import { formatPrice } from "./../utils/helper";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product(props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = props;
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {props.category}
      </p>
      <Image src={props.image} objectFit="contain" width={200} height={200} />
      <h4 className="my-3">{props.title}</h4>

      <Stars {...props.rating} />
      <p className="text-xs my-2 line-clamp-2">{props.description}</p>
      <p className="mb-5">{formatPrice(props.price)}</p>
      {props.rating.rate > 4 && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-14"
            loading="lazy"
            src="https://i.ibb.co/F31MxVb/image.png"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
