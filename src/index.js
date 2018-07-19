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
showElementsFading();
showSorting(toBeSortedObj);

//create each div element with the array to be sorted
function createElements(sortClassArray, parentClassName) {
  sortClassArray.forEach((element) => {
    const elementsDiv = document.querySelector(parentClassName);
    let newElement = document.createElement("div");
    newElement.className += element + " element";
    newElement.textContent = element;
    elementsDiv.append(newElement);
  });
}

function showSorting(stepsArray) {
  let i = 0;

  let eachStep = (i) => {
    stepsArray.forEach((eachStepArray) => {
      createElements(eachStepArray, ".sortedElements");
    });
    i++;
    if (i === stepsArray.length - 0) clearTimeout(id);
  };
  let id = setInterval(eachStep, 1000);
}

function getNextElementFromUnsorted(elementToFade) {}

function showElementsFading() {
  let i = unsortedForeverObj.array.length - 1;

  let fadeEachElement = () => {
    if (i === 0) {
      clearInterval(id);
    }
    getNextElementFromUnsorted(unsortedForeverObj.array[i]);
    i--;
  };

  let id = setInterval(fadeEachElement, 1000);
}

document.querySelector("button").addEventListener("click", () => {
  showElementsFading();
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

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
