import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}
const getAllUsers = (inputID) => {
    return axios.get(`/api/getAllUser?id=${inputID}`)
}
const createNewUserService = (data) => {
    return axios.post(`/api/create-new-user`, data)
}
const getAllCodeService = (data) => {
    return axios.get(`/api/allcode?type=${data}`)
}
const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: userId
        }
    })
}
const editUserService = (data) => {
    return axios.put(`/api/update-user`, data)
}
const getAllDoctorService = (data) => {
    return axios.get(`/api/getAllDoctor?roleId=${data}`)
}
const saveDetailDoctorServices = (data) => {
    return axios.post(`/api/save-infor-doctors`, data)

}
export {
    handleLogin, getAllUsers,
    createNewUserService, getAllCodeService,
    deleteUserService, editUserService,
    getAllDoctorService, saveDetailDoctorServices
}