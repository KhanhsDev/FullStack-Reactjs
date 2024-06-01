import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}
const getAllUsers = (inputID) => {
    return axios.get(`/api/getAllUser?id=${inputID}`)
}
export { handleLogin, getAllUsers }