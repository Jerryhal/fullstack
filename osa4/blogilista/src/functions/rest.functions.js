import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

const getAll = () =>
    axios.get(baseUrl).then(response => response.data);

const create = (blog) =>
    axios.post(baseUrl, blog).then(response => response.data);

const remove = (blog) => 
    axios.delete(baseUrl + '/' +  blog.id).then(response => response.data);

const put = (blog, id) => {
    const newBlog = { ...blog, id: id}
    return axios.put(baseUrl + '/' +  newBlog.id, newBlog)
    .then(response => response.data)
    .catch(error => error);
}

export { getAll, create, remove, put } 