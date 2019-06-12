document.getElementById("blog").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-img").src = "../asset/images/comingsoon.gif";
    document.getElementById("popup-head").innerHTML = "Coming Soon";
    document.getElementById("popup-description").innerHTML = "We will be soon here";
})

document.getElementById("close-btn").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "none";
})

document.getElementById("submit").addEventListener("click", e => {
    let fullName = document.getElementById("fullName");
    let dob = document.getElementById("dob");
    let gender = document.getElementById("gender");
    let link = document.getElementById("link");
    let socialLink = document.getElementById("socialLink");
    let countryId = document.getElementById("countryId");
    let stateId = document.getElementById("stateId");
    let cityId = document.getElementById("cityId");
    let phoneOne = document.getElementById("phoneOne");
    let phoneTwo = document.getElementById("phoneTwo");
    let addr = document.getElementById("addr");
    let cllgName = document.getElementById("cllgName");
    let yos = document.getElementById("yos");
    let cllgWeb = document.getElementById("cllgWeb");
    let courseName = document.getElementById("courseName");
    let branch = document.getElementById("branch");
    let quesOne = document.getElementById("quesOne");
    let quesTwo = document.getElementById("quesTwo");
    let quesThree = document.getElementById("quesThree");

    let status = [];

    // If required add this is future
    // // Code validation
    // if(code.selectedIndex == 0){
    //     code.classList.add("red");
    //     code.style.borderColor = "Red";
    //     status.push("false")
    // }
    // else {
    //     status.push("true")
    //     // code validated
    // }

    // Year of study
    if (yos.value.length != 4) {
        yos.classList.add("red");
        yos.value = "";
        yos.style.borderColor = "Red";
        yos.placeholder = "Please enter valid year of study";
        status.push("false")
    }
    else {
        // phone number validated
        status.push("true")
    }

    // Phone number validation (One)
    if (phoneOne.value.length < 10 || phoneOne.value.length > 14) {
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

    // Phone number validation (Two)
    if (phoneTwo.value.length < 10 || phoneTwo.value.length > 14) {
        phoneTwo.classList.add("red");
        phoneTwo.value = "";
        phoneTwo.style.borderColor = "Red";
        phoneTwo.placeholder = "Please enter valid phone number";
        status.push("false")
    }
    else {
        // phone number validated
        status.push("true")
    }

    // Full name
    if (dob.value.trim().length != 10) {
        dob.classList.add("red");
        dob.value = "";
        dob.style.borderColor = "Red";
        dob.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // full name validated
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

    // Permanent Address
    if (addr.value.trim().length == 0) {
        addr.classList.add("red");
        addr.value = "";
        addr.style.borderColor = "Red";
        addr.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // Permanent address validated
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
        // City validated
        status.push("true")
    }

    // One
    if (quesOne.value.split(' ').length > 150) {
        quesOne.classList.add("red");
        quesOne.value = "";
        quesOne.style.borderColor = "Red";
        quesOne.placeholder = "Maximum word count should be less than 150 words";
        status.push("false")
    }
    else {
        // One validated
        status.push("true")
    }

    // Two
    if (quesTwo.value.split(' ').length > 150) {
        quesTwo.classList.add("red");
        quesTwo.value = "";
        quesTwo.style.borderColor = "Red";
        quesTwo.placeholder = "Maximum word count should be less than 150 words";
        status.push("false")
    }
    else {
        // Two validated
        status.push("true")
    }

    // Three
    if (quesThree.value.split(' ').length > 150) {
        quesThree.classList.add("red");
        quesThree.value = "";
        quesThree.style.borderColor = "Red";
        quesThree.placeholder = "Maximum word count should be less than 150 words";
        status.push("false")
    }
    else {
        // Three validated
        status.push("true")
    }

    // Four
    if (quesFour.value.split(' ').length > 150) {
        quesFour.classList.add("red");
        quesFour.value = "";
        quesFour.style.borderColor = "Red";
        quesFour.placeholder = "Maximum word count should be less than 150 words";
        status.push("false")
    }
    else {
        // Four validated
        status.push("true")
    }

    // Links validation
    let re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    // link
    if (re.test(link.value)) {
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

    // link
    if (re.test(socialLink.value)) {
        status.push("true")
        // email.style.borderColor = "Green";
        // link validated
    }
    else {
        socialLink.classList.add("red");
        socialLink.value = "";
        socialLink.style.borderColor = "Red";
        socialLink.placeholder = "Please enter valid url"
        status.push("false")
    }

    // link
    if (re.test(cllgWeb.value)) {
        status.push("true")
        // email.style.borderColor = "Green";
        // link validated
    }
    else {
        cllgWeb.classList.add("red");
        cllgWeb.value = "";
        cllgWeb.style.borderColor = "Red";
        cllgWeb.placeholder = "Please enter valid url"
        status.push("false")
    }

    // One
    if (quesOne.value.split(' ').length <= 1) {
        quesOne.classList.add("red");
        quesOne.value = "";
        quesOne.style.borderColor = "Red";
        quesOne.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // One validated
        status.push("true")
    }

    // Two
    if (quesTwo.value.split(' ').length <= 1) {
        quesTwo.classList.add("red");
        quesTwo.value = "";
        quesTwo.style.borderColor = "Red";
        quesTwo.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // Two validated
        status.push("true")
    }

    // Three
    if (quesThree.value.split(' ').length <= 1) {
        quesThree.classList.add("red");
        quesThree.value = "";
        quesThree.style.borderColor = "Red";
        quesThree.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // Three validated
        status.push("true")
    }

    // Four
    if (quesFour.value.split(' ').length <= 1) {
        quesFour.classList.add("red");
        quesFour.value = "";
        quesFour.style.borderColor = "Red";
        quesFour.placeholder = "This field is required";
        status.push("false")
    }
    else {
        // Four validated
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
        fullName.value = ""
        dob.value = "";
        // code.value = "Choose ...";
        phoneOne.value = "";
        phoneTwo.value = "";
        link.value = "";
        socialLink.value = "";
        gender.value = "Choose ...";
        cllgName.value = "";
        cllgWeb.value = "";
        courseName.value = "";
        branch.value = "";
        addr.value = "";
        gender.value = "Choose ...";
        countryId.value = "Choose ...";
        stateId.value = "Choose ...";
        cityId.value = "Choose ...";
        yos.value = "";
        quesOne.value = "";
        quesTwo.value = "";
        quesThree.value = "";
        quesFour.value = "";
        return true
    }
})

function fieldReset(event) {
    event.target.style.borderColor = "#0086f4";
    event.target.placeholder = "";
}



