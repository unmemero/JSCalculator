const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText=""
        }
        else if(item.id=="backspace"){
            let onScreenValue = display.innerText.toString();
            if(onScreenValue.length<2){
                display.innerText = "";
            }
            else{
                display.innerText = onScreenValue.substr(0,onScreenValue.length-1);
            }
        }
        else if(display.innerText != "" && item.id == "="){
            display.innerText = eval(display.innerText); // .eval(string) converts string to arythmatic operation "2+2" becomes 2+2
        }
        else if(display.innerText=="" && item.id=="="){
            display.innerText = "Null";
            setTimeout(()=>(display.innerText=""),2000);// It delays the function by a certain amount of miliseconds
        }
        else{
            display.innerText+=item.id;
        }
    }
});

const themeTogglerButton = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const togglerIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeTogglerButton.onclick=()=>{
    calculator.classList.toggle("dark");
    themeTogglerButton.classList.toggle("active");
    isDark=!isDark;
}