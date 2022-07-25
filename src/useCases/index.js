import axios from 'axios'
const url = process.env.REACT_APP_USERS_URL;

const createUser = async (name, lastName, email, phoneNumber, cc) => {
    try {
        await axios.post(url, {
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            cc: cc
        })
    } catch (err) {
        console.log(err)
    }
}

const getOneUser = async (id) => {
    try {
        await axios.get(url+'/'+id)
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (id, userData) => {
    const { 
        name,
        lastName,
        email,
        phoneNumber,
        cc 
    } = userData

    try {
        await axios.patch(url+'/'+id, {
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            cc: cc
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteUser = async (id) => {
    try {
        await axios.delete(url+'/'+id)
    } catch (err) {
        console.log(err)
    }
}