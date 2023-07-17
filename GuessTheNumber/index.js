// let randomNumber = Math.floor(Math.random() *100)+1;
let randomNumber = 0;
let chances = document.querySelector(".chances");
let enterNum = document.querySelector(".Enter");
let subBtn =  document.querySelector(".guessSubmit");
let preGuess = document.querySelector(".perviousClass");
let lastGuess = document.querySelector(".lastGuess");
let lowHigh =  document.querySelector(".lowHigh");
let result = document.querySelector(".result")
let arr = new Array();
let count = 0;
enterNum.focus();

function generate(){
    let randomVal = Math.floor(Math.random() *100)+1;
    console.log(randomVal);
    return randomVal;
}

const change = ()=>{
    subBtn.disabled = true;
    enterNum.disabled = true;
    let btn = document.createElement('button');
            result.appendChild(btn);
            btn.classList.add("reset")
            btn.innerText = "Start new game";
            let resetBtn = document.querySelector(".reset");
            // resetBtn.style.backgroundColor = "grey";
            // resetBtn.style.color = "white"
            resetBtn.style.border = "none"
            resetBtn.style.height = "30px"
            resetBtn.style.width = "100px"

        resetBtn.addEventListener('click',()=>{
            arr = [];
            enterNum.value = "";
            lowHigh.innerText = "";
            lastGuess.innerText = "";
            preGuess.innerText = "";
            chances.innerText = "";
            btn.remove();
            chances.removeAttribute("style");
            lowHigh.removeAttribute("style");
            count = 0;
            enterNum.disabled = false;
            subBtn.disabled = false;
            enterNum.focus();
        })
}


let compare = () =>{
    count++;
    let totChance = 10 - count;
    
    if( arr.length == 0){
        randomNumber = generate();
    }
    
    let inputField = enterNum.value;
    enterNum.value = '';
    // console.log(randomNumber)
    // console.log(inputField)
    // perGuess.innerText = " ";
    arr.push(inputField);

    if(count < 10){
        chances.innerText = `${totChance} Chances remain`
    }

    if(count >= 10){
        chances.innerText = `Your 10 chances are over! number was ${randomNumber}. Start a new game`
        chances.style.backgroundColor = "grey"
        chances.style.color = "white";
        chances.style.padding = "5px"

        change();
    }
    
        else if(inputField == randomNumber){
            preGuess.innerText = "Previous guesses: "
            lastGuess.innerText = arr;
            lowHigh.innerText = "Congratulations! You got it right!"
            lowHigh.style.backgroundColor = "rgb(141, 230, 8)";
            lowHigh.style.color = "white";
            lowHigh.style.fontSize = "large";
            lowHigh.style.borderRadius ="4px";
    
            change();
            // resetBtn.style.backgroundColor = "rgb(141, 230, 8)";

            // resetBtn.style.color = "white"
            
        }
        else if(inputField >= randomNumber){
            preGuess.innerText = "Previous guesses: "
            lastGuess.innerText = arr;
            lowHigh.innerText = "Lower than guessed value"
            
        }
        else if(inputField <= randomNumber){
            preGuess.innerText = "Previous guesses: "
            lastGuess.innerText = arr;
            lowHigh.innerText = "Higher than guessed value";
        }
}



enterNum.addEventListener("keyup" , e =>{
    e.preventDefault();
    if(e.keyCode === 13){
        compare();
    }
}) 

subBtn.addEventListener("click", () =>{
    compare(); 
} );



