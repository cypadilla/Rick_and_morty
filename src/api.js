const url = "https://rickandmortyapi.com/api";

async function getCharacters(){
    return await fetch(`${url}/character`)
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((rej) => console.log(rej));
    
}

function getCharacter(id){
    return fetch(`${url}/character/${id}`)
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((rej) => console.log(rej));
}

export default {
    getCharacters,
    getCharacter,
  };