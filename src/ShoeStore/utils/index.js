export function findIndexCartItem({ cartList, cartId }) {
  if (!Array.isArray(cartList)) return;
  return cartList.findIndex((cart) => cart.product.id === cartId);
}
