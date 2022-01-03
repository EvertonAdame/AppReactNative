import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from "../util/config"

class UsuarioService{
    
    async cadastrar(data){
        return axios({
            url: Config.API_URL + "usuario/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

     async entrar(data){
        return axios({
            url: Config.API_URL + "usuario/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            AsyncStorage.setItem("TOKEN", response.data.access_token)
            AsyncStorage.setItem("EMAIL", response.data.user_email)
            AsyncStorage.setItem("NOME", response.data.user_name)
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    
   
    async logarComToken(data){
        return axios({
            url: Config.API_URL + "usuario/login-token",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            if (response.data.access_token){
                AsyncStorage.setItem("TOKEN", response.data.access_token)            
                return Promise.resolve(response)
            }else{
                return Promise.reject(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}
    const usuarioService = new UsuarioService()
    export default usuarioService