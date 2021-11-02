var txtarea= document.querySelector("#text1");
var btntranslate= document.querySelector(".btn-primary");
var otput= document.querySelector("#output");

// otput.innerText="afasfdasf";
// inputTxt=txtarea.value;
btntranslate.addEventListener("click", translate);

function translate(inputTxt){
    var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="
    +inputTxt;

    fetch(url).then(response => response.json())
    .then(json =>{console.log(otput.innerText= json.contents.text)}).catch(errorHandler);
    
}

function errorHandler(error){
    console.log(error);
}

// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

// https://api.funtranslations.com/translate/minion.json
