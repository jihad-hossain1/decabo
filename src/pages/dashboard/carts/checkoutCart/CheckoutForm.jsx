import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { BsShieldLock } from "react-icons/bs";
import { Checkbox } from "@material-tailwind/react";

const CheckoutForm = ({ price,cart, isRefetch}) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (price) {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, {
          price
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      // console.log("[error]", confirmError);
      setCardError(confirmError.message);
    } else {
      // console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // toast.success('')
        const paymentInfo = {
          ...cart,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/coursepayinfo`, paymentInfo)
          .then((res) => {
            console.log(res.data);

            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "payment complete",
                showConfirmButton: false,
                timer: 1500,
              });
              toast.success('your payment success check on enrolled course')
              navigate('/my_enrolled_course')
              // const findCartEmailForDelete = cart?.filter(({email})=>email)
              // console.log(findCartEmailForDelete.email);
              // fetch(
              //   `${import.meta.env.VITE_BASE_URL}/carts?email=${findCartEmailForDelete}`,
              //   {
              //     method: "DELETE",
              //   }
              // )
              //   .then((res) => res.json())
              //   .then((data) => {
              //     if (data.deletedCount > 0) {
              //       Swal.fire(
              //         "Deleted!",
              //         "Your file has been deleted.",
              //         "success"
              //       );
              //       isRefetch()
              //     }
              //   });
              // handlePayCancel(true);
            }
          });
      }
    }
  };
  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit} className="mt-7">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="text-center mt-8">
          
        <div className="flex items-center">
            <Checkbox color="teal"></Checkbox>
            <p className="text-xs">
              By completing your purchase you agree to these{" "}
              <Link to={"#"} className="text-teal-600">
                Terms of Service.
              </Link>
            </p>
          </div>
          <div>
            
              <button
                type="submit"
                disabled={!stripe && cart?.length == 0}
                className="w-full rounded-sm bg-teal-600  font-bold px-10 hover:bg-teal-700 py-3 text-white"
              >
                Complete Checkout
              </button>
            
            <div className="flex items-center justify-center">
              <p className="text-xs  mt-2">10 Days money back secure</p>
              <BsShieldLock className="text-xs mt-2 ml-1" />
            </div>
          </div>



          
        </div>
      </form>
      {cardError && (
        <p className="text-rose-500 py-2 text-center">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
