import React from "react";

function MerchButton({ orderId, incrementClick, decrementClick }) {
  return (
    <div>
      <button onClick={() => incrementClick(orderId)}>+</button>
      <button onClick={() => decrementClick(orderId)}>-</button>
    </div>
  );
}

export default MerchButton;
