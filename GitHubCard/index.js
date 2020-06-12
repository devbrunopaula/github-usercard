/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/




 axios.get('https://api.github.com/users/devbrunopaula')
.then(res =>  cards.appendChild(CardComponent(res.data)))
  .catch( err => console.log(err))


 



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/



const cards =  document.querySelector('.cards')

function CardComponent(data) {
const { avatar_url, name, login, location, html_url, followers, following, bio} = data
 
  // Create
const card  = document.createElement('div')
const cardImage = document.createElement('img')

const cardInfo = document.createElement('div')
const cardName = document.createElement('h1')
const cardUsername = document.createElement('h3')
const cardLocation = document.createElement('p')
const cardProfile = document.createElement('p')
const gitUrl = document.createElement('a')
const cardFollowers = document.createElement('p')
const cardFollowing = document.createElement('p')
const cardBio = document.createElement('p')

// Add Class

card.classList = 'card'
cardInfo.classList = 'card__info'
cardName.classList = 'name'
cardUsername.classList = 'username'

// TextContent 

cardImage.src = avatar_url
cardName.textContent = name
cardUsername.textContent = login
cardLocation.textContent = `Location: ${location}`
gitUrl.innerHTML += `<a href="${html_url}">GitHub Link</a>`
cardProfile.textContent = `Profile: `
cardFollowers.textContent = `Followers: ${followers}`
cardFollowing.textContent = `Following: ${following}`
cardBio.textContent = bio


// Append
card.appendChild(cardImage)
card.appendChild(cardInfo)
cardInfo.appendChild(cardName)
cardInfo.appendChild(cardUsername)
cardInfo.appendChild(cardLocation)
cardInfo.appendChild(cardProfile)
cardProfile.appendChild(gitUrl)
cardInfo.appendChild(cardFollowers)
cardInfo.appendChild(cardFollowing)
cardInfo.appendChild(cardBio)

return card

}







/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



let followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( user => {
  axios.get(`https://api.github.com/users/${user}`)
.then( res => cards.appendChild(CardComponent(res.data)) )
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


