
class NoticiasMemDAO {
    constructor(){
        this.noticias = [] 
    }

    obtenerNoticias = async id => {
        try {
            if(id){
                const element = this.noticias.find(element => element._id === id )
                return element ? element : "not found"
            }else {
                return this.noticias
            }
        } catch (error) {
            console.log('error', error)
            return []
        }
    }
}