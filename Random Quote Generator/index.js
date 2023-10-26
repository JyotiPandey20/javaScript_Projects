const btnElement = document.getElementById("btn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnElement.innerText = "Loading...";
    btnElement.disabled = true;
    quoteElement.innerText = "Updating Quote...";
    authorElement.innerText = "Updating author...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteElement.innerText = quoteContent;
    authorElement.innerText = "~ " + quoteAuthor;
    btnElement.innerText = "Get a quote";
    btnElement.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteElement.innerText = "Something went wrong, try again later";
    authorElement.innerText = "An error occured, try again later";
    btnElement.innerText = "Get a quote";
    btnElement.disabled = false;
  }
}

getQuote()

btnElement.addEventListener("click", getQuote);