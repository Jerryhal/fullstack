import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>
    axios.get(baseUrl).then(response => response.data);

const create = (person) =>
    axios.post(baseUrl, person).then(response => response.data);

const remove = (person) => 
    axios.delete(baseUrl + '/' +  person.id).then(response => response.data);

const put = (person, id) => {
    const newPerson = { ...person, id: id}
    return axios.put(baseUrl + '/' +  newPerson.id, newPerson)
    .then(response => response.data)
    .catch(error => error);
}

export { getAll, create, remove, put } 