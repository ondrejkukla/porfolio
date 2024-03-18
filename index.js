// hierarchy selector (li a) anchor tag in list item
// querySelector vs querySelectorAll
// use rather querySelector then getElementBy...

let counter = 0;
function addCounter() {
  counter += 1;
  document.getElementsByTagName("a")[9].innerHTML = `Death counter: ${counter}`;
}

document.getElementsByTagName("a")[9].addEventListener("click", addCounter);

function sendEmail() {
  window.location = "mailto:vondrej.kukla@gmail.com";
}

document.getElementsByTagName("button")[0].addEventListener("click", sendEmail);
