document.getElementById("submit").addEventListener("click", (e) => {
    let password = document.getElementById("password").value

    // success
    window.location.href = "dashboard.html"
    // failure 
    document.getElementById("error").style.visibility = "visible"
    // fetch request to login

    // fetch('https://vithack.herokuapp.com/dashboard/count')
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data) => {
        // document.getElementsByClassName('count-value')[0].innerHTML = data.campus_ambassadors;
        // document.getElementsByClassName('count-value')[1].innerHTML = data.collaborators;
        // document.getElementsByClassName('count-value')[2].innerHTML = data.sponsors;
        // document.getElementsByClassName('count-value')[3].innerHTML = data.early_birds;
    // })
})