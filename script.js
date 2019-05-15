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