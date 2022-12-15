export const goToHomePage = (navigate) => {
  navigate("/")
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex")
};

export const goToPokemonPage = (navigate, name) => {
  navigate(`/pokedex/${name}`)
};