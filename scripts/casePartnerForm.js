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

    let reg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    // link
    if (reg.test(link.value)) {
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
    if (reg.test(companyWeb.value)) {
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
    if (phoneNo.value.length != 10) {
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
    }





    // Main eval
    if (status.includes("false")) {
        return false
    } else {
        // put ajax call here
        // after successful ajax call clear all the input field
        // enter the message in popup - success
        // and even have to show error received from the backend

        // if success
        document.getElementById("popup").style.display = "block";
        document.getElementById("popup-img").src = "../asset/images/successgif.gif";
        document.getElementById("popup-head").innerHTML = "Success";
        document.getElementById("popup-description").innerHTML = "Your details were saved successfully";

        // clearing input field
        email.value = "";
        code.value = "Choose ...";
        phoneNo.value = "";
        nameOne.value = "";
        nameTwo.value = "";
        link.value = "";
        companyWeb.value = "";
        des.value = "";
        sector.value = "";
        return true
    }
})

function fieldReset(event) {
    event.target.style.borderColor = "#0086f4";
    event.target.placeholder = "";
}



