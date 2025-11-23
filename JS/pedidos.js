let cart = [];
let total = 0;

function showCategory(category, event) {
  document.querySelectorAll(".category-section").forEach(sec => sec.classList.remove("active"));
  document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));

  document.getElementById(category).classList.add("active");
  event.target.classList.add("active");
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
    existing.subtotal = existing.quantity * price;
  } else {
    cart.push({ name, price, quantity: 1, subtotal: price });
  }
  total += price;
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].subtotal;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      ${item.name} (x${item.quantity}) - R$ ${item.subtotal.toFixed(2)}
      <button onclick="removeFromCart(${index})" style="margin-left:8px;color:red;">x</button>
    `;
    container.appendChild(div);
  });
  document.getElementById("total-price").textContent = total.toFixed(2);
}

function finalizeOrder() {
  if (cart.length === 0) {
    alert("Adicione itens ao carrinho antes de finalizar o pedido.");
    return;
  }

  const orderNumber = Math.floor(Math.random() * 9000) + 1000;
  document.getElementById("order-number").textContent = orderNumber;
  document.getElementById("confirm-total").textContent = total.toFixed(2);
  document.getElementById("confirm-obs").textContent =
    document.getElementById("observations").value || "Nenhuma";

  document.getElementById("confirm-message").style.display = "block";
}
