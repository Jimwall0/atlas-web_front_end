function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}
function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  const para = document.createElement("p");
  const node = document.createTextNode("Welcome Atlas!");
  para.appendChild(node);
  document.body.appendChild(para);
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const button3 = document.createElement("button");
  button1.innerHTML = "spooky";
  button2.innerHTML = "Dark mode";
  button3.innerHTML = "Scream mode";
  button1.addEventListener('click', spooky);
  button2.addEventListener('click', darkMode);
  button3.addEventListener('click', screamMode);
  document.body.appendChild(button1);
  document.body.appendChild(button2);
  document.body.appendChild(button3);
}
main();
