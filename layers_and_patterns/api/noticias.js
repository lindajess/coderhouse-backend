import config from "../config"
import NoticiasFactoryDAO from '../model/DAOs/noticiasFactory.js'

class ApiNoticias {
    constructor(){
        this.noticiasDAO = NoticiasFactoryDAO.get(config.TIPO_PERSISTENCIA)
    }

    async obtenerNoticias(id){
        return await this.noticiasDAO.obtenerNoticias(id)
    }   
}

export default ApiNoticias 