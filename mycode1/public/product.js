<script>
// Sample product data
const products = [
    { name: "Wheat", price: "₹350/kg", image: "wheatagro.jpg" },
    { name: "Rice", price: "₹40/kg", image: "riceagro.jpg" },
    { name: "Toor Daal", price: "₹25/kg", image: "tooragro.jpg" },
    { name: "Maize", price: "₹20/kg", image: "cornagro.jpg" },
    { name: "Pea", price: "₹30/kg", image: "peaagro.avif" },
    { name: "Tomato", price: "₹350/kg", image: "tomato.jpg" },
    { name: "Potato", price: "₹40/kg", image: "potato.jpg" },
    { name: "Onion", price: "₹25/kg", image: "onion.jpg" },
    { name: "Apple", price: "₹20/kg", image: "apple.jpg" },
    { name: "Mango", price: "₹30/kg", image: "images/onion.jpg" },
    { name: "Orange", price: "₹350/kg", image: "orange.jpg" },
    { name: "Pineapple", price: "₹40/kg", image: "pineappla.jpg" },
    { name: "Mirch", price: "₹25/kg", image: "mirch.jpg" },
    { name: "Dhania", price: "₹20/kg", image: "dhanuya,jpg" },
    { name: "Sugarcane", price: "₹30/kg", image: "sugarcanagro.jpg" }
];

// Function to display products dynamically
function loadProducts() {
    let productList = document.getElementById("product-list");
    products.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h2>${product.name}</h2>
<p>${product.price}</p>
<button>Add to Cart</button>
`;

        productList.appendChild(productCard);
    });
}

// Call function to load products when page loads
window.onload = loadProducts;

</script>


