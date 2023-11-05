fetch("./Plants.json")
.then(response => response.json())
.then(Plants => Summary(Plants));


function Summary(Plants){
  console.log("Reached checkout function");
  console.log(window.clickedItems);



  function displayClickedItems() {
      let cartItems = document.getElementById('cart-items');
      let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
  
      // Clear any existing items in the cart
      cartItems.innerHTML = '';
      let total = 0; // Initialize total
  
      // Iterate through clickedItems and add them to the cart
      clickedItems.forEach(item => {
          let listItem = document.createElement('li');
          //listItem.class = "list-group-item d-flex justify-content-between lh-sm";
          listItem.textContent = `Plant: ${item.PlantName}, Price: $${item.price}.00`;
          cartItems.appendChild(listItem);
          total += item.price; // Add the price to total
        });
    
        // Add a section to display the total
        let totalSection = document.createElement('div');
        totalSection.textContent = `Total: $${total}.00`;
        cartItems.appendChild(totalSection);
  }
  displayClickedItems()
  
}
