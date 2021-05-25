const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "360",
};

const { url, type, id } = apiData;

const apiUrl = `${url}${type}/${id}`;

fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHtml(pokemon));

const generateHtml = (data) => {
  const html = `<div class="name">Pokemon: ${data.name} <br /><br />
  <span>Height: ${data.height}</span> <br /><br />
  <span>Weight: ${data.weight}</span> <br /><br />
  </div>
  <img src=${data.sprites.front_default}>`;
  const pokemonDiv = document.querySelector(".pokemon");
  pokemonDiv.innerHTML = html;
};
