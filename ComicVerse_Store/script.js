const comics = [
  {id:1,title:"Shadow Sentinel",category:"Superhero",price:299,tag:"ISSUE #01",subtitle:"RISE OF THE SENTINEL",colors:["#17244f","#493e9b"],symbol:"✦"},
  {id:2,title:"Galaxy Rangers",category:"Sci-Fi",price:349,tag:"ISSUE #07",subtitle:"BEYOND THE STARS",colors:["#087c85","#16b6a5"],symbol:"✧"},
  {id:3,title:"Dragonbound",category:"Fantasy",price:279,tag:"ISSUE #03",subtitle:"THE LAST KINGDOM",colors:["#7c272c","#d66a35"],symbol:"♜"},
  {id:4,title:"Neon City",category:"Sci-Fi",price:399,tag:"ISSUE #12",subtitle:"AFTER DARK",colors:["#292052","#b32c86"],symbol:"⚡"},
  {id:5,title:"Solar Knight",category:"Superhero",price:329,tag:"ISSUE #02",subtitle:"GUARDIAN OF LIGHT",colors:["#a34b1d","#e9a72f"],symbol:"☀"},
  {id:6,title:"Mystic Woods",category:"Fantasy",price:259,tag:"ISSUE #05",subtitle:"SECRETS AWAKEN",colors:["#174b3c","#63a66a"],symbol:"❋"},
  {id:7,title:"Quantum Shift",category:"Sci-Fi",price:369,tag:"ISSUE #04",subtitle:"TIME IS RUNNING OUT",colors:["#163e68","#398cba"],symbol:"◈"},
  {id:8,title:"Titan Force",category:"Superhero",price:319,tag:"ISSUE #09",subtitle:"RISE OF TITANS",colors:["#7e1f26","#d44c37"],symbol:"★"}
];
let activeCategory = "All";
let cartCount = 0;
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
const toast = document.getElementById("toast");

function renderComics() {
  const term = search.value.trim().toLowerCase();
  const filtered = comics.filter(book =>
    (activeCategory === "All" || book.category === activeCategory) &&
    (book.title.toLowerCase().includes(term) || book.category.toLowerCase().includes(term))
  );
  grid.innerHTML = filtered.map(book => `
    <article class="product-card">
      <div class="book-art" style="background:linear-gradient(135deg,${book.colors[0]},${book.colors[1]})">
        <div class="book-cover" style="background:linear-gradient(145deg,${book.colors[0]},${book.colors[1]})">
          <small>COMICVERSE ORIGINAL</small>
          <strong>${book.title.toUpperCase()}</strong>
          <span>${book.subtitle}</span>
          <span>${book.tag}</span>
        </div>
      </div>
      <div class="product-info">
        <span class="category">${book.category}</span>
        <h3>${book.title}</h3>
        <div class="product-bottom"><span class="price">₹${book.price}</span><button class="add-button" data-id="${book.id}">+ ADD TO CART</button></div>
      </div>
    </article>`).join("");
  empty.hidden = filtered.length !== 0;
}
document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  renderComics();
});
search.addEventListener("input", renderComics);
grid.addEventListener("click", event => {
  const button = event.target.closest(".add-button");
  if (!button) return;
  const book = comics.find(item => item.id === Number(button.dataset.id));
  cartCount++;
  document.getElementById("cartCount").textContent = cartCount;
  toast.textContent = `${book.title} added to your cart`;
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
});
document.getElementById("cartButton").addEventListener("click", () => {
  toast.textContent = cartCount ? `Your cart has ${cartCount} item(s). This is a demo cart.` : "Your cart is empty. Add a comic to get started.";
  toast.classList.add("show");
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
});
renderComics();
