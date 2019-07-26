// document.getElementById("blog").addEventListener("click", (e) => {
//     document.getElementById("popup").style.display = "block";
//     document.getElementById("popup").classList.add("animated", "fadeIn", "fast");
//     document.getElementById("popup-img").src = "../asset/images/comingsoon.gif";
//     document.getElementById("popup-head").innerHTML = "Coming Soon";
//     document.getElementById("popup-description").innerHTML = "We will be soon here";
// })

document.getElementById("close-btn").addEventListener("click", (e) => {
	document.getElementById("popup").style.display = "none";
})

document.getElementById("submit").addEventListener("click", e => {
	let password = document.getElementById("password");
	let email = document.getElementById("email")

	let status = [];

	let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (reg.test(email.value.trim())) {
		status.push("true")
		// email.style.borderColor = "Green";
		// Email validated
	}
	else {
		email.classList.add("red");
		email.value = "";
		email.style.borderColor = "Red";
		email.placeholder = "Please enter valid email id"
		status.push("false")
	}

	// Password
	if (password.value.trim().length == 0) {
		password.classList.add("red");
		password.value = "";
		password.style.borderColor = "Red";
		password.placeholder = "This field is required";
		status.push("false")
	}
	else {
		// password validated
		status.push("true")
	}

	// Main eval
	if (status.includes("false")) {
		return false
	} else {

		document.getElementById("btn-value").innerHTML = "Loading...."
		console.log(email, password)

				postData('https://vithack.herokuapp.com/teams/login', {
					email: email.value,
     password: password.value
    				})
					.then(result => {
							if (result.token) {
        // if success
        sessionStorage.setItem("token", result.token);
        window.location.href = "themeSelect.html"
								// clearing input field
								email.value = ""
								password.value = "";
								return true
							}
							else {
         document.getElementById("msg").innerHTML = "Error! Try again";
         document.getElementById("msg").style.background = "red";
         document.getElementById("msg").classList.add("animated", "fadeInDown");
         document.getElementById("btn-value").innerHTML = "Proceed to theme selection";
         setTimeout(() => {
           document.getElementById("msg").classList.add("animated", "fadeOutUp");
         }, 5000)
         setTimeout(() => {
           document.getElementById("msg").classList.remove("animated", "fadeInDown", "fadeOutUp");
           document.getElementById("msg").innerHTML = "";
           document.getElementById("msg").style.background = "transparent";
         }, 6000)

						} 
					})
      .catch(error => {
        document.getElementById("msg").innerHTML = "There was some error, it is on us!";
        document.getElementById("msg").style.background = "red";
        document.getElementById("msg").classList.add("animated", "fadeInDown");
        document.getElementById("btn-value").innerHTML = "Proceed to theme selection";
        setTimeout(() => {
          document.getElementById("msg").classList.add("fadeOutUp");
        }, 5000)
					});
	}
})

function fieldReset(event) {
	event.target.style.borderColor = "#0086f4";
	event.target.placeholder = "";
}

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

