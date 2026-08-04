function buyNow(productName) {
    localStorage.setItem("productName", productName);
    window.location.href = "order.html";
}
}
let product = localStorage.getItem("product");
let price = localStorage.getItem("price");

document.getElementById("product").value = product;
document.getElementById("price").value = price;

function calculateTotal(){
    let quantity = document.getElementById("quantity").value;
    let total = price * quantity;

    document.getElementById("total").innerHTML = "Total: Rs " + total;
}
