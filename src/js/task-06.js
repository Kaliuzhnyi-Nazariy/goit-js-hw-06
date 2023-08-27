const inputValue = document.querySelector("#validation-input");

const handler = (e) => {
  const valLength = e.currentTarget.value.length;
  
  if(valLength >= Number(inputValue.dataset.length)){
    inputValue.classList.add('valid')
    inputValue.classList.remove('invalid')
  }
  else {
    inputValue.classList.add('invalid')
    inputValue.classList.remove('valid')
  }
};

inputValue.addEventListener('blur', handler)