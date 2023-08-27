const fsc = document.querySelector('#font-size-control');

const text = document.querySelector('#text')

const handler = e => {
    e = fsc.value;
    text.style.fontSize = e + "px";
}

document.addEventListener("input",handler)

