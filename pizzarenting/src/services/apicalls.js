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

export const bringPizzeriaById = async (params,res) => {
    try {
        let resp = await axios.get(
            `https://pizza-renting-backend-production.up.railway.app/pizzeria/byid/${params}`
            
        )
        
        return resp
    }catch(error){
        return error.response
    }
}


export const bringAllPizzerias = async (body,res) => {
    try{

        const jwt = sessionStorage.getItem("SAVEJWT")
        console.log(jwt)
        const token = "Bearer "+jwt;
        console.log(token)
        
        let resp = await axios.get("https://pizza-renting-backend-production.up.railway.app/pizzeria/all")
        return resp
    }catch(error){
        return error.response
    }
}

export const bringAllPizzasInPizzeria = async (params,res) => {
    try{
        console.log(params)
        let resp = await axios.get(`https://pizza-renting-backend-production.up.railway.app/pizzas/getbypizzeria/${params}`)
        
        return resp
    }catch(error){
        return error.response
    }
}


export const bringIngredientsInPizza = async (body,res) => {
    try{
    //     const jwt = sessionStorage.getItem("SAVEJWT")
    //     console.log(jwt)
    //     const token = "Bearer "+ jwt.replace(/['"]+/g, '');
    //     console.log(token)
    //     let config = {
    //         headers: {
    //             "Authorization": token,
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
    //             'Access-Control-Allow-Methods': '*',
    //             "Content-Type": "application/json"
    //         }

    // }
    console.log(body)

    

        return await axios.get(`https://pizza-renting-backend-production.up.railway.app/ingredients/ingredientsfrompizza`,
        body)
        
    }catch(error){
        return error.response
    }
}


export const bringPizzaById = async (params,res) => {
    try {
        
        return await axios.get(`https://pizza-renting-backend-production.up.railway.app/pizzas/getbyid/${params}`)
    } catch (error) {
        return error.response
        
    }
}
