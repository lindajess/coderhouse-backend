import NoticiasMemDAO from './noticiasMem.js'
import NoticiasFileDAO from './noticiasFile.js'
import NoticiasMongoDAO from './noticiasMongo.js'


class NoticiasFactoryDAO {
    static get(tipo){
        switch (tipo) {
            case 'MEM':
                return new NoticiasMemDAO()
            case 'FILE':
                return new NoticiasFileDAO()
            case 'MONGO':
                return NoticiasMongoDAO
            default:
                return new NoticiasMemDAO()
        }
    }
}


export default NoticiasFactoryDAO