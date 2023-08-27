const form = document.querySelector(".login-form");

form.addEventListener("submit", clickBtn);

function clickBtn(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(event.currentTarget);
  const dataObject = {};

  formData.forEach((value, name) => {
    dataObject[name] = value;
  })

  if (valForm(dataObject)) {
    console.log(dataObject);
    form.reset;
  }else {
    alert(`Всі поля мають бути заповненими!`)
  }
}

function valForm(data) {
    for (const key in data) {
        if (data[key] === '') {
            return false;
        }
    }
    return true;
}

