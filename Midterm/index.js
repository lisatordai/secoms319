// Author: Lisa Tordai
// ISU Netid : ltordai@iastate.edu
// Date : October 04th, 2023
fetch("./data_index.json")
.then(response => response.json())
.then(myResearchTopics => loadMovies(myMovies));

function loadMovies(myMovies){
    var mainContanier = document.getElementById("goodmovies");
    console.log(myMovies);
    for (var i=0; i<myMovies.movies.length; i++){
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;

        console.log(title);

        //DOM
        let div = document.createElement("div");
        div.innerHTML = `
         <h3>${title}</h3> <br>
        ${year} <br>
        <img src=${url} width="200"> <br> <br> 
        `;

        mainContanier.appendChild(div);
    }
}