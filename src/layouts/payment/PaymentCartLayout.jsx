import { Avatar, Checkbox, Navbar } from "@material-tailwind/react";
import React from "react";
import useCarts from "../../hooks/useCarts";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { BsShieldLock } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../pages/dashboard/carts/checkoutCart/CheckoutForm";
// import PaymentByCard from "../../pages/dashboard/carts/checkoutCart/PaymentByCard";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);


const PaymentCartLayout = () => {
  const [cart, isRefetch, isError, isLoading, error] = useCarts();
  if (isLoading) {
    return (
      <div className="max-w-[1100px] mx-auto px-2 md:px-10 py-4">
        <div className="grid grid-cols-1  gap-4">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <Skeleton className="h-14" />
              <Skeleton count={6} />
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
    <div className="max-w-7xl mx-auto p-2">
      <Navbar className="flex justify-end">
        <Link to={"/checkout"}>
          <button className="hover:text-teal-800 text-teal-600">Cancel</button>
        </Link>
      </Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* checkout  */}
        <div className="md:pr-10 mt-6">
          <h4 className="  text-3xl font-bold mb-6">Checkout</h4>
          <h4 className="text-xl font-semibold">Billing address</h4>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-2xl font-semibold">Payment method</h4>
              <p className="text-sm flex space-x-2">
                Secured connections <BiSolidLockAlt className="ml-2 text-xl" />{" "}
              </p>
            </div>
            <div className="min-h-[300px] w-full border border-blue-gray-100 flex justify-center">
              <img className="w-96 object-cover p-10" src="https://i.ibb.co/z5YJD4f/3d-casual-life-online-shopping-monitor.png" alt="" />
            </div>
            <div className="mt-6">
              <h4 className="text-2xl font-semibold">Order details</h4>
              <div className="flex flex-col space-y-3 mt-2">
                {cart?.map(({ course, _id }) => (
                  <div key={_id} className="flex space-x-2 items-center">
                    <Avatar variant="rounded" src={course?.img} />
                    <div className="flex space-x-10 items-center">
                      <h4 className="text-sm font-semibold">{course?.title}</h4>
                      <h4 className="">${course?.coursePrice}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* summary  */}
        <div className=" md:mt-12 md:pr-60">
          <h4 className="text-2xl font-bold mb-3">Summary</h4>
          <p className="flex justify-between border-b border-blue-gray-200 pb-4 items-center text-sm mb-3">
            <span>Origianl Price:</span>
            <span>${totalPrice}</span>
          </p>
          <h4 className=" font-bold mb-8 flex justify-between">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </h4>
          <div>
            {/* Payment system by card-visa strip */}
            <Elements stripe={stripePromise}>
          <CheckoutForm price={totalPrice} cart={cart} isRefetch={isRefetch}></CheckoutForm>
        </Elements>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PaymentCartLayout;
