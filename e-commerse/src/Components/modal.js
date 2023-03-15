import React from "react";
import "./modal.css";

//exitModal and productInfo are functions received as props
function Modal({ exitModal, productInfo }) {
  return (
    <div className="behindModal">
      <div className="modalContainer">
        <div className="exitModal">
          <button onClick={() => exitModal(false)}> x </button>
        </div>
        <div className="modalInfo">{productInfo}</div>
      </div>
    </div>
  );
}

export default Modal;
