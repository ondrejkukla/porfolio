// hierarchy selector (li a) anchor tag in list item
// querySelector vs querySelectorAll
// use rather querySelector then getElementBy...

let counter = 0;
function addCounter() {
    counter += 1;
    document.getElementsByTagName("a")[6].innerHTML = `Death counter: ${counter}`;
}

document.getElementsByTagName("a")[6].addEventListener("click", addCounter);
