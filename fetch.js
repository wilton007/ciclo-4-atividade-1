const apiUrl = "https://rickandmortyapi.com/api/character/";

async function fetchCharacters() {
  const response = await fetch(apiUrl);
  //error
  const data = await response.json();
  console.log(data);
}

fetchCharacters();
