import axios from "axios";

export const axiosMock = async (id) => {
    let users = await axios.get('/users')
    return users.data;
}
