import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  renderProductItem() {
    const { productList, onClickDetailBtn, onClickAddCart } = this.props;

    return productList.map((product) => (
      <div className="col-lg-3" key={product.id}>
        <ProductItem
          product={product}
          onClickDetailBtn={onClickDetailBtn}
          onClickAddCart={onClickAddCart}
        />
      </div>
    ));
  }

  render() {
    return <div className="row g-4">{this.renderProductItem()}</div>;
  }
}
