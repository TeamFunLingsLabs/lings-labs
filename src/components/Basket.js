import React from "react";

class Basket extends React.Component {

  render() {
    const { currentOrder, merch } = this.props;

    let basketTotal = 0;

    return (
      <div className="basket">
        <header className="basket__title">Basket</header>
        {Object.keys(currentOrder).map(orderItem => {
          const line = Object.keys(merch).map(merchObject => {
            if (merch[merchObject].id === parseInt(orderItem, 10)) {
              { basketTotal += (merch[merchObject].price * currentOrder[orderItem]) }
              return <div className="basket__line" key={orderItem}>

                {/* <li> */}

                {currentOrder[orderItem]} x {merch[merchObject].name}  {(merch[merchObject].price * currentOrder[orderItem]).toLocaleString('en-gb', { style: 'currency', currency: 'GBP' })}

                {/* </li> */}

              </div>
            }
          })

          return line;
        })}
        <header className="basket__h1">
          {basketTotal === 0 ? "Why havent you bought anything yet?! cheapskate" : `Total :  ${basketTotal.toLocaleString('en-gb', { style: 'currency', currency: 'GBP' })}`}
        </header>
        <button className="basket__button">Pay me lots of money now!</button>
      </div>
    )
  }
}

export default Basket;
