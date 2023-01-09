import React, { Component } from "react";
import "./_productItem.scss";

export default class ProductItem extends Component {
  render() {
    const { product, onClickDetailBtn, onClickAddCart } = this.props;
    const { name, price, image } = product;

    function handleClickBtn(payload) {
      if (!onClickDetailBtn) return;
      onClickDetailBtn(payload);
    }

    function handleClickCart(payload) {
      if (!onClickAddCart) return;
      onClickAddCart(payload);
    }

    return (
      <div className="card px-1 ">
        <img src={image} className="img-fluid" alt="" />
        <h4 className="cart-name">{name}</h4>
        <h5>Price: {price}$</h5>
        <div className="d-flex p-4">
          <button
            className="btn btn-success me-2"
            onClick={() => handleClickBtn(product)}
          >
            Details
          </button>
          <button
            className="btn btn-dark"
            onClick={() => handleClickCart(product)}
          >
            Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    );
  }
}
