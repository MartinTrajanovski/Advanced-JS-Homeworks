let btn = document.getElementById("btn");
let table = document.getElementById("table");
function getData() {
    $.ajax({
        url: `https://swapi.co/api/films/`,
        method: "GET",
        success: function (result) {
            for (film of result.results)
            $("table").append(`<tr><td>${film.title}</td><td>${film.director}</td><td>${film.producer}</td>
    <td>${film.episode_id}</td><td>${film.url}</td>
    <td>${film.characters.length}</td><td>${film.planets.length}</td><td>${film.starships.length}</td>
    <td>${film.vehicles.length}</td><td>${film.species.length}</td></tr>`);
        }
    })
}
btn.addEventListener("click", function () {
    getData();
});