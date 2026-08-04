function buyNow() {
    alert("Thank you for your order!");
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
