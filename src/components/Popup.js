import React from 'react';

function Popup({ item, closePopup }) {



  return (
    <div className='popup'>
      <div className='popup_inner'>
        <header className="card__h2">
          {item.name}
        </header>
        <br />
        <img src={item.img} alt={item.desc} className="popup__image" />
        <header className="card__h2">
          {item.desc}
        </header>
        {/* <button
          onClick={closePopup}
        // className="popup__cancel"
        >Go Back
              </button> */}

      </div>
    </div>


  );
}

export default Popup;