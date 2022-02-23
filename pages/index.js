import {
  CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";


const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      card: elements.getElement(CardExpiryElement),
      card: elements.getElement(CardCvcElement),
    });

    console.log(error, paymentMethod);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>Price: $10.99 USD</h2>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

// you should use env variables here to not commit this
// but it is a public key anyway, so not as sensitive
const stripePromise = loadStripe("pk_test_wSvr6guTJvkKmv21jVqVd2D20049BVPKHP");

const StripeSplitForm = () => {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default StripeSplitForm;