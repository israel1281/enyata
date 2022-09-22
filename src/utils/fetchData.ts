import axios from "axios"

export const getAPI = async (url: string) => {
    const res = await axios.get(`https://swapi.dev/api/${url}`)
    
    return res;
}