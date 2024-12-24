import React, { useState } from 'react';

function onChangeIntro() {
  const [name, setName] = useState("Guest"); // input (string)
  const [quantity, setQuantity] = useState(1); // input (number)
  const [comment, setComment] = useState(""); // textarea
  const [payment, setPayment] = useState(""); // select
  const [shipping, setShipping] = useState(""); // radio

  function handleNameChange(event) {
      setName(event.target.value);
  }

  function handleQuantityChange(event) {
      setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
      setComment(event.target.value);
  }

  function handlePaymentChange(event) {
      setPayment(event.target.value);
  }

  function handleShippingChange(event) {
      setShipping(event.target.value);
  }


  return (
      <div>
          <p>Name: {name}</p>
          <input value={name} onChange={handleNameChange}></input>

          <p>Quantity: {quantity}</p>
          <input value={quantity} onChange={handleQuantityChange} type="number"></input>

          <p>Comment: {comment}</p>
          <textarea value={comment} onChange={handleCommentChange} placeholder="Delivery Instructions:"></textarea>

          <p>Payment Method: {payment}</p>

          <select value={payment} onChange={handlePaymentChange}>
              <option value="">
                  Select Payment Method
              </option>
              <option value="Visa">
                  Visa
              </option>
              <option value="Mastercard">
                  Mastercard
              </option>
              <option value="Paypal">
                  Paypal
              </option>
          </select>

          <br/>
          <br/>

          <label>
              <input
                  type="radio"
                  value="Pick Up"
                  checked={shipping === "Pick Up"}
                  onChange={handleShippingChange}
              />
              Pick Up
          </label>

          <br/>
          <label>
              <input
                  type="radio"
                  value="Delivery"
                  checked={shipping === "Delivery"}
                  onChange={handleShippingChange}
              />
              Delivery
          </label>
          <p>Shipping: {shipping}</p>


      </div>

  );
}

export default onChangeIntro;