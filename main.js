// script.js

// Sample product data (replace with your own)
const products = [
    {
        name: "ATV Tire",
        price: 99.99,
        image: "tire.jpg"
    },
    {
        name: "ATV Handlebar",
        price: 49.99,
        image: "handlebar.jpg"
    },
    {
        name: "ATV Exhaust",
        price: 199.99,
        image: "exhaust.jpg"
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productDiv.appendChild(productImage);

        const productName = document.createElement("h3");
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price.toFixed(2);
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });
}

// Event listener for the contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your form submission logic here
});

// Call the displayProducts function to show the product listings
displayProducts();
