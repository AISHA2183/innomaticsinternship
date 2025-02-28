// Load cart from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartDisplay();

// Function to add item to cart
function addToCart(id, name, price) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

// Function to update the cart in localStorage and refresh UI
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x ${item.quantity} - $${item.price * item.quantity}</span>
                <button onclick="removeFromCart(${item.id})">X</button>
            </div>
        `;
    });

    document.getElementById('total-price').textContent = total;
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    updateCart();
}

// Function to toggle the cart panel visibility
function toggleCart() {
    let cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.toggle('show');
}
