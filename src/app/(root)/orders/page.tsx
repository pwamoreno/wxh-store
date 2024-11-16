import { getOrders } from "@/lib/actions/action";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Orders = async () => {
  const { userId } = await auth();

  // console.log("[userId]:", userId)

  const orders = await getOrders(userId as string);

  //   console.log("[ecom_orders]:", orders);

//   console.log(orders[0].items);

  function addCommasToNumbers(number: number) {
    //convert number to string
    let numString = number.toString();

    //use regex to add commas to the string representation of the number
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
  }

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10">Your Orders</p>
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">You have no orders yet.</p>
        ))}

      <div className="flex flex-col gap-10">
        {orders?.map((order: OrderType) => (
          <div
            className="flex flex-col gap-8 p-4 hover:bg-grey-1"
            key={order._id}
          >
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Order ID: {order._id}</p>
              <p className="text-base-bold">
                Total Amount: ₦{addCommasToNumbers(order.totalAmount)}
              </p>
              <p className="text-base-bold">Status: {order.status}</p>
            </div>

            <div className="flex flex-col gap-5">
              {order.items.map((orderItem: OrderItemType) => (
                <div className="flex gap-4" key={orderItem._id}>
                  <Image
                    src={orderItem.id.media[0]}
                    alt={orderItem.id.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium">
                      Title:{" "}
                      <span className="text-small-bold">
                        {orderItem.id.title}
                      </span>
                    </p>
                    {orderItem.color && (
                      <p className="text-small-medium">
                        Color:{" "}
                        <span className="text-small-bold">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {orderItem.size && (
                      <p className="text-small-medium">
                        Size:{" "}
                        <span className="text-small-bold">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    <p className="text-small-medium">
                      Quantity:{" "}
                      <span className="text-small-bold">
                        {orderItem.quantity}
                      </span>
                    </p>
                    <p className="text-small-medium">
                      Unit Price:{" "}
                      <span className="text-small-bold">
                        {orderItem.id.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic"