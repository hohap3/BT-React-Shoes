import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";

export default class Cart extends Component {
  renderCartItem() {
    const { cartList, onClickRemove, onClickChangeQuantity } = this.props;
    return cartList.map((cart, idx) => (
      <CartItem
        key={cart.product.id}
        cart={cart}
        onClickRemove={onClickRemove}
        index={idx}
        onClickChangeQuantity={onClickChangeQuantity}
      />
    ));
  }

  totalPrice() {
    const { cartList } = this.props;
    const totalMoney = cartList.reduce(
      (total, cart) => total + cart.quantity * cart.product.price,
      0
    );

    return totalMoney.toLocaleString();
  }

  render() {
    const { cartList, onClickCheckout } = this.props;

    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="cartModal">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {cartList.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartItem()}</tbody>
                </table>
              ) : (
                <h2>Cart is empty! Please add a new item</h2>
              )}

              {cartList.length > 0 && (
                <div className="">
                  <h2>Total money:{this.totalPrice()}$</h2>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {cartList.length > 0 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onClickCheckout}
                >
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
