document.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let item = cart.find(product => product.name === name);
  if (item) {
      item.quantity += 1;
  } else {
      cart.push({ name, price, quantity: 1 });
  }
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function loadCart() {
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
      let itemTotal = item.price * item.quantity;
      total += itemTotal;
      count += item.quantity;

      let div = document.createElement("div");
      div.innerHTML = `
          <p>${item.name} (₹${item.price}) x ${item.quantity} 
          <button onclick="increaseQuantity('${item.name}')">+</button> 
          <button onclick="decreaseQuantity('${item.name}')">-</button>
          <button onclick="removeItem('${item.name}')">❌</button></p>
      `;
      cartItems.appendChild(div);
  });

  cartTotal.innerText = total.toFixed(2);
  cartCount.innerText = count;
}

function increaseQuantity(name) {
  let item = cart.find(product => product.name === name);
  if (item) {
      item.quantity += 1;
      saveCart();
  }
}

function decreaseQuantity(name) {
  let item = cart.find(product => product.name === name);
  if (item && item.quantity > 1) {
      item.quantity -= 1;
      saveCart();
  } else {
      removeItem(name);
  }
}

function removeItem(name) {
  cart = cart.filter(product => product.name !== name);
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("visible");
}
