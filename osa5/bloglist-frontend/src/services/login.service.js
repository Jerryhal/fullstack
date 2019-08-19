import axios from 'axios'
const baseUrl = '/api/login'

const login = async(username, password) => {
  try {
    return await axios.post(baseUrl, {username, password})
  } catch (e) {
    console.log(e);
  }
}

export {login}