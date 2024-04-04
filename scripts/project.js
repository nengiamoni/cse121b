document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quote');
    const authorDisplay = document.getElementById('author');
    const getQuoteBtn = document.getElementById('getQuoteBtn');

    getQuoteBtn.addEventListener('click', getQuote);

    function getQuote() {
        fetch('https://healthruwords.p.rapidapi.com/v1/quotes', {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'healthruwords.p.rapidapi.com',
                'x-rapidapi-key': '221be7ed9dmsh496def788ac5c4ep1d893djsn5ee1948874d1' // Replace 'YOUR-RAPIDAPI-KEY' with your actual RapidAPI key
            }
        })
            .then(response => response.json())
            .then(data => {
                // Extract quote and author from the response
                const { quote, author } = data;
                // Update DOM with the retrieved quote
                quoteDisplay.textContent = `"${quote}"`;
                authorDisplay.textContent = `- ${author}`;
            })
            .catch(error => console.error('Error fetching quote:', error));
    }
});
