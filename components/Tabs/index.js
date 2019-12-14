// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

 axios.get('https://lambda-times-backend.herokuapp.com/topics').then(res => {
     const data = res.data;
     const mainTopics = theTopics(data);
     topics.appendChild(mainTopics)
     console.log(res);
 })
    .catch(err => {
        console.log("You hit an error", err);
    })

 const topics = document.querySelector('.topics');

 function theTopics(obj) {
     const tab = document.createElement('div');

     tab.classList.add('tab');

     tab.textContent = obj.topics;

     return tab
 }