import Image from "next/image";
import { useDispatch } from "react-redux";
import Stars from "./Stars";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { formatPrice } from "../utils/helper";

function CheckoutProduct(props) {
  const dispatch = useDispatch();

  const addToCartButton = () => {
    dispatch(addToBasket(props));
  };
  const removeFromCartButton = () => {
    dispatch(removeFromBasket({ id: props.id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={props.image}
        width={200}
        height={200}
        objectFit="contain"
        alt={props.title}
      />
      <div className="col-span-3 mx-5">
        <p>{props.title}</p>
        <Stars {...props.rating} />
        <p className="text-xs my-2 line-clamp-3 ">{props.description}</p>
        <p>{formatPrice(props.price)}</p>
        {props.rating.rate > 4 && (
          <div className="flex items-center space-x-2 ">
            <img
              className="w-14"
              loading="lazy"
              src="https://i.ibb.co/F31MxVb/image.png"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addToCartButton} className="button">
          Add To Basket
        </button>
        <button onClick={removeFromCartButton} className="button">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
