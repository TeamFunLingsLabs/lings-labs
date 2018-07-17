import React from "react";

class Basket extends React.Component {
  render() {
    const { currentOrder } = this.props;
    console.log("currentOrder:", currentOrder);
    return <div>Basket</div>;
  }
}

export default Basket;
