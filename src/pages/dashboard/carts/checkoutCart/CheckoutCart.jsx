import React from "react";
import useCarts from "../../../../hooks/useCarts";
import Skeleton from "react-loading-skeleton";
import SingleCheckoutCart from "./SingleCheckoutCart";
import CoupneApply from "../../../../components/CoupneApply/CoupneApply";
import { Link } from "react-router-dom";
// import Link from "antd/es/typography/Link";

const CheckoutCart = () => {
  const [cart, isRefetch, isError, isLoading, error] = useCarts();
  if (isLoading) {
    return (
      <div className="max-w-[1100px] mx-auto px-2 md:px-10 py-4">
        <div className="grid grid-cols-1  gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <Skeleton className="h-24" />
              <Skeleton count={1} />
              <Skeleton count={1} />
              <Skeleton className="" count={1} />
              <Skeleton className="" count={1} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  const totalPrice = cart?.reduce(
    (sum, courseItm) => courseItm?.course?.coursePrice + sum,
    0
  );
  return (
    <main className="min-h-screen max-w-5xl px-2 py-4 mx-auto">
      <section>
        <div>
          <h4 className="mb-10 text-3xl font-bold text-gray-900 ">
            Shopping Cart
          </h4>
        </div>
        <div className="flex space-x-10 ">
          <div className="md:min-w-[500px]">
            <div>
              <h4 className="mt-3 font-semibold text-gray-800 pb-3 border-b border-blue-gray-200">
                {cart?.length > 0 && cart?.length || 0} Course in Cart
              </h4>
            </div>
            <div className="mt-3 flex flex-col space-y-5">
              {cart?.length > 0 ? cart?.map((cartItem) => (
                <SingleCheckoutCart
                  key={cartItem._id}
                  cartItem={cartItem}
                  isRefetch={isRefetch}
                />
              )) : <div className="flex justify-center text-center mt-10">
                <div>
                 <h4 className="text-2xl font-semibold mb-9 text-blue-gray-700"> Your Cart is Empty</h4>
                 <Link to={'/courses'} className="text-teal-500 hover:text-teal-700 font-semibold text-sm">
                 Add A Course
                 </Link>
                </div>
                </div>}
            </div>
          </div>
          <aside className="mt-2">
            <div className="mt-2">
              <h4 className=" flex flex-col ">
                <span className="font-bold">Total:</span>{" "}
                <span className="text-3xl font-bold">${totalPrice}</span>
              </h4>
            </div>
            <div className="mt-2 text-center pb-4 border-b border-blue-gray-200">
              <Link to={"/paymentCheckout"}>
                <button
                  disabled={cart?.length == 0}
                  className="w-full rounded-sm bg-teal-600 text-xl font-bold px-10 hover:bg-teal-700 py-3 text-white"
                >
                  Checkout
                </button>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Promotion</h4>
              <CoupneApply />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CheckoutCart;
