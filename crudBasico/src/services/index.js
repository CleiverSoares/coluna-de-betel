import axios from "axios"
import pessoasService from "./pessoas"

export const httpClient = axios.create({
    baseURL: "https://640f332ccde47f68db44764d.mockapi.io/",
    headers: {
        'Content-Type': 'application/json'
    }
})
export default {
    pessoas: pessoasService(httpClient),
}