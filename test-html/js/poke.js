
const root = document.querySelector('#app');

// Endpoint for pokemon 
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

/**
pokemon cataloug
card:
image  
name
*/

const fetchData=async(url) =>{
  const response = await fetch(url);
  const data = await response.json();  
  return data;
}

const createElement = (elementTagName, cssClasses) => {
    const element = document.createElement(elementTagName);
    
    if(cssClasses) {
      element.classList.add(...cssClasses);
    }
    return element;
  } 

const createCard = (data) => {

  const cardElement = createElement('div', ['card']);
  const cardMarkup = `
    <h3 class="card__title">${data.name}</h3>  
    <div class="poke_image">
        <img src=${data.sprites.other.dream_world.front_default}></img>
    </div>`

    cardElement.innerHTML = cardMarkup;  
  
    //set bagkground color by type
    const filteredByKey = Object.fromEntries( Object.entries(colours).filter(([key, value]) => key === `${data.types[0].type.name}`) )
    let bgColor=filteredByKey[`${data.types[0].type.name}`]
    cardElement.style.setProperty("background",bgColor);//.style.setProperty("background-color",`${data.types[0].type.name}`)
    
    return cardElement;
}


async function getPokemon(n) {
  let name;
  let image;
  // Loop through the pokemon API calls and gather data / generate cards 
  for (let i=1; i<=n; i++) {
  
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/' + i);
  
        root.appendChild(createCard(data));
  }}
//how many to fetch all 
getPokemon(20);


/**
Pokemon detail
Base: 
base stats: ( stats.base_stat, stats.stat.name)
  speed
  special-defense
  special-attack"
  defense
  attack
  hp
 
image:(sprites.other.dream_world.front_default) 
type:(types.type[].name)
name:(name)

Profile:
height: (height)
weight: (weight)
abilities:(abilities.ability.name)
base experince:(base_experience")

Moves:(moves.move.name)
list of moves
*/