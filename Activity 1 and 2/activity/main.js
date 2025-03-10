function changeProd2 () {
    document.getElementById("product-title-2").innerText = "Featured: Deluxe Widget - Limited Edition!";
}

function changeText() {
    let items = document.getElementsByClassName("product-description");

    for(let i = 0; i < items.length; i++){
        items[0].innerText = "A revolutionary device for everyday use. Special Offer";
        items[1].innerText = "Experience the ultimate in widget technology. Specical Offer!";
        items[2].innerText = "A simple solution to a complex problem. Special Offer!";
    }
}