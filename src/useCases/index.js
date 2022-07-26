import axios from 'axios'
const url = process.env.REACT_APP_USERS_URL;

const createUser = (name, lastName, email, phoneNumber, cc) => {
    return axios.post(url, {
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        cc: cc
    })
};

const getOneUser = (id) => {
    return await axios.get(`${url}/${id}`)
};

const updateUser = (id, userData) => {
    const { 
        name,
        lastName,
        email,
        phoneNumber,
        cc 
    } = userData

    return axios.patch(`${url}/${id}`, {
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        cc: cc
    })
};

const deleteUser = async (id) => {
    return axios.delete(`${url}/${id}`)
};

export {
    createUser,
    getOneUser,
    updateUser,
    deleteUser
};