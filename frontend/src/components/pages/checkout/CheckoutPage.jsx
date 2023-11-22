import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

function PayPalButton({ price, productName }) {
  const [setOrderId] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AX-AZocSucOyPogzOWrxJaMCCyN4uOmYAtfDz4azakbd84vLBAItPWdZgs47RJ9WjQPOZgny3iQ5Pi7y`;
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: async function () {
            const res = await fetch('/pay', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                price: price,
                productName: productName,
              }),
            });
            const data = await res.json();
            setOrderId(data.orderId);
            return data.orderId;
          },
          onApprove: function (actions) {
            return actions.order.capture().then(function (details) {
              alert('Transaction completed by ' + details.payer.name.given_name);
              // Add additional logic here, such as updating the database, etc.
            });
          },
        })
        .render('#paypal-button-container');
    };
    document.body.appendChild(script);
  });

  return <div id="paypal-button-container"></div>;
}

function Checkout() {
  const [price, setPrice] = useState('10');
  const [productName, setProductName] = useState('Sample Product');

  return (
    <div>
      <h1>Checkout</h1>
      <div className='labelCheckout'>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <PayPalButton price={price} productName={productName} />
      </div>
    </div>
  );
}

export default Checkout;
