/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



function getData() {
axios({
    method: 'get',
    url: 'https://api.github.com/users/devbrunopaula'
  })
  .then( res =>  Card(res.data))
  .catch( err => console.log(err))

}

getData()
 



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
{/* <img src="${avatar_url}" alt="${name}">
<div>
 <h1>${name}</h1>
 <h3>${login}</h3>
 <p>location: ${location}</p>
 <p>Profile: <a href="${html_url}">GitHub Link</a></p>
 <p>Followers: ${followers}</p>
 <p>Bio:${bio}</p>
</div> */}
// const CardComp =  document.querySelector('.cards').innerHTML = Card()
const body = document.querySelector('body')
const CardComp =  document.querySelector('.cards')

function Card(data) {
console.log(data)
  const { avatar_url, name,login, location, followers, html_url, bio } = data 
  const CardComp =  document.querySelector('.cards__container')

  CardComp.innerHTML += `
            <div class="card">
            <img src="${avatar_url}" alt="${name}">
              <div>
                <h1> ${name}</h1>
                <h3> ${login}</h3>
                <p>Location: ${location}</p>
                <p>Profile: <a href="${html_url}">GitHub Link</a></p>
                <p>Followers: ${followers}</p>
                <p>Bio: ${bio}</p>
              </div>
            </div> 
            `

 return CardComp

}



body.appendChild = Card()


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

const followersArray = [];

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


// const cardImage = document.createElement('img')
// const h1 = document.createElement('h1')
// const h3 = document.createElement('h3')
// const locattionP = document.createElement('p')
// const profileP = document.createElement('p')
// const profileLink = document.createElement('a')
// const followersP = document.createElement('p')

// // Attri
//  cardImage.src = avatar_url
//  profileLink.href = html_url

// //  Text Content
// h1.textContent = name
// h3.textContent = login
// locattionP.textContent = `location: ${location}` 
// profileP.textContent = 'Profile'
// followersP.textContent = followers

// // append
//  CardComp.appendChild(cardImage)
//  CardComp.appendChild(h1)
//  CardComp.appendChild(locattionP)
//  CardComp.appendChild(profileP)
//  profileP.appendChild(profileLink)
//  CardComp.appendChild(followersP)
 

//  return CardComp