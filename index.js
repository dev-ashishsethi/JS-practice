var txtarea= document.querySelector("#text");
var btntranslate= document.querySelector(".btn-primary");
var otput= document.querySelector("#output");

// otput.innerText="afasfdasf";
// inputTxt=txtarea.value;
btntranslate.addEventListener("click", translate);

function translate(inputTxt){
    var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="
    +inputTxt;

    fetch(url).then(response => response.json())
    .then(json =>{otput.innerText=json.contents.translated;});
    
}