const fsc = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

const handler = () => {
  text.style.fontSize = fsc.value + "px";
};

document.addEventListener("input", handler);
