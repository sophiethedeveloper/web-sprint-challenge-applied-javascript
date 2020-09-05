// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//parent element
const topicParent = document.querySelector('.topics');

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(response => {
    //console.log to study the information returned by the API
    console.log('API TAB RESPONSE', response);
    //getting info from the API
    response.data.topics.forEach(element => {
        const newTab = topicComp(element);
        topicParent.appendChild(newTab);
    });
})

// when a GET request is rejected, a .catch on the chain allows us to capture errors returned from the API
.catch(err => {
    console.log('something happened! ', err)
  })

//tab component
const topicComp = (topics) => {
    
    //create element
    const tab = document.createElement('div');

    //add content to element
    tab.textContent = topics

    //add class to elements
    tab.classList.add('tab');

    return tab;
}