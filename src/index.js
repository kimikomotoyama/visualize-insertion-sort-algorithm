/* eslint-env browser */
/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const unsortedForeverObj = new Sort([3, 1, 4, 5, 2]);
const toBeSortedObj = new Sort([3, 1, 4, 5, 2]); //won't have unsorted.array after sort()
toBeSortedObj.sort();

createElements(unsortedForeverObj.array, ".elements");

//create each div element with the array to be sorted
function createElements(sortClassArray, parentClassName) {
  sortClassArray.forEach((element) => {
    createOneElement(element, parentClassName);
  });
}

function createOneElement(element, parentClassName) {
  const elementsDiv = document.querySelector(parentClassName);
  let newElement = document.createElement("div");
  newElement.className += element + " element";
  newElement.textContent = element;
  elementsDiv.append(newElement);
}

function showSorting(stepsArray) {
  const parentNode = document.querySelector(".sortedElements");
  let i = 0;

  let show = () => {
    if (i === stepsArray.length) {
      clearInterval(id);
      i = 0;
    } else {
      parentNode.innerHTML = "";
      createElements(stepsArray[i], ".sortedElements");
      i++;
    }
  };

  let id = setInterval(show, 3000);
}

function fadeAndRemoveChild(originalUnsortedElement) {
  const parentNode = document.querySelector(".elements");
  const childToRemove = parentNode.getElementsByClassName(
    originalUnsortedElement
  );
  childToRemove[0].classList.add("fadeout");
  parentNode.removeChild(childToRemove[0]);
}

function getNextElementFromUnsorted(originalUnsortedElement) {
  const parentNode = document.querySelector(".elements");
  const childToRemove = parentNode.getElementsByClassName(
    originalUnsortedElement
  );
  childToRemove[0].classList.add("highlightElement");
}

function showElementsFading() {
  let i = unsortedForeverObj.array.length - 1;

  let selectEachElement = () => {
    getNextElementFromUnsorted(unsortedForeverObj.array[i]);
  };

  let fadeEachElement = () => {
    if (i === 0) {
      clearInterval(id);
      clearInterval(idForSelectElement);
    }
    fadeAndRemoveChild(unsortedForeverObj.array[i]);
    i--;
  };

  let idForSelectElement = setInterval(selectEachElement, 1000);
  let id = setInterval(fadeEachElement, 3000);
}

document.querySelector("button").addEventListener("click", () => {
  showElementsFading();
  showSorting(toBeSortedObj.steps);
});

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(toBeSortedObj.returnValue("Insertion Sort"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}
