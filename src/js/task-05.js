const inputValue = document.querySelector("#name-input");

const result = document.querySelector("#name-output");


  inputValue.addEventListener("input", (e) => {
    const valueInput = e.currentTarget.value;

    result.textContent = valueInput === '' ? 'Anonymous' : valueInput;
  });
 
  
