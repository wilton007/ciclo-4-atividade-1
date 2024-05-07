

document.addEventListener('DOMContentLoaded', function () {

  const proximo = document.getElementById('proxima-pagina')
  const anterior = document.getElementById('anterior-pagina')
  const numeroPagina = document.getElementById('numero-pagina')
  const cardsModal = document.getElementById('card-modal')
  const modal = document.getElementById('modal')
  const btFechar = document.getElementById('bt-fecar')
  
  
  
  let paginaAtual = 1;
  numeroPagina.innerText = paginaAtual;

  


  async function fetchCharacters(page) {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const arrayPersonagens = data.results;

    numeroPagina.innerText = '';

    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Remove todos os elementos filhos


    arrayPersonagens.forEach((item, index) => {

      const card = document.createElement('div');
      card.classList.add('card');

      card.id = index + 1;

      const characterName = document.createElement('h2');
      characterName.textContent = item.name;

      const characterImage = document.createElement('img');
      characterImage.src = item.image;


      card.appendChild(characterName);
      card.appendChild(characterImage);
      cardsContainer.appendChild(card);


      card.onclick = () => {
    
        const personagemSelecionado = arrayPersonagens[card.id - 1];
        console.log(personagemSelecionado);
        

        let vida = teste1(personagemSelecionado.status,"Alive")?'Vivo':'Morto';
        let sexo = teste1(personagemSelecionado.gender,'Male')?'Masculino':'Feminino';
        let especie = teste1(personagemSelecionado.species,'Human')?'Humano':personagemSelecionado.species;
        

        cardsModal.innerHTML = `<img src="${personagemSelecionado.image}"/> <br>nome: ${personagemSelecionado.name}<br>status: ${vida}<br>
        species: ${especie}<br>gender: ${sexo}<br>`;     
        modal.showModal();
     } 

     btFechar.onclick = () => {
      modal.close();
     }

    });
    numeroPagina.innerText = page;
  }
 
  
  fetchCharacters(paginaAtual);


  proximo.onclick = () => {

    paginaAtual++;
    numeroPagina.innerText = paginaAtual;
    fetchCharacters(paginaAtual);
  };

  anterior.onclick = () => {
    if (paginaAtual > 1) {
      paginaAtual--;
      numeroPagina.innerText = paginaAtual;
      fetchCharacters(paginaAtual);
    }
  };


  


});


function teste1(a,b){
  let vida;
  if(a === b){
    vida = true;
} else {
  vida = false;
}
return vida;
}






