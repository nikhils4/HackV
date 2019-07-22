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

			grecaptcha.ready(function () {
					grecaptcha.execute('6LdwaqgUAAAAAHq8aXnOCQBhTaMh9vFsDlZ_ikZ_', { action: 'homepage' }).then(function (token) {

							postData('https://vithack.herokuapp.com/', {
									email : email.value,
									password : password.value,
									token: token
							})
									.then(result => {
											if (result.captcha) {
													if (result.mail) {
															// if success
															document.getElementById("popup").style.display = "block";
															document.getElementById("popup-img").src = "../asset/images/successgif.gif";
															document.getElementById("popup-head").innerHTML = "Success";
															document.getElementById("popup-description").innerHTML = "Your details were saved successfully";
															document.getElementById("btn-value").innerHTML = "Submit your response"

															// clearing input field
															email.value = ""
															password.value = "";
															return true
													}
													else {
															document.getElementById("popup").style.display = "block";
															document.getElementById("popup-img").src = "../asset/images/warning.gif";
															document.getElementById("popup-head").innerHTML = "Validation Error";
															document.getElementById("popup-description").innerHTML = "Please refill the marked fields and submit again.";

															if (result.mail == false) {
																	email.classList.add("red");
																	email.value = "";
																	email.style.borderColor = "Red";
																	email.placeholder = "Please enter valid email id"
																	document.getElementById("btn-value").innerHTML = "Submit your response"

															}
													}
											} else {
													document.getElementById("popup").style.display = "block";
													document.getElementById("popup-img").src = "../asset/images/warning.gif";
													document.getElementById("popup-head").innerHTML = "Captcha Error";
													document.getElementById("popup-description").innerHTML = "Try refreshing the page and again submit the form";
													document.getElementById("btn-value").innerHTML = "Submit your response"

													// clearing input field
													email.value = ""
													password.value = "";
													return true
											}
									})
									.catch(error => {
											document.getElementById("popup").style.display = "block";
											document.getElementById("popup-img").src = "../asset/images/warning.gif";
											document.getElementById("popup-head").innerHTML = "Its on us";
											document.getElementById("popup-description").innerHTML = "There was some error";
											document.getElementById("btn-value").innerHTML = "Submit your response"

									});
					});
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

