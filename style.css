
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --navy: #071629;
  --navy2: #0d2540;
  --yellow: #ffc928;
  --orange: #ff7a1a;
  --blue: #1769e8;
  --ink: #152338;
  --muted: #6c7888;
  --pale: #f3f6fa;
  --line: #e2e8f0;
}

* { box-sizing: border-box; scroll-behavior: smooth; }

body {
  margin: 0;
  color: var(--ink);
  font-family: Inter, Arial, sans-serif;
  line-height: 1.55;
}

a { color: inherit; text-decoration: none; }

.site-header {
  min-height: 74px;
  background: var(--navy);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 6%;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 20;
}

.brand {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  white-space: nowrap;
}

nav { display: flex; gap: 20px; align-items: center; }
nav a { color: #e0e7f0; font-size: .88rem; font-weight: 600; }
nav a:hover { color: var(--yellow); }

#cartCount {
  display: inline-block;
  background: var(--yellow);
  color: var(--navy);
  border-radius: 20px;
  padding: 0 7px;
}

.menu-toggle {
  display: none;
  color: white;
  background: transparent;
  border: 0;
  font-size: 1.6rem;
  cursor: pointer;
}

.hero {
  min-height: 440px;
  display: flex;
  align-items: center;
  padding: 65px 8%;
  color: white;
  background:
    radial-gradient(circle at 80% 40%, #1769e855, transparent 30%),
    linear-gradient(110deg, #071629, #163858);
}

.hero-content { max-width: 650px; }
.eyebrow { color: var(--orange); font-size: .75rem; font-weight: 800; letter-spacing: 2px; }
.hero h1 {
  font: 800 clamp(3.5rem, 8vw, 6rem)/.95 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  margin: 15px 0;
}
.hero h1 span { color: var(--yellow); }
.hero-content > p:not(.eyebrow) { color: #d1dbe8; max-width: 470px; }

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 6px;
  padding: 13px 20px;
  font-weight: 700;
  cursor: pointer;
}
.button-yellow { background: var(--yellow); color: var(--navy); }
.button-primary { background: var(--blue); color: white; }
.full-width { width: 100%; }

.section { padding: 65px 7%; }
.section-heading { text-align: center; margin: 0 auto 30px; }
.section-heading h2, .contact-copy h2 {
  font: 700 2.7rem/1.05 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  margin: 0 0 10px;
  color: var(--navy);
}
.section-heading > p:last-child { color: var(--muted); }
.left-heading { text-align: left; margin: 0 0 25px; }

.sports-grid, .product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.sport-tile {
  min-height: 210px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
  color: white;
  background: linear-gradient(140deg, #173e5c, #071629);
  transition: transform .2s;
}
.sport-tile:hover { transform: translateY(-4px); }
.sport-tile span { font-size: 3.3rem; }
.sport-tile h3 {
  font: 700 1.8rem 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  margin: 8px 0 0;
}
.sport-tile p { margin: 0; color: #dbe6f3; font-size: .85rem; }
.football-tile { background: linear-gradient(140deg, #1b6a45, #071629); }
.basketball-tile { background: linear-gradient(140deg, #a94f16, #071629); }
.cricket-tile { background: linear-gradient(140deg, #527b3a, #071629); }
.baseball-tile { background: linear-gradient(140deg, #9a5637, #071629); }

.alternate { background: var(--pale); }
.product-card {
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid var(--line);
  border-radius: 10px;
  box-shadow: 0 5px 15px #0a1c3210;
  transition: transform .2s;
}
.product-card:hover { transform: translateY(-4px); }

/* Keep product photos inside a consistent frame. */
.product-visual {
  height: 190px;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #edf2f7;
}
.product-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}
.product-info { padding: 15px; display: flex; flex-direction: column; flex: 1; }
.product-category { color: var(--muted); font-size: .7rem; text-transform: uppercase; letter-spacing: 1px; }
.product-info h3 { margin: 5px 0; font-size: .98rem; }
.rating { color: #f4a900; font-size: .85rem; }
.rating small { color: var(--muted); }
.product-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 14px; }
.price { color: var(--navy); font-weight: 800; }
.add-btn {
  border: 0;
  border-radius: 5px;
  padding: 10px 12px;
  background: var(--navy2);
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.add-btn:hover { background: var(--blue); }

.cart-section { background: #f8fafc; }
.cart-layout { display: grid; grid-template-columns: 1.7fr .8fr; gap: 22px; align-items: start; }
.cart-items { display: grid; gap: 12px; }
.cart-row {
  display: grid;
  grid-template-columns: 75px 1fr auto;
  align-items: center;
  gap: 14px;
  background: white;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
}
.cart-emoji { width: 75px; height: 75px; background: #edf2f7; border-radius: 6px; overflow: hidden; }
.cart-emoji img { width: 100%; height: 100%; object-fit: contain; }
.cart-row h3 { margin: 0; font-size: .95rem; }
.cart-row p { margin: 3px 0; color: var(--muted); font-size: .82rem; }
.quantity-controls { display: flex; gap: 8px; align-items: center; margin-top: 8px; }
.quantity-controls button, .remove-btn { cursor: pointer; background: white; border: 1px solid var(--line); border-radius: 4px; padding: 3px 9px; }
.remove-btn { color: #d52e3f; }
.cart-row-total { font-weight: 800; }
.empty-cart { padding: 25px; background: white; border: 1px dashed #cbd5e1; border-radius: 8px; color: var(--muted); }

.cart-summary { background: white; border: 1px solid var(--line); border-radius: 10px; padding: 22px; }
.cart-summary h3 { margin-top: 0; }
.summary-line { display: flex; justify-content: space-between; margin: 14px 0; color: var(--muted); }
.summary-line strong { color: var(--ink); }
.total-line { border-top: 1px solid var(--line); padding-top: 14px; font-size: 1.05rem; }
.small-note { font-size: .73rem; color: var(--muted); text-align: center; }

.contact-section { padding: 65px 7%; background: var(--navy); color: white; }
.contact-inner { max-width: 1100px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.contact-copy h2 { color: white; }
.contact-copy > p:not(.eyebrow) { color: #c5d1df; }
.contact-detail { display: flex; gap: 14px; align-items: center; margin: 22px 0; }
.contact-detail > span { width: 42px; height: 42px; display: grid; place-items: center; background: #ffffff12; border-radius: 8px; }
.contact-detail div { display: flex; flex-direction: column; overflow-wrap: anywhere; }
.contact-detail small { color: #91a3b8; }
.contact-detail a { color: var(--yellow); }
.contact-form { padding: 24px; background: white; color: var(--ink); border-radius: 10px; }
.contact-form h3 { margin-top: 0; }
.contact-form label { display: block; margin: 12px 0 5px; font-size: .82rem; font-weight: 700; }
.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d6deea;
  border-radius: 5px;
  font: inherit;
}
.contact-form textarea { resize: vertical; }
.form-note { color: #176b43; font-size: .82rem; }

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 22px 7%;
  background: #04101f;
  color: #b7c4d4;
  font-size: .8rem;
}
footer .brand { color: white; font-size: 1.3rem; }
footer p { margin: 0; }
footer > a:last-child { color: var(--yellow); }

@media (max-width: 900px) {
  nav { gap: 10px; }
  nav a { font-size: .76rem; }
  .sports-grid, .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 680px) {
  .site-header { min-height: 64px; padding: 10px 5%; }
  .menu-toggle { display: block; }
  nav {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 20px 5%;
    background: var(--navy);
    flex-direction: column;
    align-items: flex-start;
  }
  nav.open { display: flex; }
  nav a { font-size: .95rem; }
  .hero { min-height: 380px; padding: 50px 7%; }
  .hero h1 { font-size: 4rem; }
  .section, .contact-section { padding: 48px 6%; }
  .product-grid { gap: 12px; }
  .product-visual { height: 140px; }
  .product-info { padding: 11px; }
  .product-bottom { align-items: stretch; flex-direction: column; }
  .add-btn { width: 100%; }
  .cart-layout, .contact-inner { grid-template-columns: 1fr; }
  .cart-row { grid-template-columns: 55px 1fr auto; gap: 9px; padding: 10px; }
  .cart-emoji { width: 55px; height: 55px; }
  .cart-row-total { font-size: .82rem; }
  footer { flex-direction: column; text-align: center; }
}
