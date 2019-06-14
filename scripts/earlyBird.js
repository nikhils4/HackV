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

document.getElementById("gender").addEventListener("input", (e) => {
    if (e.target.selectedIndex == 4) {
        document.getElementById("gender-oth").style.display = "block"
    } else {
        document.getElementById("gender-oth").style.display = "none"
    }
})

document.getElementById("submit").addEventListener("click", e => {
    let fullName = document.getElementById("fullName");
    let gender = document.getElementById("gender");
    let countryId = document.getElementById("countryId");
    let stateId = document.getElementById("stateId");
    let cityId = document.getElementById("cityId");
    let phoneOne = document.getElementById("phoneOne");
    let cllgName = document.getElementById("cllgName");
    let courseName = document.getElementById("courseName");
    let branch = document.getElementById("branch");
    let codeOne = document.getElementById("codeOne");
    let email = document.getElementById("emailAddress")


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

    // Code One
    if (codeOne.selectedIndex == 0) {
        codeOne.classList.add("red");
        codeOne.style.borderColor = "Red";
        status.push("false")
    }
    else {
        status.push("true")
        // code validated
    }

   

    // Phone number validation (One)
    if (phoneOne.value.trim().length < 8 || phoneOne.value.trim().length > 14) {
        phoneOne.classList.add("red");
        phoneOne.value = "";
        phoneOne.style.borderColor = "Red";
        phoneOne.placeholder = "Please enter valid phone number";
        status.push("false")
    }
    else {
        // phone number validated
        status.push("true")
    }


    // Full name
    if (fullName.value.trim().length == 0) {
        fullName.classList.add("red");
        fullName.value = "";
        fullName.style.borderColor = "Red";
        fullName.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // full name validated
        status.push("true")
    }

    // Course name
    if (courseName.value.trim().length == 0) {
        courseName.classList.add("red");
        courseName.value = "";
        courseName.style.borderColor = "Red";
        courseName.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // Course Name name validated
        status.push("true")
    }

    // College name
    if (cllgName.value.trim().length == 0) {
        cllgName.classList.add("red");
        cllgName.value = "";
        cllgName.style.borderColor = "Red";
        cllgName.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // College name validated
        status.push("true")
    }

    // College name
    if (branch.value.trim().length == 0) {
        branch.classList.add("red");
        branch.value = "";
        branch.style.borderColor = "Red";
        branch.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // College name validated
        status.push("true")
    }


    // Country
    if (countryId.selectedIndex == 0) {
        countryId.classList.add("red");
        countryId.style.borderColor = "Red";
        status.push("false");
    }
    else {
        // country validated
        status.push("true")
    }

    // State
    if (stateId.selectedIndex == 0) {
        stateId.classList.add("red");
        stateId.style.borderColor = "Red";
        status.push("false");
    }
    else {
        // state validated
        status.push("true")
    }

    // City
    if (cityId.selectedIndex == 0) {
        cityId.classList.add("red");
        cityId.style.borderColor = "Red";
        status.push("false");
    }
    else {
        // City validated
        status.push("true")
    }

    // Gender
    if (gender.selectedIndex == 0) {
        gender.classList.add("red");
        gender.style.borderColor = "Red";
        status.push("false");
    }
    else {
        if (gender.selectedIndex == 4) {
            genderValue = document.getElementById("gender-oth-value").value;
            if (document.getElementById("gender-oth-value").value.length == 0){
                document.getElementById("gender-oth-value").classList.add("red");
                document.getElementById("gender-oth-value").value = "";
                document.getElementById("gender-oth-value").style.borderColor = "Red";
                document.getElementById("gender-oth-value").placeholder = "Please specify";
                status.push("false")
            }
        } else {
            genderValue = gender.value;
        }
        status.push("true")
    }

   
    

    // Main eval
    if (status.includes("false")) {
        return false
    } else {


        document.getElementById("btn-value").innerHTML = "Loading...."

        grecaptcha.ready(function () {
            grecaptcha.execute('6LdwaqgUAAAAAHq8aXnOCQBhTaMh9vFsDlZ_ikZ_', { action: 'homepage' }).then(function (token) {

                postData('https://vithack.herokuapp.com/forms/early_bird', {
                    full_name: fullName.value,
                    gender: genderValue,
                    email : email.value,
                    country: countryId.value,
                    state: stateId.value,
                    city: cityId.value,
                    number: phoneOne.value,
                    college_name: cllgName.value,
                    brand_of_specialization: branch.value,
                    course_name: courseName.value,
                    code: codeOne.value,
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
                                document.getElementById("btn-value").innerHTML = "Submit your response"

                                // clearing input field
                                fullName.value = ""
                                email.value = "";
                                phoneOne.value = "";
                                cllgName.value = "";
                                courseName.value = "";
                                branch.value = "";
                                gender.value = "Choose ...";
                                countryId.value = "Choose ...";
                                stateId.value = "Choose ...";
                                cityId.value = "Choose ...";
                                codeOne.value = "Choose ...";
                                
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
                            fullName.value = ""
                            email.value = "";
                            phoneOne.value = "";
                            cllgName.value = "";
                            courseName.value = "";
                            branch.value = "";
                            gender.value = "Choose ...";
                            countryId.value = "Choose ...";
                            stateId.value = "Choose ...";
                            cityId.value = "Choose ...";
                            codeOne.value = "Choose ...";
                            
                            return true
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

