// filed
var URL = "http://localhost:3000/";

//view
var obt, div;


window.onload = function () {
    initView();
    initListener();

};


function initView() {
    obt = document.getElementById("obt");
    div = document.getElementById("home");
}

function initListener() {
    obt.onclick = function () {
        getData();
    }
}

function getData() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            handData(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", URL, true);
    xmlHttp.send();
};

function handData(data) {
    div.innerHTML = data;

};


function getHttp() {
    var http;

    if (window.XMLHttpRequest) {
        http = new XMLHttpRequest();
    } else {
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }

}