import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import moment from "moment";
import Header from "../components/Header";
import db from "./../../firebase";
import Order from "../components/Order";

function orders({ orders }) {
  const [session] = useSession();

  console.log(orders);

  return (
    <div>
      <Head>
        <title>Orders</title>
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Order's
        </h1>
        {session ? (
          <h2>{orders.length} Orders </h2>
        ) : (
          <h2> Please Sign In To See Your Orders </h2>
        )}

        <div className="mt-5 space-y-4 ">
          {orders?.map((order) => (
            <Order key={order.id} {...order} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //   Order details from firebase Db
  const stripeOrder = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // order details from stripe
  const orders = await Promise.all(
    stripeOrder.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  // Session glitch Fix
  const authSession = await getSession(context);

  return {
    props: { orders, session: authSession },
  };
}
