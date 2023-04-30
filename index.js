
// VARS
let butn = document.getElementById("next_pokemon_btn")
let l_butn = document.getElementById("last_pokemon_btn")
const imgs_container = document.getElementById("imgs")

// IMGS
const imgs = [
    "imgs/pokemon1.png",
    "imgs/pokemon2.png",
    "imgs/pokemon3.png",
    "imgs/pokemon4.png",
    "imgs/pokemon5.png",
    "imgs/pokemon6.png",
    "imgs/pokemon7.png"
]

let i = 0
imgs_container.innerHTML = `<img alt="pokemon${i}" src="${imgs[i]}">`

// EVENT LISTENERS
l_butn.addEventListener("click", function () {
    if (i > -1) {
        imgsDOM = `<img alt="pokemon${i}" src="${imgs[i]}">`
        i--

    }
    imgs_container.innerHTML = imgsDOM
})


butn.addEventListener("click", function () {
    if (i < imgs.length) {
        imgsDOM = `<img alt="pokemon${i}" src="${imgs[i]}">`
        i++

    }
    imgs_container.innerHTML = imgsDOM
})






//     let imgsDOM = ""
//     for (let i = 0; i < imgs.length; i++) {
//         imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }
