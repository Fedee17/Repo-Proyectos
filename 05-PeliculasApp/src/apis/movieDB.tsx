import axios from 'axios'

const movieDB = axios.create ({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6d4fd50eeafbe883bed8bceced43bc1b',
        language: 'es-ES'
    }
})

export default movieDB;