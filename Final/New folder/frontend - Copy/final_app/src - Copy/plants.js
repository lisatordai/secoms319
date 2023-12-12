fetch("./Plants.json")
.then(response => response.json())
.then(Plants => loadMovies(Plants));
//export { clickedItems, handleClick };
function loadMovies(Plants){
    var mainContainer = document.getElementById("plant-container");
    console.log(Plants);
    

    // Define an array to store items in the cart 
    let clickedItems = [];
    window.clickedItems = [];

    // Function to handle click "add to cart"
    function handleClick(PlantName, price) {
        clickedItems.push({ PlantName, price });
        console.log(`Clicked item: ${PlantName}, Price: $${price}.00`);
    }

    function handleAddToCart(PlantName, price) {
        let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
        clickedItems.push({ PlantName, price });
        sessionStorage.setItem('clickedItems', JSON.stringify(clickedItems));
        console.log(`Clicked item: ${PlantName}, Price: $${price}.00`);
    }

    function displayClickedItems() {
        let clickedItems = JSON.parse(sessionStorage.getItem('clickedItems')) || [];
        let message = "Cart:\n";
        clickedItems.forEach(item => {
            message += `Plant: ${item.PlantName}, Price: $${item.price}.00\n`;
        });
            alert(message);
    }


    for (var i=0; i<Plants.Plant.length; i++){
        let PlantName = Plants.Plant[i].Plantname;
        let Bio = Plants.Plant[i].bio;
        let url = Plants.Plant[i].url;
        let alt = Plants.Plant[i].alt;
        let price = Plants.Plant[i].price;

        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        // Create a <div> element with class "card shadow-sm"
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-sm');

        // Create an <img> element with src attribute set to "./images/plant2.jpg" and alt attribute set to "plant2"
        const imgElement = document.createElement('img');
        imgElement.src = url;
        imgElement.alt = alt;

        // Create a <div> element with class "card-body"
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        // Create a <p> element with class "card-text"
        const pElement = document.createElement('p');
pElement.classList.add('card-text');

// Create a strong element for PlantName
const strongElement = document.createElement('strong');
strongElement.textContent = PlantName;

// Create a text node with the text "Prayer Plant"
const Element = document.createElement('span');
Element.textContent = Bio;

// Append the <strong> and text nodes to the <p> element
pElement.appendChild(strongElement);
pElement.appendChild(Element);

// Create a <div> element with classes "d-flex", "justify-content-between", and "align-items-center"
const divFlex = document.createElement('div');
divFlex.classList.add('d-flex', 'justify-content-between', 'align-items-center');

// Create a <div> element with class "btn-group"
const btnGroupDiv = document.createElement('div');
btnGroupDiv.classList.add('btn-group');

// Create a <p> element with class "card-text" for price
const priceElement = document.createElement('p');
priceElement.classList.add('card-text');
priceElement.textContent = `Price: $${price}.00`;

// Create a <button> element for Buy Now
const buyNowButton = document.createElement('button');
buyNowButton.classList.add('btn', 'btn-primary');
buyNowButton.textContent = 'Add to Cart';

// Add an event listener to the "Buy Now" button (if you want to handle click events)
buyNowButton.addEventListener('click', function() {
    handleAddToCart(PlantName, price);
    displayClickedItems();
    //alert(`You added ${PlantName} to cart`);   
});

        // Append the elements together to form the structure
        divFlex.appendChild(btnGroupDiv);
        cardBodyDiv.appendChild(pElement);
        cardBodyDiv.appendChild(priceElement);
        cardBodyDiv.appendChild(buyNowButton);
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);

        // Now you can append colDiv to your document or any other desired location
        mainContainer.appendChild(colDiv);
        
    }
}

