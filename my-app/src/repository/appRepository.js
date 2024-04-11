import axios from "axios";


//creer une instance axios pour effectuer des requetes http
export const depensesApi=axios.create({
    baseURL: "http://localhost:3000",
})

export const getDepenses =(keyword="", page=1, size=2) =>{
    return depensesApi.get(`/?name_like=${keyword}&_page=${page}&_limit=${size}`)
};

export const saveDepense = (depense)=>{
    return depensesApi.post(`/`, depense);
}



