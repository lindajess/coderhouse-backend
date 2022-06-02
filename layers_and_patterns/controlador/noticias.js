
import ApiNoticias from '../api/noticias.js'

class ControladorNoticias {
    constructor(){
        this.apiNoticias = new ApiNoticias()
    }

    obtenerNoticias =  async (req, res) => {
        try {
            const id = req.params.id
            const listaNoticias = await this.apiNoticias.obtenerNoticias(id)

            res.send(listaNoticias)
        } catch (error) {
            console.log('error al obtener las noticias', error)
        }
    }

    // Implementar otros metodos

    guardarNoticia = async (req, res) => {}

    actualizarNoticia = async (req, res) => {}

    borrarNoticia = async (req, res) => {}
}

export default ControladorNoticias