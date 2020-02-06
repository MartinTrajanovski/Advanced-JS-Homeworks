let btn = document.getElementById("btn");
let table = document.getElementById("table");
let getLinks = () => {
    let arrChar = [];
    fetch(`https://swapi.co/api/films/`)
        .then(result => {
            return result.json();
        })
        .then(result => {
            for (character of result.results)
                arrChar.push(character.characters[0]);
        })
    return arrChar;
}
let arrayOfLinks = getLinks();
console.log(arrayOfLinks)
let getNames = (array, callback) => {
    let arrayOfSW = [];
    for (i = 0; i < array.length; i++)
        fetch(array[i])
            .then(result => {
                return result.json()
            })
            .then(result => {
                arrayOfSW.push(result.name)
                callback(arrayOfSW)
            })
}
function printTable(result) {
    for (film of result.results) {
        table.innerHTML += `<tr><td>${film.title}</td><td>${film.director}</td><td>${film.producer}</td>
<td>${film.episode_id}</td><td>${film.url}</td>
<td>${film.characters.length}</td><td>${film.planets.length}</td><td>${film.starships.length}</td>
<td>${film.vehicles.length}</td><td>${film.species.length}</td><td class = "char">${getNames(arrayOfLinks, printCharacters)}</td></tr>`;
    }
}
function printCharacters(result) {
        for (i = 0; i < result.length; i++) {
            document.getElementsByClassName("char")[i].innerText = `${result[i]}`
        }
    }
function getData(url, callback) {
    fetch(url)
        .then(result => {
            return result.json()
        })
        .then(result => {
            callback(result)
        })
}
btn.addEventListener("click", e => {
    e.preventDefault();
    getData(`https://swapi.co/api/films/`, printTable);
    
});
