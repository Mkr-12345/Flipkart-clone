// main.js
document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('productContainer');
  const searchInput = document.getElementById('searchInput');

  function renderProducts(productList) {
    if (!productContainer) return;
    productContainer.innerHTML = '';
    productList.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:150px;height:150px;" onerror="this.onerror=null;this.src='https://via.placeholder.com/150';">
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(card);
    });
  }

  // Ensure products are available before rendering
  if (typeof products !== 'undefined') {
    renderProducts(products);
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(query));
      renderProducts(filtered);
    });
  }
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
