import React from "react";
import MerchButton from "./MerchButton";

function Merch({ item, incrementClick, decrementClick }) {
  const itemPrice = item.price.toFixed(2);
  return (
    <li>
      <h3>{item.name}</h3>
      <img src={item.img} alt={item.desc} />
      <p>{item.desc}</p>
      <p>£{itemPrice}</p>
      <MerchButton
        item={item}
        incrementClick={incrementClick}
        decrementClick={decrementClick}
      />
    </li>
  );
}

export default Merch;
