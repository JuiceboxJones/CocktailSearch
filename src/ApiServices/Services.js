import config from "../config";

const ApiService = {
  getSearchResults(input){

    let params = config.API_ENDPOINT + input.category + '.php?i=' + input.term
    console.log(params)
    return fetch(`${params}`, {
      method: 'GET',
      headers:{
        'X-RapidAPI-Host' : config.API_HOST,
        'X-RapidAPI-Key' : config.API_KEY
      }
    }).then(res => (!res.ok ? console.log(res) : res.json()))
  }
}
export default ApiService;