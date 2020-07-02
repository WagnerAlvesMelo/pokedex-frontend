import axios from 'axios'

const api = axios.create({
  baseURL: "https://pokedexredfox.herokuapp.com/"
});



export default api;