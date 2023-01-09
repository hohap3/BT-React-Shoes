import React, { Component } from "react";
import "./_productDetail.scss";

export default class ProductDetail extends Component {
  render() {
    const { selectedProduct, openModal, onClickClose } = this.props;

    const { name, image, price, description, quantity } = selectedProduct;

    return (
      <div className={`detail-modal ${openModal && "active"}`}>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="card p-4 mt-5 modal-card">
            <div className="row">
              <div className="col-lg-5">
                <img src={image} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-7">
                <h4>Name: {name}</h4>
                <h4>Price: {price.toLocaleString()}$</h4>
                <h4>Description: {description}</h4>
                <h4>Quantity: {quantity}</h4>
              </div>
            </div>
          </div>
          <button className="btn btn-danger" onClick={onClickClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
