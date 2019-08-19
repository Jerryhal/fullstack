import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  try {
    const blogs = await axios.get(baseUrl);
    return blogs.data 
  } catch (e) {
    console.log(e);
  }
}

const postBlog = async (blog, token) => {
  const data = {
    author: blog.author,
    title: blog.title,
    url: blog.url,
  }
  try {
    return await axios.post(baseUrl, data, {headers: {Authorization: `bearer ${token}`}});
  } catch (e) {
    console.log(e);
  }
}

const deleteBlog = async (blogId, token) => {
  const url = `${baseUrl}/${blogId}`;
  try {
    return await axios.delete(url, {headers: {Authorization: `bearer ${token}`}});
  } catch (e) {
    console.log(e);
  }
}

const likeBlog = async (blogId, likes) => {
  const url = `${baseUrl}/${blogId}`
  try {
    return await axios.put(url, {likes: likes});
  } catch (e) {
    console.log(e);
  }
}

export {getAll, postBlog, likeBlog, deleteBlog}