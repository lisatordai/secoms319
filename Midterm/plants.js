fetch("./Plants.json")
.then(response => response.json())
.then(Plants => loadMovies(Plants));

function loadMovies(Plants){
    var mainContainer = document.getElementById("plant-container");
    console.log(Plants);

    for (var i=0; i<Plants.Plant.length; i++){
        let PlantName = Plants.Plant[i].Plantname;
        let Bio = Plants.Plant[i].bio;
        let url = Plants.Plant[i].url;
        let alt = Plants.Plant[i].alt;

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

        // Create a <strong> element
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

        // Append the elements together to form the structure
        divFlex.appendChild(btnGroupDiv);
        cardBodyDiv.appendChild(pElement);
        cardBodyDiv.appendChild(divFlex);
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);

        // Now you can append colDiv to your document or any other desired location
        mainContainer.appendChild(colDiv);
    }
}