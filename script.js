```javascript
const products = [
    // FOOTBALL
    {
        id: 1,
        name: "Football Match Ball",
        category: "football",
        price: 899,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=700&q=85",
        description: "Football for practice and matches."
    },
    {
        id: 2,
        name: "Football Boots",
        category: "football",
        price: 1799,
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&q=85",
        description: "Footwear for football training."
    },
    {
        id: 3,
        name: "Football Jersey",
        category: "football",
        price: 799,
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=85",
        description: "Sportswear for your next match."
    },
    {
        id: 4,
        name: "Football Training Gear",
        category: "football",
        price: 599,
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=700&q=85",
        description: "Gear for football practice."
    },

    // BASKETBALL
    {
        id: 5,
        name: "Basketball",
        category: "basketball",
        price: 999,
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=85",
        description: "Basketball for indoor and outdoor play."
    },
    {
        id: 6,
        name: "Basketball Court Gear",
        category: "basketball",
        price: 1499,
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=85",
        description: "Equipment for court practice."
    },
    {
        id: 7,
        name: "Basketball Training",
        category: "basketball",
        price: 699,
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=700&q=85",
        description: "Basketball practice essentials."
    },
    {
        id: 8,
        name: "Basketball Match Gear",
        category: "basketball",
        price: 899,
        image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=700&q=85",
        description: "Gear for basketball sessions."
    },

    // CRICKET
    {
        id: 9,
        name: "Cricket Bat",
        category: "cricket",
        price: 1899,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=700&q=85",
        description: "Batting equipment for cricket."
    },
    {
        id: 10,
        name: "Cricket Match Ball",
        category: "cricket",
        price: 399,
        image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=700&q=85",
        description: "Equipment for cricket practice."
    },
    {
        id: 11,
        name: "Cricket Training Gear",
        category: "cricket",
        price: 799,
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=700&q=85",
        description: "Gear for cricket training."
    },
    {
        id: 12,
        name: "Cricket Match Equipment",
        category: "cricket",
        price: 999,
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=700&q=85",
        description: "Equipment for your next match."
    },

    // BASEBALL
    {
        id: 13,
        name: "Baseball Bat",
        category: "baseball",
        price: 1599,
        image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=700&q=85",
        description: "Batting equipment for baseball."
    },
    {
        id: 14,
        name: "Baseball Match Gear",
        category: "baseball",
        price: 499,
        image: "https://images.unsplash.com/photo-1508344928928-7165b0a7c1c2?auto=format&fit=crop&w=700&q=85",
        description: "Gear for baseball practice."
    },
    {
        id: 15,
        name: "Baseball Training",
        category: "baseball",
        price: 699,
        image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&w=700&q=85",
        description: "Baseball training essentials."
    },
    {
        id: 16,
        name: "Baseball Practice Gear",
        category: "baseball",
        price: 899,
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=700&q=85",
        description: "Equipment for practice sessions."
    }
];

// Load cart from the browser
let cart = JSON.parse(localStorage.getItem("gameArenaCart")) || [];

// Display products
function displayProducts() {
    const categories = ["football", "basketball", "cricket", "baseball"];

    categories.forEach(category => {
        const container = document.getElementById(category + "-products");

        const categoryProducts = products.filter(
            product => product.category === category
        );

        container.innerHTML = categoryProducts.map(product => `
            <div class="product-card">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='https://placehold.co/700x500/f0f2f5/07152e?text=Product+Photo';"
                >

                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
                    <button class="btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join("");
    });
}

// Add product to cart
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    alert("Product added to your cart!");
}

// Save cart
function saveCart() {
    localStorage.setItem("gameArenaCart", JSON.stringify(cart));
    displayCart();
}

// Display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    const countElement = document.getElementById("cart-count");

    let itemCount = 0;
    let subtotal = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty. Add some products!</p>";
    } else {
        cartContainer.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);

            if (!product) return "";

            itemCount += item.quantity;
            subtotal += product.price * item.quantity;

            return `
                <div class="cart-row">
                    <div>
                        <h3>${product.name}</h3>
                        <p>₹${product.price.toLocaleString("en-IN")} each</p>
                        <p>Amount: ₹${(product.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>

                    <div class="quantity-controls">
                        <button onclick="changeQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>

                    <button class="remove-btn" onclick="removeItem(${item.id})">
                        Remove
                    </button>
                </div>
            `;
        }).join("");
    }

    const delivery = subtotal > 0 ? 99 : 0;
    const total = subtotal + delivery;

    countElement.textContent = itemCount;
    document.getElementById("subtotal").textContent =
        "₹" + subtotal.toLocaleString("en-IN");
    document.getElementById("delivery").textContent =
        "₹" + delivery.toLocaleString("en-IN");
    document.getElementById("total").textContent =
        "₹" + total.toLocaleString("en-IN");
}

// Change product quantity
function changeQuantity(productId, amount) {
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }

    saveCart();
}

// Remove an item
function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

// Clear all cart items
function clearCart() {
    if (cart.length === 0) {
        alert("Your cart is already empty.");
        return;
    }

    if (confirm("Are you sure you want to clear your cart?")) {
        cart = [];
        saveCart();
    }
}

// Demo checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add products before checkout.");
        return;
    }

    alert(
        "This is a demo checkout. No payment or order has been processed.\n\n" +
        "To accept real orders, connect a payment gateway and order-processing system."
    );
}

// Start the website
displayProducts();
displayCart();
```
