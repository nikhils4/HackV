document.getElementById("blog").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").classList.add("animated", "fadeIn", "fast");
    document.getElementById("popup-img").src = "../asset/images/comingsoon.gif";
    document.getElementById("popup-head").innerHTML = "Coming Soon";
    document.getElementById("popup-description").innerHTML = "We will be soon here";
})

document.getElementById("close-btn").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "none";
})

document.getElementById("submit").addEventListener("click", e => {
    let nameOne = document.getElementById("nameOne");
    let nameTwo = document.getElementById("nameTwo");
    let sector = document.getElementById("sector");
    let link = document.getElementById("link");
    let companyWeb = document.getElementById("companyWeb");
    let email = document.getElementById("email");
    let code = document.getElementById("code");
    let phoneNo = document.getElementById("phoneNo");
    let des = document.getElementById("des");

    let status = [];
    // Email validation
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
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

    let reg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    // link
    if (reg.test(link.value.trim())) {
        status.push("true")
        // email.style.borderColor = "Green";
        // link validated
    }
    else {
        link.classList.add("red");
        link.value = "";
        link.style.borderColor = "Red";
        link.placeholder = "Please enter valid url"
        status.push("false")
    }

    // Company Website
    if (reg.test(companyWeb.value.trim())) {
        status.push("true")
        // email.style.borderColor = "Green";
        // link validated
    }
    else {
        companyWeb.classList.add("red");
        companyWeb.value = "";
        companyWeb.style.borderColor = "Red";
        companyWeb.placeholder = "Please enter valid url"
        status.push("false")
    }

    // Code validation
    if (code.selectedIndex == 0) {
        code.classList.add("red");
        code.style.borderColor = "Red";
        status.push("false")
    }
    else {
        status.push("true")
        // code validated
    }

    // Phone number validation
    if (phoneNo.value.trim().length < 8 || phoneNo.value.trim().length > 14 ) {
        phoneNo.classList.add("red");
        phoneNo.value = "";
        phoneNo.style.borderColor = "Red";
        phoneNo.placeholder = "Please enter valid phone number";
        status.push("false")
    }
    else {
        // phone number validated
        status.push("true")
    }

    // Name One
    if (nameOne.value.trim().length == 0) {
        nameOne.classList.add("red");
        nameOne.value = "";
        nameOne.style.borderColor = "Red";
        nameOne.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company name validated
        status.push("true")
    }

    // Name Two
    if (nameTwo.value.trim().length == 0) {
        nameTwo.classList.add("red");
        nameTwo.value = "";
        nameTwo.style.borderColor = "Red";
        nameTwo.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company address validated
        status.push("true")
    }

    // Sector
    if (sector.value.trim().length == 0) {
        sector.classList.add("red");
        sector.value = "";
        sector.style.borderColor = "Red";
        sector.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company address validated
        status.push("true")
    }

    // Designation
    if (des.value.trim().length == 0) {
        des.classList.add("red");
        des.value = "";
        des.style.borderColor = "Red";
        des.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company address validated
        status.push("true")
    

    // Main eval
    if (status.includes("false")) {
        return false
    } else {
        // put ajax call here
        // after successful ajax call clear all the input field
        // enter the message in popup - success
        // and even have to show error received from the backend
        document.getElementById("btn-value").innerHTML = "Loading...."

        grecaptcha.ready(function () {
            grecaptcha.execute('6LdwaqgUAAAAAHq8aXnOCQBhTaMh9vFsDlZ_ikZ_', { action: 'homepage' }).then(function (token) {
                postData('https://vithack.herokuapp.com/forms/collaborator', {
                    name : nameTwo.value,
                    email: email.value,
                    code: code.value,
                    phoneNumber: phoneNo.value,
                    company_website: companyWeb.value,
                    company_name: nameOne.value,
                    designation : des.value,
                    company_sector : sector.value,
                    company_location : link.value,
                    token: token
                })
                .then(result => {
                    if (result.captcha) {
                        if (result.mail && result.phone) {
                            // if success
                            document.getElementById("popup").style.display = "block";
                            document.getElementById("popup-img").src = "../asset/images/successgif.gif";
                            document.getElementById("popup-head").innerHTML = "Success";
                            document.getElementById("popup-description").innerHTML = "Your details were saved successfully";

                            // clearing input field
                            nameTwo.value = "";
                            email.value = "";
                            code.value = "Choose ...";
                            phoneNo.value = "";
                            companyWeb.value = "";
                            nameOne.value = "";
                            des.value = "";
                            sector.value = "";
                            link.value = "";
                            document.getElementById("btn-value").innerHTML = "Submit your response"

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
                            if (result.phone == false) {
                                phoneNo.classList.add("red");
                                phoneNo.value = "";
                                phoneNo.style.borderColor = "Red";
                                phoneNo.placeholder = "Please enter valid phone number";
                                document.getElementById("btn-value").innerHTML = "Submit your response"

                            }
                        }
                    } else {
                        document.getElementById("popup").style.display = "block";
                        document.getElementById("popup-img").src = "../asset/images/warning.gif";
                        document.getElementById("popup-head").innerHTML = "Captcha Error";
                        document.getElementById("popup-description").innerHTML = "Try refreshing the page and again submit the form";

                        // clearing input field
                        nameTwo.value = "";
                        email.value = "";
                        code.value = "Choose ...";
                        phoneNo.value = "";
                        companyWeb.value = "";
                        nameOne.value = "";
                        des.value = "";
                        sector.value = "";
                        link.value = "";
                        document.getElementById("btn-value").innerHTML = "Submit your response"

                        return false
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
        
        };
        
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


