
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

const types = {
	normal: './images/icons/normal.svg',
	fire:   './images/icons/fire.svg',
	water: './images/icons/water.svg',
	electric: './images/icons/electric.svg',
	grass:  './images/icons/grass.svg',
	ice: './images/icons/ice.svg',
	fighting: './images/icons/fighting.svg',
	poison: './images/icons/poison.svg',
	ground: './images/icons/ground.svg',
	flying: './images/icons/flying.svg',
	psychic: './images/icons/psychic.svg',
	bug:  './images/icons/bug.svg',
	rock: './images/icons/rock.svg',
	ghost:'./images/icons/ghost.svg',
	dragon:'./images/icons/dragon.svg',
	dark:'./images/icons/dark.svg',
	steel:'./images/icons/steel.svg',
	fairy:'./images/icons/fairy.svg',
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
 
    
    let pokeTypeBadge=[]
    let pokeType=data.types.length

    if(pokeType===2){
       
        pokeTypeBadge.push('<img src="'+types[data.types[0].type.name]+'" style="background:"></img>'+'<img src="'+types[data.types[1].type.name]+'"></img>')
       
        cardElement.style.background =
        "linear-gradient(to bottom," +
        colours[data.types[0].type.name] +
        " 40%," +
        colours[data.types[1].type.name] +
        " 100%)";

    }else{
        pokeTypeBadge.push('<img src="'+types[data.types[0].type.name]+'"></img>')
        cardElement.style.background = colours[data.types[0].type.name];
    }
   
    const cardMarkup = `
    <h3 class="card_title">${data.name}</h3>
    <div class="poke_typeBadge">
       ${pokeTypeBadge}
    </div>  
    <div class="poke_image">
        <img src=${data.sprites.other.dream_world.front_default}></img>
    </div>`

    cardElement.innerHTML = cardMarkup;  
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