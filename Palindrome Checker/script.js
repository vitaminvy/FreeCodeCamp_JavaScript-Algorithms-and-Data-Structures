const input = document.getElementById("text-input");
const btnEL = document.getElementById("check-btn");
const result = document.getElementById("result");

function handleCheck()
{
    const raw = input.value;
    const cleaned = raw.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    console.log(cleaned);
    if(raw ==="")
    {
        alert("Please input a value");
        return; 
    }
    else if(raw.length <= 1)
    {
        result.innerText = (`${raw} is a palindrome`);
        return;
    }
    let index = 0; 
    let length = cleaned.length - 1;
    while (index < length)
    {
        if(cleaned[index]!=cleaned[length])
        {
            result.innerText= `${raw} is not a palindrome`;
            return;
            
        }
        index++;
        length--;


    }
            result.innerText = (`${raw} is a palindrome`);



}
btnEL.addEventListener("click",handleCheck);
