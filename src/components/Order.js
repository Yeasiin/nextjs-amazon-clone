import moment from "moment";
import Head from "next/head";
import { formatPrice } from "../utils/helper";

function Order(props) {
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <div className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
          <div>
            <p className="font-bold text-xs">ORDER PLACED</p>
            <p>{moment.unix(props.timestamp).format("DD-MM-YYYY")}</p>
          </div>
          <div>
            <p className="text-xs font-bold">TOTAL</p>
            <p>
              {formatPrice(props.amount)} - Next Day Delivery{" "}
              {formatPrice(props.amountShipping)}
            </p>
          </div>
          <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500 ">
            {props.items.length} items
          </p>
          <p className=" absolute top-2 right-2 truncate w-40 lg:w-72 text-xs whitespace-nowrap">
            ORDER ID # {props.id}
          </p>
        </div>
        <div className="p-5 sm:p-10">
          <div className="flex space-x-6 overflow-x-auto">
            {props.images.map((image) => (
              <img
                src={image}
                alt=""
                className="h-20 object-contain sm:h-32"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
