document.getElementById("submit").addEventListener("click", (e) => {
    let password = document.getElementById("password").value
    let email = document.getElementById("username").value
    // success
    // failure 
    // document.getElementById("error").style.visibility = "visible"
    // fetch request to login
    console.log({email, password})
    postData('https://vithack.herokuapp.com/users/login', {
        email,
        password,
        type : "admin"
    })
    .then((response) => {
        if (response.token == undefined) {
            document.getElementById("error").innerHTML = response.message
        } else {
            document.cookie = `token=${response.token}`
            window.location.href = "dashboard.html"
        }
    })
    .catch(err => {
        document.getElementById("error").innerHTML = "There was some error authenticating you"
    })

})



function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data), 
    })
    .then(response => response.json());
};