import React from "react";

function MerchButton({ item, incrementClick, decrementClick }) {
  return (
    <div>
      <button onClick={() => decrementClick(item)} className="card__button">➖</button>
      <button onClick={() => incrementClick(item)} className="card__button">➕</button>

    </div>
  );
}

export default MerchButton;
