let firstnumber="";
let operator="";
let secondnumber="";
function updateDisplay(value){
    document.getElementById("display").innerText=value;
}
function press(num){
    if(operator===""){
        firstnumber +=num;
        updateDisplay(firstnumber);
    }else{
        secondnumber +=num;
        updateDisplay(secondnumber);
    }
}
function operation(op){
    if(firstnumber!==""){
        operator = op;
    }
}
function calculate(){
    if( firstnumber !=="" && operator!=="" && secondnumber !==""){
        let a=Number(firstnumber);
        let b=Number(secondnumber);
        let result=0;

        if (operator==="+")result=a+b;
       else if (operator==="-")result=a-b;
       else if (operator==="*")result=a*b;
        else if (operator==="/")result=a/b;
updateDisplay(result);

firstnumber=String(result);
operator="";
secondnumber="";

    }
}
function clearall(){
    firstnumber="";
    operator="";
    secondnumber="";
    updateDisplay("0");

}