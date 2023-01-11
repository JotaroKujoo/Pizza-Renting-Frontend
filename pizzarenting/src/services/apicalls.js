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
        let resp = await axios.get(`https://pizza-renting-backend-production.up.railway.app/pizzas/getbypizzeria/${params}`)
        
        return resp
    }catch(error){
        return error.response
    }
}


export const bringIngredientsInPizza = async (body,res) => {
    try{
        const jwt = sessionStorage.getItem("SAVEJWT")
        console.log(jwt)
        const token = "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoicmRyZHJkQGdtYWlsLmNvbSIsIm5hbWUiOiJKb3NlbGl0ZSIsImlkIjoyLCJyb2xlIjoyLCJpYXQiOjE2NzMzNzE5OTd9.R8x7UkiLJ6OWK6-xLDGXVjE1fvieKr1Ce5SQRzBR26U";
        console.log(token)
        let config = {
            headers: {
                "Authorization": token,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            }

    }

    

        return await axios.post(`https://pizza-renting-backend-production.up.railway.app/ingredients/ingredientsfrompizza`,
        body,config)
        
    }catch(error){
        return error.response
    }
}
