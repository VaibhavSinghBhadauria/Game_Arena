
const products = [
  // FOOTBALL
  {
    id: 1, sport: "football", name: "Football Match Ball",
    price: 1299, emoji: "⚽", category: "Match essentials",
    image: "https://loremflickr.com/700/500/soccer,ball?lock=101"
  },
  {
    id: 2, sport: "football", name: "Football Boots",
    price: 3499, emoji: "👟", category: "Footwear",
    image: "https://loremflickr.com/700/500/soccer,cleats?lock=102"
  },
  {
    id: 3, sport: "football", name: "Team Jersey",
    price: 1499, emoji: "👕", category: "Apparel",
    image: "https://loremflickr.com/700/500/soccer,jersey?lock=103"
  },
  {
    id: 4, sport: "football", name: "Shin Guards",
    price: 799, emoji: "🦵", category: "Protection",
    image: "https://loremflickr.com/700/500/soccer,shin,guards?lock=104"
  },

  // BASKETBALL
  {
    id: 5, sport: "basketball", name: "Basketball",
    price: 999, emoji: "🏀", category: "Match essentials",
    image: "https://loremflickr.com/700/500/basketball,ball?lock=201"
  },
  {
    id: 6, sport: "basketball", name: "Court Shoes",
    price: 3999, emoji: "👟", category: "Footwear",
    image: "https://loremflickr.com/700/500/basketball,shoes?lock=202"
  },
  {
    id: 7, sport: "basketball", name: "Basketball Jersey",
    price: 1299, emoji: "👕", category: "Apparel",
    image: "https://loremflickr.com/700/500/basketball,jersey?lock=203"
  },
  {
    id: 8, sport: "basketball", name: "Sports Socks",
    price: 399, emoji: "🧦", category: "Accessories",
    image: "https://loremflickr.com/700/500/sports,socks?lock=204"
  },

  // CRICKET
  {
    id: 9, sport: "cricket", name: "English Willow Bat",
    price: 2499, emoji: "🏏", category: "Batting",
    image: "https://loremflickr.com/700/500/cricket,bat?lock=301"
  },
  {
    id: 10, sport: "cricket", name: "Cricket Ball",
    price: 399, emoji: "🔴", category: "Match essentials",
    image: "https://loremflickr.com/700/500/cricket,ball?lock=302"
  },
  {
    id: 11, sport: "cricket", name: "Batting Gloves",
    price: 1299, emoji: "🧤", category: "Protection",
    image: "https://loremflickr.com/700/500/cricket,batting,gloves?lock=303"
  },
  {
    id: 12, sport: "cricket", name: "Cricket Helmet",
    price: 2999, emoji: "🪖", category: "Protection",
    image: "https://loremflickr.com/700/500/cricket,helmet?lock=304"
  },

  // BASEBALL
  {
    id: 13, sport: "baseball", name: "Baseball Bat",
    price: 2199, emoji: "🏏", category: "Batting",
    image: "https://loremflickr.com/700/500/baseball,bat?lock=401"
  },
  {
    id: 14, sport: "baseball", name: "Baseball",
    price: 499, emoji: "⚾", category: "Match essentials",
    image: "https://loremflickr.com/700/500/baseball,ball?lock=402"
  },
  {
    id: 15, sport: "baseball", name: "Fielding Glove",
    price: 1999, emoji: "🧤", category: "Fielding",
    image: "https://loremflickr.com/700/500/baseball,glove?lock=403"
  },
  {
    id: 16, sport: "baseball", name: "Batting Helmet",
    price: 1799, emoji: "🪖", category: "Protection",
    image: "https://loremflickr.com/700/500/baseball,batting,helmet?lock=404"
  }
];

let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("gameArenaCart")) || [];
} catch (error) {
  cart = [];
}

const currency = amount => "₹" + amount.toLocaleString("en-IN");

function renderProducts() {
  ["football", "basketball", "cricket", "baseball"].forEach(sport => {
    const target = document.getElementById(sport + "Products");

    target.innerHTML = products
      .filter(product => product.sport === sport)
      .map(product => `
        <article class="product-card">
          <div class="product-visual">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null;this.parentElement.innerHTML='<span style=&quot;font-size:4rem&quot;>${product.emoji}</span>'"
            >
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="rating">★★★★★ <small>(4.5)</small></div>
            <div class="product-bottom">
              <span class="price">${currency(product.price)}</span>
              <button class="add-btn" onclick="addToCart(${product.id})">
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      `).join("");
  });
}

function saveCart() {
  try {
    localStorage.setItem("gameArenaCart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart could not be saved in this browser.");
  }
  renderCart();
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }

  saveCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== id);
  }

  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("cartCount").textContent = itemCount;

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p class="empty-cart">Your cart is empty. Add something you love!</p>';
  } else {
    cartItems.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return "";

      return `
        <article class="cart-row">
          <div class="cart-emoji">
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null;this.parentElement.textContent='${product.emoji}'"
            >
          </div>

          <div>
            <h3>${product.name}</h3>
            <p>${product.sport} · ${currency(product.price)} each</p>
            <div class="quantity-controls">
              <button onclick="changeQuantity(${product.id}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${product.id}, 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart(${product.id})">
                Remove
              </button>
            </div>
          </div>

          <div class="cart-row-total">
            ${currency(product.price * item.quantity)}
          </div>
        </article>
      `;
    }).join("");
  }

  const subtotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const delivery = subtotal > 0 ? 99 : 0;

  document.getElementById("subtotal").textContent = currency(subtotal);
  document.getElementById("delivery").textContent = currency(delivery);
  document.getElementById("total").textContent =
    currency(subtotal + delivery);
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a product first.");
  } else {
    alert("Thank you for shopping at Game Arena! This is a demo checkout; payments are not enabled.");
  }
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();

  document.getElementById("contactFeedback").textContent =
    `Thank you, ${name}! This demo form does not send emails yet.`;

  event.target.reset();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
