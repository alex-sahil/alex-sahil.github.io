const typing = document.getElementById("typing");

const texts = [
"ALEX SAHIL YOUR FATHER",
"KING OF MY OWN WORLD",
"DON'T PLAY WITH ME",
"RULES ARE MADE BY ME",
"NO COPY ONLY ORIGINAL",
"CYBER MODE ACTIVATED"
];

let textIndex = 0;
let charIndex = 0;


function typingEffect(){

if(charIndex < texts[textIndex].length){

typing.innerHTML += texts[textIndex].charAt(charIndex);

charIndex++;

setTimeout(typingEffect,100);

}

else{

setTimeout(()=>{

typing.innerHTML="";

charIndex=0;

textIndex++;

if(textIndex >= texts.length){
textIndex=0;
}

typingEffect();

},1500);

}

}


typingEffect();
