var txtarea = document.querySelector("#text1");
var btntranslate = document.querySelector(".btn-primary");
var otput = document.querySelector("#output");


btntranslate.addEventListener("click", translate);

function translate() {
    var url = `https://api.funtranslations.com/translate/minion.json?text=${txtarea.value}`;

    fetch(url).then(response => response.json()).then(json => {
        otput.innerText = json.contents.translated
    }).catch(errorHandler);

}

function errorHandler(error) {
    console.log("error is " + error);
}