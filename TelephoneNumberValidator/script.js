    const input = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultDiv = document.getElementById("results-div")


    function handleCheckPhone(e)
    {
        if(e)
        {
            e.preventDefault();
        }

        const num = input.value.trim();
        if(num === ""){
            alert("Please provide a phone number");
            return;
        }
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/;
        if(regex.test(num))
        {
            resultDiv.innerText = `Valid US number: ${num}`;
            return;

        }
        else 
        {
              resultDiv.innerText = `Invalid US number: ${num}`;
              return;
        }


    }
    function clearResult()
    {
        if(resultDiv)
            {resultDiv.innerText = "";}
        if(input) {
            input.value = "";
            input.focus();

        }
            
        
    }

    checkBtn.addEventListener("click",handleCheckPhone);
    clearBtn.addEventListener("click",clearResult);