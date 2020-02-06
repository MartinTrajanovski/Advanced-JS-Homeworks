let table = document.getElementById("table");
let btn = document.getElementById("btn");
let form = document.getElementById("form");
let btnNext = document.getElementById("nextBtn");
btnNext.style.display = "none";
let btnPrev = document.getElementById("previousBtn");
btnPrev.style.display = "none";

let showNext = () => btnNext.style.display = "block";
let showPrevious = () => btnPrev.style.display = "block";
let deleteTable = () => {
    let tr = document.getElementsByTagName("tbody");
    for (row of tr) {
        row.style.display = `none`;
    }
}
let getData = url => {
    fetch(url)
        .then(result => {
            return result.json()
        })
        .then(result => {
            console.log(result);
            for (planet of result.results) {
                table.innerHTML += `<tr><td>${planet.name}</td><td>${planet.population}</td>
<td>${planet.climate}</td><td>${planet.gravity}</td</tr>`;
            }
        })
}
btn.addEventListener("click", e => {
    e.preventDefault();
    getData("https://swapi.co/api/planets/?page=1");
    btn.style.display = `none`;
    showNext();
})
btnNext.addEventListener("click", e => {
    e.preventDefault();
    deleteTable();
    getData("https://swapi.co/api/planets/?page=2");
    btnNext.style.display = `none`;
    showPrevious();
})
btnPrev.addEventListener("click", e => {
    e.preventDefault();
    deleteTable();
    getData("https://swapi.co/api/planets/?page=1");
    btnPrev.style.display = `none`;
    showNext();
})
