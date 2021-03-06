// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//parent element for card
const parentCard = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    //console log to study the information returned by the api
    console.log('API CARD Response', response);
    console.log('Articles', response.data.articles);

    let articles = Object.values(response.data.articles);

    articles.forEach(element => {
        console.log('Array of Articles', element)

        element.forEach(item => {
            console.log('Single Article', item);
            parentCard.appendChild(cardComp(item));
        });
    });
})

// when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API
.catch(err => {
    console.log('something happened! ', err)
  });

//card component

const cardComp = (object) => {

    //create elements
    const newCard = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //add content
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    authorName.textContent = object.authorName;

    //add classes
    newCard.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');

    //apend children element to parent component
    newCard.appendChild(headline);
    newCard.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorContainer.appendChild(authorName);

    return newCard;
}