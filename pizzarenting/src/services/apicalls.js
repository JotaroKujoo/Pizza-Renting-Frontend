import axios from "axios";

export const loginUser = async (body,res) => {
    try {
        let resp = await axios.post(
            "https://pizza-renting-backend-production.up.railway.app/auth/login",
            body
        )
        return resp
    } catch (error) {
        return error.response
    }
}

export const registerUser = async (body,res) => {
    try {
        let resp = await axios.post(
            "https://pizza-renting-backend-production.up.railway.app/auth/register",
            body
        )
        return resp
    } catch (error) {
        return error.response
    }
}

export const bringAllPizzerias = async (body,res) => {
    try{
        let resp = await axios.get("https://pizza-renting-backend-production.up.railway.app/pizzeria/all")
        return resp
    }catch(error){
        return error.response
    }
}