/**
 * function for total price of a new order
 * @param {Array} items cartProduct: Array of Objects 
 * @returns  {number} total price
 */
export const totalPrice = (items) => {
  return items.reduce((accumulator, product) => accumulator + product.price, 0)
}