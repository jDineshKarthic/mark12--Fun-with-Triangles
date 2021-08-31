const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(input1, input2, input3){
    sumOfAngles=input1+input2+input3;
    return sumOfAngles;
}

function isTriangle(){

    let sum=0;

    for(let i=0;i<inputs.length;i++){
        const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value),Number(inputs[2].value));
         
        // const sumOfAngles = Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value)+Number(inputs[2].value);
        // const sumOfAngles=Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value);
        console.log(sumOfAngles);
        
        if(sumOfAngles===180){
            outputEl.innerText="Yes , The angles form a triangle";
        }
        else{
            outputEl.innerText="Oosps , The angles you have entered does not form a triangle";
        }
       
    }

}

isTriangleBtn.addEventListener("click",isTriangle);