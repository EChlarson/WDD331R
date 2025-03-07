document.addEventListener('DOMContentLoaded', fetchQuote);

async function fetchQuote() {
  const quoteBox = document.getElementById('quoteBox');
  quoteBox.innerHTML = 'Loading...';

  try {
    const response = await fetch('disneyQuote.json'); 
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }

    const data = await response.json();
    const quotes = data["Funny Disney Quotes"];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteBox.innerHTML = `
      <div class="quote-box__quote">
        <p>${randomQuote.quote}</p>
        <p class="quote-box__quote-author">${randomQuote.source}</p>
      </div>
      <div class="quote-box__author-image">
        <img src="${randomQuote.picture}" alt="${randomQuote.alt}" />
      </div>
    `;
  } catch (error) {
    quoteBox.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}