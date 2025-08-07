
document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart-container');
  document.body.appendChild(cartContainer);

  let total = 0;

  cartItems.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';

    itemDiv.innerHTML = `
      <img src="${item.image}" style="width:100px;height:100px;" />
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartContainer.appendChild(itemDiv);
    total += item.price;
  });

  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h2>Total: $${total}</h2>`;
  cartContainer.appendChild(totalDiv);
});

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}
