// document.getElementById("blog").addEventListener("click", (e) => {
//     document.getElementById("popup").style.display = "block";
//     document.getElementById("popup").classList.add("animated", "fadeIn", "fast");
//     document.getElementById("popup-img").src = "../asset/images/comingsoon.gif";
//     document.getElementById("popup-head").innerHTML = "Coming Soon";
//     document.getElementById("popup-description").innerHTML = "We will be soon here";
// })


document.getElementById("preloader").style.display = "block";

window.onload = () => {
    document.getElementById("preloader").style.display = "none";


    setTimeout( () => {
        document.getElementById("close-btn").addEventListener("click", (e) => {
            document.getElementById("popup").style.display = "none";
        })
    }, 2000)



}

