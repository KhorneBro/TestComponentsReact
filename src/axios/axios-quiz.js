import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-d3e97.firebaseio.com/'
})