function emailVerify(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)){
        return true
    }
    else {
        return false
    }
}


function createRecNode(message){
    let div = document.createElement("div");
    div.setAttribute("class", "rec-box");
    let divSub = document.createElement("div");
    divSub.setAttribute("class", "rec-cover");
    let divCont = document.createElement("div");
    let cont = document.createTextNode(message);
    divCont.appendChild(cont);
    divSub.appendChild(divCont);
    div.appendChild(divSub);
    document.getElementsByClassName("chat-msg")[1].appendChild(div);
} 

function createSendNode(message){
    let div = document.createElement("div");
    div.setAttribute("class", "send-box");
    let divSub = document.createElement("div");
    divSub.setAttribute("class", "send-cover");
    let divCont = document.createElement("div");
    let cont = document.createTextNode(message);
    divCont.appendChild(cont);
    divSub.appendChild(divCont);
    div.appendChild(divSub);
    document.getElementsByClassName("chat-msg")[1].appendChild(div);
}



function createSendNodeEmail(message){
    let div = document.createElement("div");
    div.setAttribute("class", "send-box");
    let divSub = document.createElement("div");
    divSub.setAttribute("class", "send-cover");
    let divCont = document.createElement("div");
    let cont = document.createTextNode(message);
    divCont.appendChild(cont);
    divSub.appendChild(divCont);
    div.appendChild(divSub);
    document.getElementsByClassName("chat-msg")[0].appendChild(div);
}

function createChatWindow() {
    let div = document.createElement("div");
    div.setAttribute("style", "text-align : center; color : lightgray; font-size : 10px")
    let date = document.createTextNode(new Date(Date.now()).toLocaleString());
    div.appendChild(date);
    document.getElementsByClassName("chat-msg")[1].appendChild(div);
    createRecNode("Hey, there");
    createRecNode("Please enter your email id to proceed");
    createSendNode(document.getElementsByClassName("chat-content")[0].value);
    createRecNode("Thank you, for providing us your email!!");
    createRecNode("How can we help you ?");
    document.getElementsByClassName("chat-content")[0].value = "";
    WebSocketTest();
}



function WebSocketTest() {
    document.getElementsByClassName("chat-input")[1].style.borderColor = "Green";

    if ("WebSocket" in window) {
       ws = new WebSocket("wss://echo.websocket.org");


       ws.onopen = function() {
        document.getElementsByClassName("chat-send")[1].addEventListener("click", (event) => {

          if (document.getElementsByClassName("chat-content")[1].value.length >= 1) {
             ws.send(document.getElementsByClassName("chat-content")[1].value);
             createSendNode(document.getElementsByClassName("chat-content")[1].value);
             document.getElementsByClassName("chat-content")[1].value = null;
             document.getElementsByClassName("chat-msg")[1].scrollTo(0,document.getElementsByClassName("chat-msg")[1].scrollHeight);
         }


         })
    };

       ws.onopen = function() {
           document.getElementsByClassName("chat-send")[1].addEventListener("click", (event) => {
            if (document.getElementsByClassName("chat-content")[1].value.length >= 1) {
                ws.send(document.getElementsByClassName("chat-content")[1].value);
                createSendNode(document.getElementsByClassName("chat-content")[1].value);
                document.getElementsByClassName("chat-content")[1].value = "";
                document.getElementsByClassName("chat-msg")[1].scrollTo(0,document.getElementsByClassName("chat-msg")[1].scrollHeight);
            }
        })
       };
       ws.onmessage = function (evt) { 
          var received_msg = evt.data;
          createRecNode(received_msg);
          document.getElementsByClassName("chat-msg")[1].scrollTo(0,document.getElementsByClassName("chat-msg")[1].scrollHeight);


       };
       ws.onclose = function() { 
            document.getElementsByClassName("chat-input")[1].style.borderColor = "Red";
            createRecNode("Connection Lost!!")
            createRecNode("Thank you for contacting us");
            ws = undefined;
       };
    } else {
       createRecNode("Hi");
       createRecNode("Sorry for inconvenience");
       createRecNode("Your browser does not support web sockets")
       createRecNode("We will get back to you soon")

    }
}



// main script 

document.getElementsByClassName("chat-content")[0].addEventListener("input", (e) => {
    if(emailVerify(e.target.value)){
        document.getElementById("send-email").style.display = "block";
        document.getElementsByClassName("chat-send")[0].style.display = "block";
        document.getElementsByClassName("chat-input")[0].style.borderColor = "Green";
    }
    else{
        document.getElementsByClassName("chat-input")[0].style.borderColor = "Red";

    }
})

document.getElementById("send-email").addEventListener("click", (e) => {
    let email = {
        email : document.getElementsByClassName("chat-content")[0].value
    }

    // ajax/fetch call here with the email as object 

    // current chat window should close 

    // document.getElementsByClassName("chat-window")[0].setAttribute("class", "animated fadeOutRight")
    document.getElementsByClassName("chat-window")[0].style.display = "none";
    document.getElementById("send-email").style.display = "none";
    document.getElementsByClassName("chat-input")[0].style.borderColor = "gainsboro";
    document.getElementsByClassName("chat-window")[1].style.display = "block";
    document.getElementsByClassName("chat-send")[0].style.display = "none";
    createChatWindow();


})