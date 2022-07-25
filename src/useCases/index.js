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

const updateUser = async ()