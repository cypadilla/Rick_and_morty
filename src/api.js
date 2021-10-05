const url = "https://rickandmortyapi.com/api";

async function getCharacters(){
    return await fetch(`${url}/character`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((rej) => console.log(rej));  
}
async function getCharactersPage(page){
    return await fetch(`${url}/character/?page=${page}`)
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((rej) => console.log(rej));  
}

function getCharacter(id){
    return fetch(`${url}/character/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((rej) => console.log(rej));
}

function getEpisode(id){
    return fetch(`${url}/episode/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((rej) => console.log(rej));
}
export default {
    getCharacters,
    getCharacter,
    getEpisode,
    getCharactersPage
  };