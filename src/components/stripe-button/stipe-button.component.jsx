import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51Gr137Fch6yJM62390kvUHvjCyguTXUQC7VAgIuqQ4mGNYBH3cbWBJP3O5tRDz5x8zurgsRbd8CZ35A0MeADKrUY00oOeRVeVQ";
  
  const onToken = token => {
    console.log(token);
    alert(`Payment Successful`);
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
} 

export default StripeCheckoutButton;