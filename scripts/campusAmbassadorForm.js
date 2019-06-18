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
    let quesFour = document.getElementById("quesFour");
    let codeOne = document.getElementById("codeOne");
    let codeTwo = document.getElementById("codeTwo");
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

    // Year of study
    if (yos.selectedIndex == 0) {
        yos.classList.add("red");
        yos.style.borderColor = "Red";
        status.push("false")
    }
    else {
        // phone number validated
        status.push("true")
    }

    // One
    if (quesOne.value.split(' ').length < 150) {
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
    if (quesTwo.value.split(' ').length < 150) {
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
    if (quesThree.value.split(' ').length < 150) {
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
    if (quesFour.value.split(' ').length < 150) {
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
    if (re.test(link.value.trim())) {
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
    if (re.test(cllgWeb.value.trim())) {
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

        document.getElementById("btn-value").innerHTML = "Loading...."

        grecaptcha.ready(function () {
            grecaptcha.execute('6LdwaqgUAAAAAHq8aXnOCQBhTaMh9vFsDlZ_ikZ_', { action: 'homepage' }).then(function (token) {

                postData('https://vithack.herokuapp.com/forms/campus_ambassador', {
                    full_name: fullName.value,
                    dob: dob.value,
                    gender: genderValue,
                    portfolio_link: link.value,
                    email : email.value,
                    social_portfolio_link: socialLink.value,
                    country: countryId.value,
                    state: stateId.value,
                    city: cityId.value,
                    number: phoneOne.value,
                    secondary_number: phoneTwo.value,
                    address: addr.value,
                    college_name: cllgName.value,
                    year_of_study: String(yos.value),
                    college_website: cllgWeb.value,
                    brand_of_specialization: branch.value,
                    course_name: courseName.value,
                    questions: [{
                        question: " If chosen to be CA, how would you popularise VITHack on and off social media?",
                        answer: quesOne.value
                    }, {
                        question: "We understand how occupied college students are with exams/ college events etc. if this is the case, how would you convince them not to miss out on this opportunity?",
                        answer: quesTwo.value
                    }, {
                        question: "How would you deal with the menace of trolls on our social media pages?",
                        answer: quesThree.value
                    }, {
                        question: "At a professional event, how would you strike up a conversation with people you haven’t met before?",
                        answer: quesFour.value
                    }],
                    secondary_code: codeTwo.value,
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
                                dob.value = "";
                                email.value = "";
                                phoneOne.value = "";
                                phoneTwo.value = "";
                                link.value = "";
                                socialLink.value = "";
                                cllgName.value = "";
                                cllgWeb.value = "";
                                courseName.value = "";
                                branch.value = "";
                                addr.value = "";
                                gender.value = "Choose ...";
                                countryId.value = "Choose ...";
                                stateId.value = "Choose ...";
                                cityId.value = "Choose ...";
                                codeOne.value = "Choose ...";
                                codeTwo.value = "Choose ...";
                                yos.value = "";
                                quesOne.value = "";
                                quesTwo.value = "";
                                quesThree.value = "";
                                quesFour.value = "";
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
                            document.getElementById("btn-value").innerHTML = "Submit your response"

                            // clearing input field
                            fullName.value = ""
                            dob.value = "";
                            phoneOne.value = "";
                            phoneTwo.value = "";
                            link.value = "";
                            socialLink.value = "";
                            cllgName.value = "";
                            cllgWeb.value = "";
                            courseName.value = "";
                            branch.value = "";
                            addr.value = "";
                            email.value;
                            gender.value = "Choose ...";
                            countryId.value = "Choose ...";
                            stateId.value = "Choose ...";
                            cityId.value = "Choose ...";
                            codeOne.value = "Choose ...";
                            codeTwo.value = "Choose ...";
                            yos.value = "";
                            quesOne.value = "";
                            quesTwo.value = "";
                            quesThree.value = "";
                            quesFour.value = "";
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

