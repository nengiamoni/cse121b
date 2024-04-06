const quoteDisplay = document.getElementById("quote");
const authorDisplay = document.getElementById("author");
const getQuoteBtn = document.getElementById("getQuoteBtn");

const url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bb4467594emshfbec6589d11288ep10463ejsnba6e65514b71",
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
};

getQuoteBtn.addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const { author, text } = result[0];

    quoteDisplay.textContent = "${text}";
    authorDisplay.textContent = - ${author};
  } catch (error) {
    console.error(error);
  }
}