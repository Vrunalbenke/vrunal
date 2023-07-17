const customName = document.querySelector(".name")
const US = document.querySelector("#US")
const UK = document.querySelector("#UK")
const btn = document.querySelector(".btn")
const para = document.querySelector(".randomText")

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const randomCharacter = ['Willy the Goblin','Big Daddy','Father Christmas'];
const randomPlace = ['the soup kitchen','Disneyland','the White House'];
const randomEvent = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

const Temperature = ()=>{

    if(US.checked){
        return "94 fahrenheit";
    }
    else{
        return "34 centigrade";
    }
}

const weighs = ()=>{

    if(US.checked){
        return "136 kgs";
    }
    else{
        return "300 pounds"
    }
}

const randomValFromArray = (arr) =>{
    let a = arr[Math.floor(Math.random()*arr.length)]
    return a
}


const storyGenerator = ()=>{
    // para.style.backgroundColor = "#ffc125"
    // para.style.color = "#5e2612"
    para.style.visibility = "visible"
    if(customName.value !== '' ){
        para.innerText =`It was ${Temperature()} outside, so ${randomValFromArray(randomCharacter)} went for a walk. When they got to ${randomValFromArray(randomPlace)}, they stared in horror for a few moments, then ${randomValFromArray(randomEvent)}. ${customName.value} saw the whole thing, but was not surprised —  ${randomValFromArray(randomCharacter)} weighs ${weighs()}, and it was a hot day.`
    }
    else{
        para.innerText =`It was ${Temperature()} outside, so ${randomValFromArray(randomCharacter)} went for a walk. When they got to ${randomValFromArray(randomPlace)}, they stared in horror for a few moments, then ${randomValFromArray(randomEvent)}. Bob saw the whole thing, but was not surprised —  ${randomValFromArray(randomCharacter)} weighs ${weighs()}, and it was a hot day.`
    }
    
}



btn.addEventListener('click',(e)=>{
    storyGenerator();
})