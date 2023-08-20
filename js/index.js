const inputForm = document.querySelector("#inputnum");
const inputNum = document.querySelector("#inputnum input");


function onNumberSubmit(){
    const num = inputNum.value;
    console.log(num);
}

inputForm.addEventListener("submit", onNumberSubmit);