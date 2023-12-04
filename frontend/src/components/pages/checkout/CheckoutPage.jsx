import React, { useEffect } from 'react';

const CheckoutPage = () => {
  useEffect(() => {
    // Load Stripe.js asynchronously
    const stripeScript = document.createElement('script');
    stripeScript.src = 'https://js.stripe.com/v3/buy-button.js';
    stripeScript.async = true;
    document.head.appendChild(stripeScript);

    // Ensure Stripe.js has loaded before attempting to render the Buy Button
    stripeScript.onload = () => {
      const stripeBuyButton = document.createElement('stripe-buy-button');
      stripeBuyButton.setAttribute('buy-button-id', 'buy_btn_1OJhrBIdttkfAI5uGPbl1Q1w');
      stripeBuyButton.setAttribute('publishable-key', 'pk_test_51OHa5cIdttkfAI5uyzzONgOHWbzHzHfVgkHC0X7tFqQO3D0jUE2gRpBNjPzwRGVL8zkqYCx8wWCnAUtdoFjqdv4K0051bxpOIV');

      // Append the Stripe Buy Button element to the component
      document.getElementById('checkout-container').appendChild(stripeBuyButton);
    };

    return () => {
      // Clean up the script element when the component is unmounted
      document.head.removeChild(stripeScript);
    };
  }, []);

  return (
    <div id="checkout-container">
      {/* Placeholder for the Stripe Buy Button */}
    </div>
  );
};

export default CheckoutPage;
