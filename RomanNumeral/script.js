
function convertToRoman(num)
{
    const romanMap = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  let output = "";
  for (let[value,symbol] of romanMap)
  {
    while (num >= value) 
    {
    output += symbol;
    num -= value;
    }

  }
  return output;

}
const input = document.getElementById("number-input");
const convertBTN = document.getElementById("convert-button");
const output = document.getElementById("output");

convertBTN.addEventListener("click",()=>{
    const inputVal = input.value.trim();
    if(!inputVal)
    {
        output.innerText = "Please enter a valid number";
        return;
    }
    const inputInt = parseInt(inputVal, 10);
    if (inputInt < 0 || inputInt > 3999)
    {
        output.innerText = "Please enter a number "
        output.innerText +=  inputInt < 1 ?"greater than or equal to 1" : "less than or equal to 3999"
        return;
    }
    output.innerText = convertToRoman(inputInt);

})