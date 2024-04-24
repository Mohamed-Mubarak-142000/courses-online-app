import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { cartContext } from "../_context/cartContext";
import { useUser } from "@clerk/nextjs";
import orderApis from "../_utils/orderApis";
import cartApis from "../_utils/cartApis";
const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { user } = useUser();
  const { cart, setCart } = useContext(cartContext);

  //Function create Order
  const createOrder = () => {
    let productsId = [];
    cart.forEach((item) => {
      productsId.push(item?.course?.id);
    });
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount: amount,
        courses: [],
      },
    };
    orderApis
      .createOrder(data)
      .then((res) => {
        console.log("order", res);
        if (res) {
          cart.forEach((el) => {
            cartApis.deleteCartItem(el?.id);
          });
        }
      })
      .catch((error) => console.log("Error", error));
  };

  //Function Send Email
  const sendEmail = async () => {
    const res = await fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({}),
    });
  };
  //Function Submit payment
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    createOrder();
    sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        // Use a valid test card number provided by Stripe
        cardNumber: "4242424242424242", // Example test card number
        // Add other necessary parameters for your request
      }),
    });

    const clientSecret = await res.json();

    const result = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-white mx-[2rem] md:mx-[20rem] mt-10 md:mt-20">
        <h1 className="capitalize text-[22px] text-center my-8">
          Your Payment
        </h1>
        <PaymentElement />
      </div>
      <div className="mt-5 flex items-center justify-center">
        <button className="bg-primary py-2 px-20 rounded capitalize hover:bg-primaryHover">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
