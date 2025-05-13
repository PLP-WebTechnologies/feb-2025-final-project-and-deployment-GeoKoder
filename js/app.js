
// Product data
const products = [
  {
    id: 1,
    title: "Minimalist Cotton Shirt",
    price: 39.99,
    category: "men",
    description: "Clean-cut cotton shirt with a relaxed fit. Perfect for casual everyday wear or dressed up for special occasions.",
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Elegant Linen Dress",
    price: 59.99,
    category: "women",
    description: "Soft linen dress with a flowing silhouette. The perfect choice for summer days and warm evenings.",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Classic Denim Jacket",
    price: 79.99,
    category: "men",
    description: "Timeless denim jacket with a modern fit. Layer over any outfit for an instant style upgrade.",
    image: "https://images.unsplash.com/photo-1696457703465-e2eb625a5ecf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Silk Scarf",
    price: 29.99,
    category: "accessories",
    description: "Luxurious silk scarf with a subtle pattern. Add a touch of elegance to any outfit.",
    image: "https://images.unsplash.com/photo-1662624915084-061d80eec5fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    title: "Wool Blend Sweater",
    price: 69.99,
    category: "women",
    description: "Cozy wool blend sweater with a relaxed fit. Perfect for layering during colder months.",
    image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Leather Watch",
    price: 99.99,
    category: "accessories",
    description: "Sophisticated leather watch with a minimalist face. A timeless accessory for everyday wear.",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Canvas Backpack",
    price: 49.99,
    category: "accessories",
    description: "Durable canvas backpack with leather details. Functional and stylish for daily use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Slim Fit Trousers",
    price: 59.99,
    category: "men",
    description: "Tailored slim fit trousers in a breathable fabric. Versatile enough for both work and casual settings.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Cashmere Beanie",
    price: 34.99,
    category: "accessories",
    description: "Soft cashmere beanie for ultimate comfort and warmth. A luxurious essential for cold weather.",
    image: "https://plus.unsplash.com/premium_photo-1695603437311-fec2f916a0f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    title: "Oversized Cardigan",
    price: 74.99,
    category: "women",
    description: "Cozy oversized cardigan in a soft knit. The perfect layering piece for transitional weather.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Leather Belt",
    price: 29.99,
    category: "accessories",
    description: "High-quality leather belt with a simple buckle. An essential accessory for any wardrobe.",
    image: "https://plus.unsplash.com/premium_photo-1726769202190-ad2a3f2f360b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    title: "Linen Shorts",
    price: 44.99,
    category: "men",
    description: "Comfortable linen shorts for warm days. Features a clean cut and relaxed fit.",
    image: "https://images.unsplash.com/photo-1719473466836-ff9f5ebe0e1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// DOM Elements
const hamburgerMenu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const cartCountElements = document.querySelectorAll('.cart-count');
const notification = document.getElementById('notification');

// Mobile menu toggle
if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountElements.forEach(element => {
    element.textContent = totalItems;
  });
}

// Show notification
function showNotification(message) {
  notification.querySelector('p').textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = products.find(item => item.id === productId);
  
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification('Item added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showNotification('Item removed from cart!');
  
  if (window.location.pathname.includes('cart.html')) {
    renderCart();
  }
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) return;
  
  const item = cart.find(item => item.id === productId);
  
  if (!item) return;
  
  item.quantity = newQuantity;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  if (window.location.pathname.includes('cart.html')) {
    renderCart();
  }
}

// Calculate total price
function calculateTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Generate product HTML
function generateProductHTML(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Image error handling - Add fallback for broken images
function handleImageErrors() {
  const productImages = document.querySelectorAll('.product-image img, .product-image-large img, .cart-item-image img');
  
  productImages.forEach(img => {
    img.onerror = function() {
      // Replace with a placeholder if the image fails to load
      this.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format&fit=crop";
      this.alt = "Product image placeholder";
    };
  });
}

// Home page - Featured products
const featuredProductsContainer = document.querySelector('.featured-products');
if (featuredProductsContainer) {
  const featuredProducts = products.slice(0, 4);
  featuredProductsContainer.innerHTML = featuredProducts.map(product => 
    generateProductHTML(product)
  ).join('');
  
  // Add event listeners to "Add to Cart" buttons
  featuredProductsContainer.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      addToCart(productId);
    });
  });
}

// Products page
const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');

if (productsContainer) {
  let filteredProducts = [...products];
  
  // Get URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam) {
    filteredProducts = products.filter(product => product.category === categoryParam);
    if (categoryFilter) {
      categoryFilter.value = categoryParam;
    }
  }
  
  // Render products
  function renderProducts() {
    productsContainer.innerHTML = filteredProducts.map(product => 
      generateProductHTML(product)
    ).join('');
    
    // Add event listeners to "Add to Cart" buttons
    productsContainer.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
      });
    });
  }
  
  renderProducts();
  
  // Filter by category
  if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
      const selectedCategory = categoryFilter.value;
      
      if (selectedCategory === 'all') {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter(product => product.category === selectedCategory);
      }
      
      renderProducts();
    });
  }
  
  // Sort products
  if (sortFilter) {
    sortFilter.addEventListener('change', () => {
      const selectedSort = sortFilter.value;
      
      switch (selectedSort) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'default':
        default:
          filteredProducts.sort((a, b) => a.id - b.id);
          break;
      }
      
      renderProducts();
    });
  }
}

// Product Details page
const productDetailsContainer = document.getElementById('product-details');
const relatedProductsContainer = document.getElementById('related-products');

if (productDetailsContainer) {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  // If no product ID, redirect to products page
  if (!productId) {
    window.location.href = 'products.html';
  }
  
  const product = products.find(p => p.id === productId);
  
  if (product) {
    // Render product details
    productDetailsContainer.innerHTML = `
      <div class="product-image-large">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-info-large">
        <h2 class="product-title-large">${product.title}</h2>
        <p class="product-category-large">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <p class="product-price-large">$${product.price.toFixed(2)}</p>
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" value="1" min="1" max="10">
        </div>
        <button class="add-to-cart-large" id="add-to-cart-btn">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    `;
    
    // Add to cart event listener
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const quantityInput = document.getElementById('quantity');
    
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      addToCart(productId, quantity);
    });
    
    // Render related products (same category)
    if (relatedProductsContainer) {
      const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== productId)
        .slice(0, 4);
      
      relatedProductsContainer.innerHTML = relatedProducts.map(product => 
        generateProductHTML(product)
      ).join('');
      
      // Add event listeners to "Add to Cart" buttons
      relatedProductsContainer.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
          const productId = parseInt(button.getAttribute('data-id'));
          addToCart(productId);
        });
      });
    }
  } else {
    productDetailsContainer.innerHTML = '<p>Product not found</p>';
  }
}

// Cart page
const cartItemsContainer = document.getElementById('cart-items');
const cartSummaryContainer = document.getElementById('cart-summary');

if (cartItemsContainer && cartSummaryContainer) {
  function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <p>Your cart is empty</p>
          <a href="products.html" class="btn">Continue Shopping</a>
        </div>
      `;
      cartSummaryContainer.style.display = 'none';
    } else {
      // Render cart items
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="cart-item-details">
            <h3>${item.title}</h3>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            <div class="cart-item-quantity">
              <button class="quantity-btn decrease" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `).join('');
      
      // Render cart summary
      const subtotal = calculateTotal();
      const shipping = subtotal > 100 ? 0 : 10;
      const total = subtotal + shipping;
      
      cartSummaryContainer.style.display = 'block';
      cartSummaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-item">
          <span>Subtotal:</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-item">
          <span>Shipping:</span>
          <span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
        </div>
        <div class="summary-item summary-total">
          <span>Total:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn">Proceed to Checkout</button>
      `;
      
      // Event listeners for cart actions
      cartItemsContainer.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', () => {
          const productId = parseInt(button.getAttribute('data-id'));
          const item = cart.find(item => item.id === productId);
          if (item && item.quantity > 1) {
            updateQuantity(productId, item.quantity - 1);
          }
        });
      });
      
      cartItemsContainer.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', () => {
          const productId = parseInt(button.getAttribute('data-id'));
          const item = cart.find(item => item.id === productId);
          if (item) {
            updateQuantity(productId, item.quantity + 1);
          }
        });
      });
      
      cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', () => {
          const productId = parseInt(button.getAttribute('data-id'));
          removeFromCart(productId);
        });
      });
      
      const checkoutBtn = document.querySelector('.checkout-btn');
      checkoutBtn.addEventListener('click', () => {
        showNotification('Order placed successfully!');
        // In a real app, this would redirect to a checkout page
        // For this demo, we'll just clear the cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
      });
    }
  }
  
  renderCart();
}

// Contact form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Message sent successfully!');
    contactForm.reset();
  });
}

// Dark mode toggle (bonus feature)
const body = document.body;
let darkMode = localStorage.getItem('darkMode') === 'enabled';

// Create dark mode toggle button
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

// Apply dark mode if saved
if (darkMode) {
  body.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  
  if (darkMode) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Initialize cart count
updateCartCount();

// Run image error handling after DOM content is loaded
document.addEventListener('DOMContentLoaded', handleImageErrors);

// Product click to view details
document.querySelectorAll('.product-card').forEach(card => {
  const productInfo = card.querySelector('.product-info');
  if (productInfo) {
    const productId = card.querySelector('.add-to-cart').getAttribute('data-id');
    
    productInfo.addEventListener('click', (e) => {
      // Don't navigate if clicking the add to cart button
      if (!e.target.closest('.add-to-cart')) {
        window.location.href = `product.html?id=${productId}`;
      }
    });
    
    card.querySelector('.product-image').addEventListener('click', () => {
      window.location.href = `product.html?id=${productId}`;
    });
  }
});
