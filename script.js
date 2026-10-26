const products = [
  {id:1,sport:"football",name:"Football Match Ball",price:1299,emoji:"⚽",image:"https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&q=85",category:"Match essentials"},
  {id:2,sport:"football",name:"Football Boots",price:3499,emoji:"👟",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",category:"Footwear"},
  {id:3,sport:"football",name:"Team Jersey",price:1499,emoji:"👕",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",category:"Apparel"},
  {id:4,sport:"football",name:"Shin Guards",price:799,emoji:"🦵",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85",category:"Protection"},
  {id:5,sport:"basketball",name:"Basketball",price:999,emoji:"🏀",image:"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=85",category:"Match essentials"},
  {id:6,sport:"basketball",name:"Court Shoes",price:3999,emoji:"👟",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",category:"Footwear"},
  {id:7,sport:"basketball",name:"Basketball Jersey",price:1299,emoji:"🏀",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",category:"Apparel"},
  {id:8,sport:"basketball",name:"Sports Socks",price:399,emoji:"🧦",image:"https://images.unsplash.com/photo-1586350977771-b3b0asi4c5b?auto=format&fit=crop&w=700&q=85",category:"Accessories"},
  {id:9,sport:"cricket",name:"English Willow Bat",price:2499,emoji:"🏏",image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=700&q=85",category:"Batting"},
  {id:10,sport:"cricket",name:"Cricket Ball",price:399,emoji:"🔴",image:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=700&q=85",category:"Match essentials"},
  {id:11,sport:"cricket",name:"Batting Gloves",price:1299,emoji:"🧤",image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85",category:"Protection"},
  {id:12,sport:"cricket",name:"Cricket Helmet",price:2999,emoji:"🪖",image:"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=85",category:"Protection"},
  {id:13,sport:"baseball",name:"Baseball Bat",price:2199,emoji:"🏏",image:"https://images.unsplash.com/photo-1508344928928-7165b0ce5a9f?auto=format&fit=crop&w=700&q=85",category:"Batting"},
  {id:14,sport:"baseball",name:"Baseball",price:499,emoji:"⚾",image:"https://images.unsplash.com/photo-1508344928928-7165b0ce5a9f?auto=format&fit=crop&w=700&q=85",category:"Match essentials"},
  {id:15,sport:"baseball",name:"Fielding Glove",price:1999,emoji:"🧤",image:"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=85",category:"Fielding"},
  {id:16,sport:"baseball",name:"Batting Helmet",price:1799,emoji:"🪖",image:"https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=85",category:"Protection"}
];

let cart = JSON.parse(localStorage.getItem("gameArenaCart") || "[]");
const currency = value => "₹" + value.toLocaleString("en-IN");

function renderProducts() {
  ["football","basketball","cricket","baseball"].forEach(sport => {
    const target = document.getElementById(sport + "Products");
    target.innerHTML = products.filter(p => p.sport === sport).map(p => `
      <article class="product-card">
        <div class="product-visual"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-fallback');this.parentElement.textContent='${p.emoji}'"></div>
        <div class="product-info">
          <span class="product-category">${p.category}</span>
          <h3>${p.name}</h3>
          <div class="rating" aria-label="Rated 4.5 out of 5">★★★★★ <small>(4.5)</small></div>
          <div class="product-bottom"><span class="price">${currency(p.price)}</span>
          <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button></div>
        </div>
      </article>`).join("");
  });
}

function saveCart() {
  localStorage.setItem("gameArenaCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(id) {
  const item = cart.find(entry => entry.id === id);
  if (item) item.quantity += 1;
  else cart.push({id,quantity:1});
  saveCart();
  const product = products.find(p => p.id === id);
  const count = document.getElementById("cartCount");
  count.textContent = cart.reduce((sum,item) => sum + item.quantity,0);
  // Keep the shopping experience on the catalogue after adding an item.
  count.setAttribute("aria-label", `${count.textContent} items in cart`);
  const button = [...document.querySelectorAll(".add-btn")].find(btn => btn.getAttribute("onclick") === `addToCart(${id})`);
  if (button) { const original = button.textContent; button.textContent = "Added ✓"; setTimeout(() => button.textContent = original, 900); }
}

function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== id);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(entry => entry.id !== id);
  saveCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalCount = cart.reduce((sum,item) => sum + item.quantity,0);
  document.getElementById("cartCount").textContent = totalCount;
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add something you love!</p>';
  } else {
    cartItems.innerHTML = cart.map(entry => {
      const p = products.find(product => product.id === entry.id);
      return `<article class="cart-row">
        <div class="cart-emoji"><img src="${p.image}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='${p.emoji}'"></div>
        <div><h3>${p.name}</h3><p>${p.sport[0].toUpperCase()+p.sport.slice(1)} · ${currency(p.price)} each</p>
          <div class="quantity-controls"><button aria-label="Decrease quantity" onclick="changeQuantity(${p.id},-1)">−</button><span>${entry.quantity}</span><button aria-label="Increase quantity" onclick="changeQuantity(${p.id},1)">+</button><button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button></div>
        </div><div class="cart-row-total">${currency(p.price * entry.quantity)}</div>
      </article>`;
    }).join("");
  }
  const subtotal = cart.reduce((sum,entry) => sum + products.find(p => p.id === entry.id).price * entry.quantity,0);
  const delivery = subtotal > 0 ? 99 : 0;
  document.getElementById("subtotal").textContent = currency(subtotal);
  document.getElementById("delivery").textContent = currency(delivery);
  document.getElementById("total").textContent = currency(subtotal + delivery);
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    alert("Your cart is empty. Add a product before checkout.");
    return;
  }
  alert("Thanks for shopping at Game Arena! This is a demo website, so online payment is not enabled.");
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  document.getElementById("contactFeedback").textContent =
    `Thanks, ${name}! This demo form is not connected to an email service yet.`;
  event.target.reset();
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
