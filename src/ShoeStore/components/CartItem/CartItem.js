import React, { Component } from "react";
import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "../../constants";

export default class CartItem extends Component {
  render() {
    const { cart, onClickRemove, index, onClickChangeQuantity } = this.props;
    const { product, quantity } = cart;
    const { id, name, image, price } = product;

    function handleClickRemove(payload) {
      // Check if function hasn't been inserted
      // if not we do nothing
      if (!onClickRemove) return;
      onClickRemove(payload);
    }

    function handleClickQuantity(payload) {
      // Check if function hasn't been inserted
      // if not we do nothing
      if (!onClickChangeQuantity) return;

      onClickChangeQuantity(payload);
    }

    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={image} width={100} alt="" />
        </td>
        <td>{name}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() =>
              handleClickQuantity({ cartId: id, type: DECREASE_QUANTITY })
            }
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="btn btn-info"
            onClick={() =>
              handleClickQuantity({ cartId: id, type: INCREASE_QUANTITY })
            }
          >
            +
          </button>
        </td>
        <td>{price}$</td>
        <td>{(quantity * price).toLocaleString()}$</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleClickRemove(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}
