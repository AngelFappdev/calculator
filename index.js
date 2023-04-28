
function init(){
   const add_button = document.getElementById("add_button")
   add_button.onclick = onadd_buttonclicked;

    const subtract_button = document.getElementById("subtract_button")
    subtract_button.onclick = onsubtract_buttonclicked;

    const multiply_button = document.getElementById("multiply_button")
    multiply_button.onclick = onmultiply_buttonclicked;

    const divide_button = document.getElementById("divide_button")
    divide_button.onclick = ondivide_buttonclicked;

   

   function onadd_buttonclicked(){
    const answerfield = document.getElementById("answerfield");
    const number1field = document.getElementById("number1field");
    const number2field = document.getElementById("number2field");
    let result = Number(number1field.value) + Number(number2field.value);
    answerfield.value = result;}

    function onsubtract_buttonclicked(){
        const answerfield = document.getElementById("answerfield");
        const number1field = document.getElementById("number1field");
        const number2field = document.getElementById("number2field");
        let result = Number(number1field.value) - Number(number2field.value);
        answerfield.value = result;}

        function onmultiply_buttonclicked(){
            const answerfield = document.getElementById("answerfield");
            const number1field = document.getElementById("number1field");
            const number2field = document.getElementById("number2field");
            let result = Number(number1field.value) * Number(number2field.value);
            answerfield.value = result;}

        function ondivide_buttonclicked(){
            const answerfield = document.getElementById("answerfield");
            const number1field = document.getElementById("number1field");
            const number2field = document.getElementById("number2field");
            let result = Number(number1field.value) / Number(number2field.value);
            answerfield.value = result;}
        
    

}

window.onload = init;