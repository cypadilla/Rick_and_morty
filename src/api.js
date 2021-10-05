const url = "https://rickandmortyapi.com/api";


// Funcion para obtener todos los personajes
async function getCharacters(){
    return await fetch(`${url}/character`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((rej) => console.log(rej));  
}
// Funcion para obtener todos los personajes por pagina
async function getCharactersPage(page){
    return await fetch(`${url}/character/?page=${page}`)
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((rej) => console.log(rej));  
}
// Funcion para obtener un solo personaje
function getCharacter(id){
    return fetch(`${url}/character/${id}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((rej) => console.log(rej));
}
// Funcion para obtener un episodio
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