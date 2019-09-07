import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_2M1S753W8I4qTWdcV3M0XmkR003XqHQ2Hh';

    const onToken = token => {
       axios({
           url: 'payment',
           method: 'post',
           data: {
              amount: priceForStripe,
              token
           }
       }).then(response => {
           alert('Payment was successful');
       }).catch(error => {
           console.log('Payment error: ', JSON.parse(error));
           alert('There was an issue with your payment. Please make sure you use the provided credit card');
       })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='My shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;