import axios from 'axios'

const params = {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyBm3-Exxz_o4QzHpsoLcR9FfFIhTdERY0M'
}

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params
})