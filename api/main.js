const products = [ {
    id: "1",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: [7, 8, 9, 10],
    category: "Men",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Adidas Ultraboost 21",
    brand: "Adidas",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1642088338886-7cf60fb4d884?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    sizes: [8, 9, 10, 11],
    category: "Men",
    rating: 4.7,
  },
  {
    id: "3",
    name: "Puma RS-X³",
    brand: "Puma",
    price: 99.99,
    image: "https://plus.unsplash.com/premium_photo-1705887351211-5608f389ed06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    sizes: [6, 7, 8, 9],
    category: "Women",
    rating: 4.3,
  },
  {
    id: "4",
    name: "Reebok Classic Leather",
    brand: "Reebok",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1615109255406-2a4354fc6b3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    sizes: [7, 8, 9, 10, 11],
    category: "Unisex",
    rating: 4.2,
  },
  {
    id: "5",
    name: "New Balance 574",
    brand: "New Balance",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    sizes: [6, 7, 8, 9],
    category: "Women",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Nike Revolution 6",
    brand: "Nike",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1679284392400-e114b69c3786?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    sizes: [8, 9, 10, 12],
    category: "Men",
    rating: 4.1,
  },
  {
    id: "7",
    name: "Adidas Grand Court",
    brand: "Adidas",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1841&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: [6, 7, 8, 9],
    category: "Women",
    rating: 4.4,
  },
  {
    id: "8",
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1674023797398-33c9137525f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    sizes: [5, 6, 7, 8, 9],
    category: "Unisex",
    rating: 4.8,
  },
  {
    id: "9",
    name: "Vans Old Skool",
    brand: "Vans",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
    sizes: [6, 7, 8, 9, 10],
    category: "Unisex",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Asics Gel-Kayano 28",
    brand: "Asics",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1637872271111-cddca260f830?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
    sizes: [8, 9, 10, 11],
    category: "Men",
    rating: 4.6,
  },
  {
    id: "11",
    name: "Fila Disruptor II",
    brand: "Fila",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
    sizes: [6, 7, 8],
    category: "Women",
    rating: 4.0,
  },
  {
    id: "12",
    name: "Nike Blazer Mid '77",
    brand: "Nike",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1625210025557-1340fb19c9e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
    sizes: [7, 8, 9, 10],
    category: "Unisex",
    rating: 4.5,
  },
  {
    id: "13",
    name: "Adidas NMD_R1",
    brand: "Adidas",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1667664585038-6eb05100f8dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
    sizes: [7, 8, 9, 10],
    category: "Men",
    rating: 4.4,
  },
  {
    id: "14",
    name: "Under Armour HOVR Phantom",
    brand: "Under Armour",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: [8, 9, 10, 11],
    category: "Men",
    rating: 4.3,
  },
  {
    id: "15",
    name: "Crocs Classic Clog",
    brand: "Crocs",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    sizes: [5, 6, 7, 8],
    category: "Unisex",
    rating: 4.6,
  },
  {
    id: "16",
    name: "Skechers D'Lites",
    brand: "Skechers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    sizes: [6, 7, 8, 9],
    category: "Women",
    rating: 4.2,
  },
  {
    id: "17",
    name: "Jordan 1 Mid",
    brand: "Jordan",
    price: 125.0,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    sizes: [7, 8, 9, 10],
    category: "Men",
    rating: 4.8,
  },
  {
    id: "18",
    name: "Birkenstock Arizona",
    brand: "Birkenstock",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1691067951700-138ca8f4841f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: [5, 6, 7, 8, 9],
    category: "Unisex",
    rating: 4.6,
  },
  {
    id: "19",
    name: "Hoka One One Clifton 8",
    brand: "Hoka",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1706550632937-6177340360a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    sizes: [8, 9, 10, 11],
    category: "Men",
    rating: 4.7,
  },
  {
    id: "20",
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1743100619209-0f3695fa4c92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
    sizes: [6, 7, 8, 9, 10],
    category: "Unisex",
    rating: 4.9,
  },
 
];

let cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");


products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: Rs. ${product.price}</p>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
  `;


  productList.appendChild(div);
});


function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
}


function updateQty(id, change) {
  const item = cart.find(p => p.id === id);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      removeFromCart(id);
    } else {
      renderCart();
    }
  }
}


function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  renderCart();
}


function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.qty * item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <strong>${item.name}</strong><br>
        Rs. ${item.price} × 
        <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
        ${item.qty}
        <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button><br>
        <span>Subtotal: Rs. ${item.qty * item.price}</span><br>
        <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `;
    cartList.appendChild(div);
  });

  cartTotal.textContent = `Total: Rs. ${total.toFixed(2)}`;
}

