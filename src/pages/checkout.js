import Header from "./../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { formatPrice } from "../utils/helper";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl lg:flex mx-auto ">
        {/* Left */}
        <div className="m-5 shadow-sm flex-grow">
          <Image
            src="https://i.ibb.co/2tWkhxb/image.png"
            width={1020}
            height={250}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col bg-white space-y-10 p-5">
            <h1 className="pb-4 border-0 text-3xl">
              {items.length < 1
                ? "Your Shopping Basket Is Empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal {items.length} items:{" "}
                <span className="font-bold">{formatPrice(cartTotal)}</span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 font-bold ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 \
                  text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign In to Checkout " : "Proceed To Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
