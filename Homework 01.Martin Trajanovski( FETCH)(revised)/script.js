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
let getNames = (array) => {
    let arrayOfSW = [];
    for (i = 0; i < array.length; i++)
        fetch(array[i])
            .then(result => {
                return result.json()
            })
            .then(result => {
                arrayOfSW.push(result.name)
            })
    return arrayOfSW;
}
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
btn.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("characters").innerHTML += `<div style="font-style: italic; font-size: 13px; color: red">(Available in <span id = "time">07 </span> seconds)</div>`;
    fetch(`https://swapi.co/api/films/`)
        .then(result => {
            return result.json()
        })
        .then(result => {
            for (film of result.results) {
                table.innerHTML += `<tr><td>${film.title}</td><td>${film.director}</td><td>${film.producer}</td>
<td>${film.episode_id}</td><td>${film.url}</td>
<td>${film.characters.length}</td><td>${film.planets.length}</td><td>${film.starships.length}</td>
<td>${film.vehicles.length}</td><td>${film.species.length}</td><td class = "char"></td></tr>`;
            }
            let arrayOfNames = getNames(arrayOfLinks);
            console.log(arrayOfNames);
            var seconds = 7;
            display = document.getElementById("time");
            startTimer(seconds, display);
            setTimeout(function () {
                for (i = 0; i < arrayOfNames.length; i++) {
                    document.getElementsByClassName("char")[i].innerText = `${arrayOfNames[i]}`
                }
                document.getElementById("characters").innerText = `Character`
            }, 9000)
        })
});
