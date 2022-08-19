let landing = document.querySelector(".landing");
let allimage = ["../images/cover1.jpg", "../images/Nurse.webp", "../images/cover10.jpg", "../images/cover13.webp", "../images/kisspng-nursing-portable-network-graphics-hospital-medicin-nursing-and-ancillary-staff-temporary-placement-a-5cc04612618bc7.6950545415561047223996.png"];

let interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * allimage.length);
    landing.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
}, 1500);




let men = document.querySelector(".menu");
let arrow = document.querySelector(".header ul");


document.onclick = (e) => {
    if (e.target.className == "menu" || e.target.className == "m") {
        arrow.classList.toggle("none");
        men.classList.toggle("none");
    }
    else {
        arrow.classList.remove("none");
        men.classList.remove("none");
    }

};





