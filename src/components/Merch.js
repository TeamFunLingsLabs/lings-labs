import React from "react";
import MerchButton from "./MerchButton";
import Popup from "./Popup";

class Merch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }

    this.togglePopup = this.togglePopup.bind(this);
  }

  //toggle order popup on and off
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { item, incrementClick, decrementClick } = this.props
    const itemPrice = item.price.toFixed(2);
    return (

      // <article className='content__card' id='morph' onClick={this.togglePopup}>
      <article className='content__card' id='morph' >

        <header className="card__h1">{item.name}</header>
        <img src={item.img} alt={item.desc} className="card__image" />
        <MerchButton
          item={item}
          incrementClick={incrementClick}
          decrementClick={decrementClick}
        />
        <header className="card__h1">{item.desc}</header>
        <p>£{itemPrice}</p>

        {this.state.showPopup ?
          <Popup item={item}
            closePopup={this.togglePopup} /> :
          null}

      </article>

    )
  }
}

export default Merch;

// function Merch({ item, incrementClick, decrementClick }) {


//   const itemPrice = item.price.toFixed(2);

//   return (
//     <article className='content__card' id='morph'>

//       <header className="card__h1">{item.name}</header>
//       <img src={item.img} alt={item.desc} className="card__image" />
//       <MerchButton
//         item={item}
//         incrementClick={incrementClick}
//         decrementClick={decrementClick}
//       />
//       <header className="card__h1">{item.desc}</header>
//       <p>£{itemPrice}</p>

//     </article>
//   );
// }

// export default Merch;
