import axios from "axios"
import md5 from "md5"

// const baseURL = 'http://gateway.marvel.com/v1/public/characters'
const publicKey = 'a2ff6a2ef8f1fc8b0b0f95d4ffce6bc8'
const privateKey = '97451d531186e4f33201394c5ee24b5922132d38'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

// const fetchApi = async () => {
//   axios.get(
//     `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
//     ).then( response => {
//       return response.data.data;
      
//     })
//     .catch(error => console.log(error))
// }

const fetchApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash,
  }
})

export default fetchApi