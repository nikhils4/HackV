
document.getElementById("preloader").style.display = "block";

window.onload = () => {
    document.getElementById("preloader").style.display = "none";


    setTimeout( () => {
        document.getElementById("close-btn").addEventListener("click", (e) => {
            document.getElementById("popup").style.display = "none";
        })
    }, 1000)



}

document.getElementById("reg-popup").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "block";
})