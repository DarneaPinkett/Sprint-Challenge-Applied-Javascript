// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => {
    console.log(res);
    let obj = res.data.articles;
    let newArray = Object.keys(obj).map(function(key){
        return [obj[key]];
    });
    let bigArray = [];
    for (let i=0; i<newArray.length; i++)
    {
        for (let j=0; j<newArray[i].length; j++)
        {
            for (let k=0; k<newArray[i][j].length; k++)
            {
                bigArray.push(newArray[i][j][k]);
            }
        }
    }
    bigArray.forEach(item => {
        let card = new cardCreator(item);
        cardsContainer.appendChild(card);
    })
    return obj;
})
    .then(res => {
        console.log('Secong .then', res);
        res.forEach(item => {
            let card = new cardCreator(item);
            cardCreator.appendChild(card);
        })
    })
    .catch(err => {
        console.log("Error", err);
    })

const cardsContainer = document.querySelector('.cards-container');

function cardCreator(obj) {
    const card = document.createElement('div');
    const head1 = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');

    card.appendChild(head1);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(span);

    card.classList.add('card');
    head1.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    head1.textContent = obj.headline;
    image.src = obj.authorPhoto;
    span.textContent = `By ${obj.authorName}`;

    return card

}
console.log(cardCreator())