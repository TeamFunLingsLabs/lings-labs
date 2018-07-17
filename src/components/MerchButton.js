import React from "react";

function MerchButton({ item, incrementClick, decrementClick }) {
  return (
    <div>
      <button onClick={() => incrementClick(item)}>+</button>
      <button onClick={() => decrementClick(item)}>-</button>
    </div>
  );
}

export default MerchButton;
