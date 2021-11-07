var txtarea= document.querySelector("#text1");
var btntranslate= document.querySelector(".btn-primary");
var otput= document.querySelector("#output");

// otput.innerText="afasfdasf";

btntranslate.addEventListener("click", translate);

function translate(){
    var url=`https://api.funtranslations.com/translate/minion.json?text=${txtarea.value}`;
    // console.log(inputTxt);
    fetch(url).then(response => response.json()).then(json =>{
        otput.innerText= json.contents.translated
    }).catch(errorHandler);
    
}

function errorHandler(error){
    console.log("error is "+error);
}

// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

// https://api.funtranslations.com/translate/minion.json


