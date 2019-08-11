

document.getElementById("preloader").style.display = "block";



window.onload = () => {
	document.getElementById("preloader").style.display = "none";


	setTimeout(() => {
		document.getElementById("reset-button").style.display = "none"
		document.getElementById("btn-value").setAttribute("style", "text-decoration : none; color : gray");
		document.getElementsByClassName("right-arrow")[0].style.visibility = "hidden";
	
		document.getElementById("popup").style.display = "block";
		document.getElementById("popup-description").innerHTML = "As mentioned in the email <b>Open Innovation</b> is pre-selected for you.";
	
		document.getElementById("close-btn").addEventListener("click", (e) => {
			document.getElementById("popup").style.display = "none";
		})
	
		// Do btn disable at last 
	
		// After this add error slider at top
	
		tracks = ["agriculture", "health", "mobility", "fintech", "education", "iot", "telecom", "energy", "comms"]
		let priority = {};
		sessionStorage.setItem("click", 1);
		sessionStorage.setItem("0", "open innovation");
		tracks.forEach(e => {
			document.getElementById(e).addEventListener("click", (event) => {
	
				if (Number(sessionStorage.getItem("click")) < 2) {
					document.getElementById("btn-value").setAttribute("style", "text-decoration : none; color : gray");
		document.getElementsByClassName("right-arrow")[0].style.visibility = "hidden";
				} else {
					document.getElementById("btn-value").setAttribute("style", "text-decoration : none; color : #007bff");
		document.getElementsByClassName("right-arrow")[0].style.visibility = "visible";
				}
	
	
				// No more than three clicks
				if (Number(sessionStorage.getItem("click")) == 3) {
					document.getElementById("popup").style.display = "block";
					document.getElementById("popup-description").innerHTML = "You cannot select more than three themes.<br> Try submitting the selected tracks";
					document.getElementById("popup-img").style.display = "none";
					document.getElementById("reset-button").style.display = "block"
				} else {
	
					// if custom attr false/true chk for single click on every element
					if (document.getElementById(e).getAttribute('data-click') == "false") {
	
	
	
						document.getElementById(e).setAttribute('data-click', 'true')
						document.getElementById(e + "-fade").style.opacity = "0.2";
						document.getElementById(e).style.border = "2px solid #007bff";
						document.getElementById(e).style.borderRadius = "5px";
	
						if (e == "comms"){
							e = "smart communication"
							sessionStorage.setItem(Number(sessionStorage.getItem("click")), e);
							e = "comms"
	
						} else if ( e == "iot") {
							e = "IoT"
							sessionStorage.setItem(Number(sessionStorage.getItem("click")), e);
							e = "iot"
						}
						else {
							sessionStorage.setItem(Number(sessionStorage.getItem("click")), e);
						}
	
						sessionStorage.setItem("click", Number(sessionStorage.getItem("click")) + 1);
						document.getElementById(e + "-priority").innerHTML = sessionStorage.getItem("click");
	
					}
	
				}
			})
		});
	
		// popup closer btn
		document.getElementById("close-btn").addEventListener("click", (e) => {
			document.getElementById("popup").style.display = "none";
		})
	
		document.getElementById("reset").addEventListener("click", (e) => {
			tracks.forEach(e => {
				document.getElementById(e + "-fade").style.opacity = "1";
				document.getElementById(e).style.border = "2px solid white";
				sessionStorage.setItem("click", 1);
				document.getElementById(e + "-priority").innerHTML = "";
				document.getElementById(e).setAttribute('data-click', 'false');
				document.getElementById("btn-value").setAttribute("style", "text-decoration : none; color : gray");
				document.getElementsByClassName("right-arrow")[0].style.visibility = "hidden";
			})
		})


		document.getElementById("reset-button").addEventListener("click", (e) => {
			document.getElementById("popup").style.display = "none";
			tracks.forEach(e => {
				document.getElementById(e + "-fade").style.opacity = "1";
				document.getElementById(e).style.border = "2px solid white";
				sessionStorage.setItem("click", 1);
				document.getElementById(e + "-priority").innerHTML = "";
				document.getElementById(e).setAttribute('data-click', 'false');
				document.getElementById("btn-value").setAttribute("style", "text-decoration : none; color : gray");
				document.getElementsByClassName("right-arrow")[0].style.visibility = "hidden";
			})
		})
	
		// put fetch call here =
		document.getElementById("submit").addEventListener("click", (e) => {
	
			if (Number(sessionStorage.getItem("click")) < 3) {
				document.getElementById("msg").innerHTML = "Select three themes before submitting";
						document.getElementById("msg").style.background = "red";
						document.getElementById("msg").classList.add("animated", "fadeInDown");
						document.getElementById("btn-value").innerHTML = "Submit your response";
						setTimeout(() => {
							document.getElementById("msg").classList.add("animated", "fadeOutUp");
						}, 5000)
						setTimeout(() => {
							document.getElementById("msg").classList.remove("animated", "fadeInDown", "fadeOutUp");
							document.getElementById("msg").innerHTML = "";
							document.getElementById("msg").style.background = "transparent";
						}, 6000)
	
			} else {
				document.getElementById("btn-value").innerHTML = "Loading....";
	
	postData('https://vithack.herokuapp.com/teams/themes', {
	themes: [sessionStorage.getItem("0").charAt(0).toUpperCase() + sessionStorage.getItem("0").slice(1), sessionStorage.getItem("1").charAt(0).toUpperCase() + sessionStorage.getItem("1").slice(1), sessionStorage.getItem("2").charAt(0).toUpperCase() + sessionStorage.getItem("2").slice(1)]
	})
	.then(result => {
	if (result.themes ) {
		sessionStorage.removeItem("token")
		document.getElementById("popup").style.display = "block";
		document.getElementById("popup-description").innerHTML = "<b>Thank you!</b><br> Your selected theme was successfully saved.";
		document.getElementById("popup-img").style.display = "none";
		document.getElementById("theme-success").style.display = "block";

		return true
	} else if ( result.message == "Already selected themes") {
		document.getElementById("msg").innerHTML = "You have already seleted theme";
		document.getElementById("msg").style.background = "red";
		document.getElementById("msg").classList.add("animated", "fadeInDown");
		document.getElementById("btn-value").innerHTML = "Submit your response";
		setTimeout(() => {
			document.getElementById("msg").classList.add("animated", "fadeOutUp");
		}, 5000)
		setTimeout(() => {
			document.getElementById("msg").classList.remove("animated", "fadeInDown", "fadeOutUp");
			document.getElementById("msg").innerHTML = "";
			document.getElementById("msg").style.background = "transparent";
		}, 6000)
	
	}
	else {
		document.getElementById("msg").innerHTML = "Unauthorised! Please login first before selecting themes";
		document.getElementById("msg").style.background = "red";
		document.getElementById("msg").classList.add("animated", "fadeInDown");
		document.getElementById("btn-value").innerHTML = "Submit your response";
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
	document.getElementById("btn-value").innerHTML = "Submit your response";
	setTimeout(() => {
		document.getElementById("msg").classList.add("animated", "fadeOutUp");
	}, 5000)
	setTimeout(() => {
		document.getElementById("msg").classList.remove("animated", "fadeInDown", "fadeOutUp");
		document.getElementById("msg").innerHTML = "";
		document.getElementById("msg").style.background = "transparent";
	}, 6000)
	
	});
			}
		})
	
	
	
		function postData(url = '', data = {}) {
			return fetch(url, {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': sessionStorage.getItem("token")
				},
				redirect: 'follow',
				referrer: 'no-referrer',
				body: JSON.stringify(data),
			})
				.then(response => response.json());
		};
	}, 1000)


}

