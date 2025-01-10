function updateQuantity(productId, price, isIncrement) {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  const totalElement = document.getElementById(`total-${productId}`);

  let quantity = parseInt(quantityElement.innerText);
  if (isIncrement && quantity < 10) {
    quantity++;
  } else if (!isIncrement && quantity > 1) {
    quantity--;
  }

  quantityElement.innerText = quantity;
  totalElement.innerText = `$${(quantity * price).toFixed(2)}`;
}
