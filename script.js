// Select DOM elements
const productList = document.getElementById("productList");
const errorDisplay = document.getElementById("error");
const reloadButton = document.getElementById("reload");
const subScribeButton = document.getElementById('button');

// Dummy API URL
const apiURL = "https://fakestoreapi.com/products"; // A dummy API for product data

// Function to fetch products
async function fetchProducts() {
  try {
    // Clear previous error and products
    errorDisplay.textContent = "";
    productList.innerHTML = "Loading...";
    

    // Fetch product data
    const response = await fetch(apiURL);

    // Handle non-200 responses
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    // Display error message
    console.error("Error fetching products:", error);
    errorDisplay.textContent = "Failed to fetch products. Please try again.";
    productList.innerHTML = ""; // Clear loading text
  }
}

// Function to display products
function displayProducts(products) {
  // Clear the product list
  productList.innerHTML = "";

  // Generate product cards
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>Price: $${product.price}</p>
    `;

    productList.appendChild(productCard);
  });
}

// Event listener for reload button
reloadButton.addEventListener("click", fetchProducts);
subScribeButton.addEventListener('click', subScribeButton)
    


// Fetch products on initial load
fetchProducts();
