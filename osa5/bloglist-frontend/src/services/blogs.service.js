import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  try {
    return await axios.get(baseUrl)
  } catch (e) {
    console.log(e);
  }
}

export default getAll