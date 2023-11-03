fetch("./Plants.json")
.then(response => response.json())
.then(Plants => checkout(Plants));

function checkout(Plants){
    console.log("Reached checkout function");
    console.log(window.clickedItems);



    function displayClickedItems() {
        let cartItems = document.getElementById('cart-items');
        let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
    
        // Clear any existing items in the cart
        cartItems.innerHTML = '';
    
        // Iterate through clickedItems and add them to the cart
        clickedItems.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = `Plant: ${item.PlantName}, Price: $${item.price}.00`;
            cartItems.appendChild(listItem);
        });
    }
    displayClickedItems()
    
}

