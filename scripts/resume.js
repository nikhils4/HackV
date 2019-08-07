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
	let email = document.getElementById("email")
	let link = document.getElementById("link")

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


	if (link.value.trim().length == 0) {
		link.classList.add("red");
		link.value = "";
		link.style.borderColor = "Red";
		link.placeholder = "This field is required";
		status.push("false")
	}
	else {
		status.push("true")
	}


	// Main eval
	if (status.includes("false")) {
		return false
	} else {

		document.getElementById("btn-value").innerHTML = "Loading...."

		postData('https://vithack.herokuapp.com/details/add', {
			email: email.value.trim(),
			url: link.value.trim()
		})
			.then(result => {
				if (result.email) {
					// if success
					document.getElementById("msg").innerHTML = "Success! Details saved.";
					document.getElementById("msg").style.background = "#007bff";
					document.getElementById("msg").classList.add("animated", "fadeInDown");
					document.getElementById("btn-value").innerHTML = "Submit";
					setTimeout(() => {
						document.getElementById("msg").classList.add("animated", "fadeOutUp");
					}, 5000)
					setTimeout(() => {
						document.getElementById("msg").classList.remove("animated", "fadeInDown", "fadeOutUp");
						document.getElementById("msg").innerHTML = "";
						document.getElementById("msg").style.background = "transparent";
					}, 6000)

					// clearing input field
					email.value = ""
					link.value = ""
					return true
				}
				else {
					document.getElementById("msg").innerHTML = "Error! Try again";
					document.getElementById("msg").style.background = "red";
					document.getElementById("msg").classList.add("animated", "fadeInDown");
					document.getElementById("btn-value").innerHTML = "Submit";
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
				document.getElementById("btn-value").innerHTML = "Submit";
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

