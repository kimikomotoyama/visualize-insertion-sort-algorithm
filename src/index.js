/* eslint-env browser */
/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const unsorted = new Sort([3, 1, 4, 5, 2]); //won't have unsorted.array
const originalUnsortedObj = new Sort([3, 1, 4, 5, 2]);

createElements(unsorted);

//create each div element with the array to be sorted
function createElements(unsorted) {
  unsorted.array.forEach((element) => {
    const elementsDiv = document.querySelector(".elements");
    let newElement = document.createElement("div");
    newElement.className += element + " element";
    newElement.textContent = element;
    elementsDiv.append(newElement);
  });
}

document.querySelector("button").addEventListener("click", () => {
  let sortedArray = unsorted.sort(); //sortedArray won't have array, will have resultArray
  let i = 0;

  let fadeEachElement = () => {
    if (i === originalUnsortedObj.array.length - 1) {
      clearInterval(id);
    }
    getNextElementFromUnsorted(originalUnsortedObj.array[i]);
    i++;
  };

  let id = setInterval(fadeEachElement, 2000);
});

function getNextElementFromUnsorted(originalUnsortedElement) {
  const parentNode = document.querySelector(".elements");
  const childToRemove = parentNode.getElementsByClassName(
    originalUnsortedElement
  );
  childToRemove[0].classList.add("fadeout");
}

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle(unsorted.returnValue("Insertion Sort"));
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
