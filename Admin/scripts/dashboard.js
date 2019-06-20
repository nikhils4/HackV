
// logout btn
document.getElementById("logout").addEventListener("click", (e) => {
    sessionStorage.removeItem("token")
    document.location.href = "logout.html"
})

// Fetch call for get the registration count for all registrations
fetch('https://vithack.herokuapp.com/dashboard/count')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        document.getElementsByClassName('count-value')[0].innerHTML = data.campus_ambassadors;
        document.getElementsByClassName('count-value')[1].innerHTML = data.collaborators;
        document.getElementsByClassName('count-value')[2].innerHTML = data.sponsors;
        document.getElementsByClassName('count-value')[3].innerHTML = data.early_birds;
    })

// Making input box visible on applying filter
document.getElementById("collab-drop").addEventListener("input", e => {
    if (e.target.selectedIndex != 0) {
        document.getElementById("collab-input").style.visibility = "visible"
    } else {
        document.getElementById("collab-input").style.visibility = "hidden"
    }
})

// Making input box visible on applying filter
document.getElementById("ca-drop").addEventListener("input", e => {
    if (e.target.selectedIndex != 0) {
        document.getElementById("ca-input").style.visibility = "visible"
    } else {
        document.getElementById("ca-input").style.visibility = "hidden"
    }
})


// Making input box visible on applying filter
document.getElementById("eb-drop").addEventListener("input", e => {
    if (e.target.selectedIndex != 0) {
        document.getElementById("eb-input").style.visibility = "visible"
    } else {
        document.getElementById("eb-input").style.visibility = "hidden"
    }
})

// Making input box visible on applying filter
document.getElementById("sponsors-drop").addEventListener("input", e => {
    if (e.target.selectedIndex != 0) {
        document.getElementById("sponsors-input").style.visibility = "visible"
    } else {
        document.getElementById("sponsors-input").style.visibility = "hidden"
    }
})


// call to get all of data using fetch
document.getElementById("collab-submit").addEventListener("click", e => {
    let select = document.getElementById("collab-drop").value
    let input = document.getElementById("collab-input").value
    let query = {}
    document.getElementById("collab-load").style.visibility = "visible"
    if (document.getElementById("collab-drop").selectedIndex == 0) {
        query = JSON.stringify({})
        let url = `https://vithack.herokuapp.com/dashboard/collaborators?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                console.log("Sahii aaya hain")
                return response.json()
            })
            .then((data) => {
                renderCollabData(data.data)
                document.getElementById("collab-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    } else {
        query[select] = {
            $regex : input,
            $options : "i"
        }
        query = JSON.stringify(query)
        let url = `https://vithack.herokuapp.com/dashboard/collaborators?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderCollabData(data.data)
                document.getElementById("collab-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    }
})


// call to get all of data using fetch
document.getElementById("sponsors-submit").addEventListener("click", e => {
    let select = document.getElementById("sponsors-drop").value
    let input = document.getElementById("sponsors-input").value
    let query = {}
    document.getElementById("sponsors-load").style.visibility = "visible"
    if (document.getElementById("sponsors-drop").selectedIndex == 0) {
        query = JSON.stringify({})
        let url = `https://vithack.herokuapp.com/dashboard/sponsors?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderSponsorsData(data.data)
                document.getElementById("sponsors-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    } else {
        query[select] = {
            $regex : input,
            $options : "i"
        }
        query = JSON.stringify(query)
        let url = `https://vithack.herokuapp.com/dashboard/sponsors?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderSponsorsData(data.data)
                document.getElementById("sponsors-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    }
})


// call to get all of data using fetch
document.getElementById("ca-submit").addEventListener("click", e => {
    let select = document.getElementById("ca-drop").value
    let input = document.getElementById("ca-input").value
    let query = {}
    document.getElementById("ca-load").style.visibility = "visible"
    if (document.getElementById("ca-drop").selectedIndex == 0) {
        query = JSON.stringify({})
        let url = `https://vithack.herokuapp.com/dashboard/campus-ambassadors?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderCAData(data.data)
                document.getElementById("ca-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    } else {
        query[select] = {
            $regex : input,
            $options : "i"
        }
        query = JSON.stringify(query)
        let url = `https://vithack.herokuapp.com/dashboard/campus-ambassadors?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderCAData(data.data)
                document.getElementById("ca-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    }
})



// call to get all of data using fetch
document.getElementById("eb-submit").addEventListener("click", e => {
    let select = document.getElementById("eb-drop").value
    let input = document.getElementById("eb-input").value
    let query = {}
    document.getElementById("eb-load").style.visibility = "visible"
    if (document.getElementById("eb-drop").selectedIndex == 0) {
        query = JSON.stringify({})
        let url = `https://vithack.herokuapp.com/dashboard/earlybirds?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderEBData(data.data)
                document.getElementById("eb-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    } else {
        query[select] = {
            $regex : input,
            $options : "i"
        }
        query = JSON.stringify(query)
        let url = `https://vithack.herokuapp.com/dashboard/earlybirds?skip=0&sort=-_id&query=${query}`
        fetch(url, {
            headers: {
                'Authorization': sessionStorage.getItem("token")
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                renderEBData(data.data)
                document.getElementById("eb-load").style.visibility = "hidden"
                return true
            })
            .catch( err => {
                window.location.href = "error.html"
            })
    }
})


function renderCollabData(data) {
    if (document.getElementById("collab-table-cover").contains(document.getElementById("collab-table"))) {
        document.getElementById("collab-table").parentNode.removeChild(document.getElementById("collab-table"));
    }
    let dataList = ["Name", "Designation", "Email", "Code", "Contact Number", "Company Name", "Company Sector", "Company Link", "Company Website"]
    let table = document.createElement("table")
    table.setAttribute("class", "table table-hover table-striped table-light")
    table.setAttribute("id", "collab-table")
    let thead = document.createElement("thead")
    thead.setAttribute("class", "thead-dark")
    let tr = document.createElement("tr")
    for (let i = 0; i < dataList.length; i++) {
        let head = document.createTextNode(dataList[i])
        let th = document.createElement("th")
        th.setAttribute("scope", "col");
        th.appendChild(head)
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let dataContent = ["name", "designation", "email", "code", "phoneNumber", "company_name", "company_sector", "company_location", "company_website"]
    let tbody = document.createElement("tbody")
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < dataContent.length; j++) {
            let content = document.createTextNode(data[i][dataContent[j]])
            let td = document.createElement("td")
            td.appendChild(content)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    document.getElementById("collab-table-cover").appendChild(table)
}

function renderCAData(data) {
    if (document.getElementById("ca-table-cover").contains(document.getElementById("ca-table"))) {
        document.getElementById("ca-table").parentNode.removeChild(document.getElementById("ca-table"));
    }
    let dataList = ["Name", "DOB", "Gender", "Email", "Portfolio Link", "Social Link", "Country", "State", "City", "Code I", "Contact I", "Code II", "Contact II", "Address", "College Name", "YOS", "College website", "Field of study", "Degree", "Question One", "Question Two", "Question Three", "Question Four"]
    let table = document.createElement("table")
    table.setAttribute("class", "table table-hover table-striped table-light")
    table.setAttribute("id", "ca-table")
    let thead = document.createElement("thead")
    thead.setAttribute("class", "thead-dark")
    let tr = document.createElement("tr")
    for (let i = 0; i < dataList.length; i++) {
        let head = document.createTextNode(dataList[i])
        let th = document.createElement("th")
        th.setAttribute("scope", "col");
        th.appendChild(head)
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let dataContent = ["full_name", "dob", "gender", "email", "portfolio_link", "social_portfolio_link", "country", "state", "city", "code", "number", "secondary_code", "secondary_number", "address", "college_name", "year_of_study", "college_website", "brand_of_specialization", "course_name", "questions"]
    let tbody = document.createElement("tbody")
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < dataContent.length; j++) {
            if (dataContent[j] == "questions") {
                for (let q = 0; q < 4; q++) {
                    let content = document.createTextNode(data[i][dataContent[j]][q]["answer"])
                    let td = document.createElement("td")
                    td.setAttribute("style", "text-overflow : ellipsis; overflow: hidden; white-space: nowrap; max-width : 100px; cursor : pointer; color : blue; text-decoration : underline")
                    td.setAttribute("onClick", `showAnswer(event, ${q} )`)
                    td.appendChild(content)
                    tr.appendChild(td)
                }
            } else {
                let content = document.createTextNode(data[i][dataContent[j]])
                let td = document.createElement("td")
                td.appendChild(content)
                tr.appendChild(td)
            }
            // console.log("This is ",data[i][dataContent[j]])
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    document.getElementById("ca-table-cover").appendChild(table)
}


function renderEBData(data) {
    if (document.getElementById("eb-table-cover").contains(document.getElementById("eb-table"))) {
        document.getElementById("eb-table").parentNode.removeChild(document.getElementById("eb-table"));
    }
    let dataList = ["Full Name", "Gender", "Email Address", "Code", "Contact Number", "College Name", "Field of study", "Pursued Degree", "Country", "State", "City"]
    let table = document.createElement("table")
    table.setAttribute("class", "table table-hover table-striped table-light")
    table.setAttribute("id", "eb-table")
    let thead = document.createElement("thead")
    thead.setAttribute("class", "thead-dark")
    let tr = document.createElement("tr")
    for (let i = 0; i < dataList.length; i++) {
        let head = document.createTextNode(dataList[i])
        let th = document.createElement("th")
        th.setAttribute("scope", "col");
        th.appendChild(head)
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let dataContent = ["full_name", "gender", "email", "code", "number", "college_name", "brand_of_specialization", "course_name", "country", "state", "city"]
    let tbody = document.createElement("tbody")
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < dataContent.length; j++) {
            let content = document.createTextNode(data[i][dataContent[j]])
            let td = document.createElement("td")
            td.appendChild(content)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    document.getElementById("eb-table-cover").appendChild(table)
}

function renderSponsorsData(data) {
    if (document.getElementById("sponsors-table-cover").contains(document.getElementById("sponsors-table"))) {
        document.getElementById("sponsors-table").parentNode.removeChild(document.getElementById("sponsors-table"));
    }
    let dataList = ["Company name", "Company address", "Email", "Code", "Phone number", "Bracket", "Message"]
    let table = document.createElement("table")
    table.setAttribute("class", "table table-hover table-striped table-light")
    table.setAttribute("id", "sponsors-table")
    let thead = document.createElement("thead")
    thead.setAttribute("class", "thead-dark")
    let tr = document.createElement("tr")
    for (let i = 0; i < dataList.length; i++) {
        let head = document.createTextNode(dataList[i])
        let th = document.createElement("th")
        th.setAttribute("scope", "col");
        th.appendChild(head)
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let dataContent = ["company_name", "company_address", "email", "code", "phoneNumber", "bracket", "message"]
    let tbody = document.createElement("tbody")
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr")
        for (let j = 0; j < dataContent.length; j++) {
            if (dataContent[j] == "message") {
                let content = document.createTextNode(data[i]["message"])
                let td = document.createElement("td")
                td.setAttribute("style", "text-overflow : ellipsis; overflow: hidden; white-space: nowrap; max-width : 100px; cursor : pointer; color : blue; text-decoration : underline")
                td.setAttribute("onClick", "showMessage(event)")
                td.appendChild(content)
                tr.appendChild(td)
            } else {
                let content = document.createTextNode(data[i][dataContent[j]])
                let td = document.createElement("td")
                td.appendChild(content)
                tr.appendChild(td)
            }
            // console.log("This is ",data[i][dataContent[j]])
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    document.getElementById("sponsors-table-cover").appendChild(table)
}




function showAnswer(e, q) {
    let questions = [
        "If chosen to be CA, how would you popularise VITHack on and off social media?",
        "We understand how occupied college students are with exams/ college events etc. if this is the case, how would you convince them not to miss out on this opportunity?",
        "How would you deal with the menace of trolls on our social media pages?",
        "At a professional event, how would you strike up a conversation with people you haven’t met before?"
    ]
    let content = e.target.innerHTML;
    document.getElementById("popup").style.display = "block"
    document.getElementById("popup-question").innerHTML = questions[q];
    document.getElementById("popup-content").innerHTML = content;
}

document.getElementById("delete").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "none"
})

function showMessage(e) {
    let content = e.target.innerHTML;
    document.getElementById("popup-question").innerHTML = "Message"
    document.getElementById("popup").style.display = "block"
    document.getElementById("popup-content").innerHTML = content;
}

document.getElementById("delete").addEventListener("click", (e) => {
    document.getElementById("popup").style.display = "none"
})

document.getElementById("collab-card").addEventListener("click", (e) => {
    document.getElementById("collab-top").style.display = "block"
    document.getElementById("CA-top").style.display = "none"
    document.getElementById("eb-top").style.display = "none"
    document.getElementById("sponsors-top").style.display = "none"
})

document.getElementById("eb-card").addEventListener("click", (e) => {
    document.getElementById("collab-top").style.display = "none"
    document.getElementById("CA-top").style.display = "none"
    document.getElementById("eb-top").style.display = "block"
    document.getElementById("sponsors-top").style.display = "none"
})

document.getElementById("sponsors-card").addEventListener("click", (e) => {
    document.getElementById("collab-top").style.display = "none"
    document.getElementById("CA-top").style.display = "none"
    document.getElementById("eb-top").style.display = "none"
    document.getElementById("sponsors-top").style.display = "block"
})

document.getElementById("CA-card").addEventListener("click", (e) => {
    document.getElementById("collab-top").style.display = "none"
    document.getElementById("CA-top").style.display = "block"
    document.getElementById("eb-top").style.display = "none"
    document.getElementById("sponsors-top").style.display = "none"
})



//on click of of data rendering 

document.getElementById("sponsors-card").addEventListener("click", (e) => {
    document.getElementById("info").innerHTML = ""
    let query = {}
    document.getElementById("sponsors-drop").selectedIndex = 0;
    document.getElementById("sponsors-input").value = ""
    document.getElementById("sponsors-load").style.visibility = "visible"
    query = JSON.stringify({})
    let url = `https://vithack.herokuapp.com/dashboard/sponsors?skip=0&sort=-_id&query=${query}`
    fetch(url, {
        headers: {
            'Authorization': sessionStorage.getItem("token")
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderSponsorsData(data.data)
        document.getElementById("sponsors-top").scrollIntoView();
        document.getElementById("sponsors-load").style.visibility = "hidden"
        return true
    })
    .catch( err => {
        window.location.href = "error.html"
    })
})

document.getElementById("CA-card").addEventListener("click", (e) => {
    document.getElementById("info").innerHTML = ""
    document.getElementById("ca-drop").selectedIndex = 0
    document.getElementById("ca-input").value = ""
    let query = {}
    document.getElementById("ca-load").style.visibility = "visible"
    query = JSON.stringify({})
    let url = `https://vithack.herokuapp.com/dashboard/campus-ambassadors?skip=0&sort=-_id&query=${query}`
    fetch(url, {
        headers: {
            'Authorization': sessionStorage.getItem("token")
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderCAData(data.data)
        document.getElementById("CA-top").scrollIntoView();
        document.getElementById("ca-load").style.visibility = "hidden"
        return true
    })
    .catch( err => {
        window.location.href = "error.html"
    })
   
})

document.getElementById("eb-card").addEventListener("click", (e) => {
    document.getElementById("info").innerHTML = ""
    document.getElementById("eb-drop").selectedIndex = 0;
    document.getElementById("eb-input").value = ""
    let query = {}
    document.getElementById("eb-load").style.visibility = "visible"
    query = JSON.stringify({})
    let url = `https://vithack.herokuapp.com/dashboard/earlybirds?skip=0&sort=-_id&query=${query}`
    fetch(url, {
        headers: {
            'Authorization': sessionStorage.getItem("token")
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderEBData(data.data)
        document.getElementById("eb-top").scrollIntoView();
        document.getElementById("eb-load").style.visibility = "hidden"
        return true
    })
    .catch( err => {
        window.location.href = "error.html"
    })
})

document.getElementById("collab-card").addEventListener("click", (e) => {
    document.getElementById("info").innerHTML = ""
    document.getElementById("collab-drop").selectedIndex = 0
    document.getElementById("collab-input").value = ""
    let query = {}
    document.getElementById("collab-load").style.visibility = "visible"
    query = JSON.stringify({})
    let url = `https://vithack.herokuapp.com/dashboard/collaborators?skip=0&sort=-_id&query=${query}`
    fetch(url, {
        headers: {
            'Authorization': sessionStorage.getItem("token")
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderCollabData(data.data)
        document.getElementById("collab-top").scrollIntoView();
        document.getElementById("collab-load").style.visibility = "hidden"
        return true
    })
    .catch( err => {
        window.location.href = "error.html"
    })

})

function updateFilterLinkSponsors(e) {
    let select = document.getElementById("sponsors-drop").value
    let input = document.getElementById("sponsors-input").value
    let query = {}
    query[select] = {
        $regex : input,
        $options : "i"
    }
    query = JSON.stringify(query)
    document.getElementById("sponsors-filter-link").setAttribute("href", "http://localhost:3000/dashboard/sponsors?skip=0&sort=-_id&query= " + query + "&_export=csv")
}

function updateFilterLinkCA(e) {
    let select = document.getElementById("ca-drop").value
    let input = document.getElementById("ca-input").value
    let query = {}
    query[select] = {
        $regex : input,
        $options : "i"
    }
    query = JSON.stringify(query)
    document.getElementById("ca-filter-link").setAttribute("href", "http://localhost:3000/dashboard/campus-ambassadors?skip=0&sort=-_id&query= " + query + "&_export=csv")
}

function updateFilterLinkEB(e) {
    let select = document.getElementById("eb-drop").value
    let input = document.getElementById("eb-input").value
    let query = {}
    query[select] = {
        $regex : input,
        $options : "i"
    }
    query = JSON.stringify(query)
    document.getElementById("eb-filter-link").setAttribute("href", "http://localhost:3000/dashboard/earlybirds?skip=0&sort=-_id&query= " + query + "&_export=csv")
}

function updateFilterLinkCollab(e) {
    let select = document.getElementById("collab-drop").value
    let input = document.getElementById("collab-input").value
    let query = {}
    query[select] = {
        $regex : input,
        $options : "i"
    }
    query = JSON.stringify(query)
    document.getElementById("collab-filter-link").setAttribute("href", "http://localhost:3000/dashboard/collaborators?skip=0&sort=-_id&query= " + query + "&_export=csv")
}










document.getElementById("eb-all-dwnld").addEventListener("click", (e) => {
    let query = {}
    // document.getElementById("eb-load").style.visibility = "visible"
    query = JSON.stringify({})
    console.log("Download")
    let url = "http://localhost:3000/dashboard/earlybirds?skip=0&sort=-_id&query={}&_export=csv"
    fetch(url, {
        headers: {
            'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluLXJveWFsLXNuZXdrZXMtOTBAdml0aGFjay5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE1NjEwMjQxODF9.ayBrr-mL4i8Ax5uHr8OJrjBpzxRhJhHJuwOd2DDMe68"
        }
    })
    .then((response) => {
        console.log(response)
        return response.text()
    })
    .then((data) => {
        window.location.href = "file.csv"
        return true
    })
    .catch( err => {
        console.log("This is the error ", err )
        // window.location.href = "error.html"
    })
})




