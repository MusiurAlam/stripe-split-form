import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import React from 'react';
// import {
//   CardCvcElement, CardExpiryElement, CardNumberElement
// } from 'react-stripe-elements';

const SplitFieldsForm = () => {
  return (
    <>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCvcElement />
    </>
  );
}

export default SplitFieldsForm;