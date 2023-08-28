const inputValue = document.querySelector("#validation-input");

const handler = () => {
  const valLength = inputValue.dataset.length;
  
  const symbolLength = inputValue.value.length;

  if(symbolLength === Number(valLength)){
    inputValue.classList.add('valid')
    inputValue.classList.remove('invalid')
  }
  else {
    inputValue.classList.add('invalid')
    inputValue.classList.remove('valid')
  }
};

inputValue.addEventListener('blur', handler)