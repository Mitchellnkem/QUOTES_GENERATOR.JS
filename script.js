const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote (){
	// pick a random code

	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; 
    //Set the text of the quote and author
	
	if (!quote.author)	{
		authorText.textContent = 'Unknown';
		quoteText.textContent = 'No quote to display';
	} else {
		let authorName = quote.author.replace(", type.fit","")
		authorText.textContent = authorname;
	}

	quoteText.textContent = quote.text;
}

// get quotes

async function getQuotes(){
	const apiUrl = "https://type.fit/api/quotes";
	try{
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		console.log(apiQuotes);
		
	}
	catch(error){
		//catch error here
	}
}



newQuoteBtn.addEventListener('click', newQuote);
getQuotes();