
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


function fieldReset(event) {
    event.target.style.borderColor = "#0086f4";
    event.target.placeholder = "";
}



document.getElementById("submit").addEventListener("click", e => {
    let email = document.getElementById("emailAddress");
    let code = document.getElementById("code");
    let phoneNo = document.getElementById("phoneNo");
    let companyName = document.getElementById("companyName");
    let companyAddress = document.getElementById("companyAddress");
    let bracket = document.getElementById("bracket");
    let message = document.getElementById("message");

    let status = [];
    // Email validation
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
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
    if (phoneNo.value.length < 8 || phoneNo.value.length > 12) {
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

    // Company name
    if (companyName.value.trim().length == 0) {
        companyName.classList.add("red");
        companyName.value = "";
        companyName.style.borderColor = "Red";
        companyName.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company name validated
        status.push("true")
    }

    // Company Address
    if (companyAddress.value.trim().length == 0) {
        companyAddress.classList.add("red");
        companyAddress.value = "";
        companyAddress.style.borderColor = "Red";
        companyAddress.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // company address validated
        status.push("true")
    }

    // Bracket 
    if (bracket.selectedIndex == 0) {
        bracket.classList.add("red");
        bracket.style.borderColor = "Red";
        status.push("false");
    }
    else {
        // bracket validated
        status.push("true")
    }

    // Message
    if (message.value.split(' ').length <= 1) {
        message.classList.add("red");
        message.value = "";
        message.style.borderColor = "Red";
        message.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // message validated
        status.push("true")
    }

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
                    console.log(token);

                    postData('https://vithack.herokuapp.com/forms/sponsor', {
                        email: email.value,
                        code: code.value,
                        phoneNumber: phoneNo.value,
                        company_name: companyName.value,
                        company_address: companyAddress.value,
                        bracket: bracket.value,
                        message: message.value,
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
                                email.value = "";
                                code.value = "Choose ...";
                                phoneNo.value = "";
                                companyName.value = "";
                                companyAddress.value = "";
                                bracket.value = "Choose ...";
                                message.value = "";
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
                            email.value = "";
                            code.value = "Choose ...";
                            phoneNo.value = "";
                            companyName.value = "";
                            companyAddress.value = "";
                            bracket.value = "Choose ...";
                            message.value = "";
                            document.getElementById("btn-value").innerHTML = "Submit your response"

                            return false
                        }
                    })
                    .catch(error => {
                        document.getElementById("popup").style.display = "block";
                        document.getElementById("popup-img").src = "../asset/images/warning.gif";
                        document.getElementById("popup-head").innerHTML = "Its on us";
                        document.getElementById("popup-description").innerHTML = "There was some error";

                    });
                });
            });


    }
})

function postData(url = '', data = {}) {
    // Default options are marked with *
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