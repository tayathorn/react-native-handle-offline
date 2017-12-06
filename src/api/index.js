import axios from 'axios'

export const fetchUser = () => axios.get('https://randomuser.me/api')