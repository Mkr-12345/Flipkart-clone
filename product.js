document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const productDetailContainer = document.getElementById('productDetailContainer');

  const product = products.find(p => p.id === parseInt(productId));

  if (product) {
    productDetailContainer.innerHTML = `
      <div>
        <img src="${product.image}" alt="${product.name}" style="width:300px;height:300px;" />
      </div>
      <div>
        <h1>${product.name}</h1>
        <h2>$${product.price}</h2>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  } else {
    productDetailContainer.innerHTML = `<p>Product not found.</p>`;
  }
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}// Product detail logic will go here
