fetch("./Plants.json")
.then(response => response.json())
.then(Plants => checkout(Plants));

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  window.email = document.getElementById('firstname')
  window.name = document.getElementById('lastname')
  window.card = document.getElementById('address')


function checkout(Plants){
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


