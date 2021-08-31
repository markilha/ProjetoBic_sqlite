
import Axios from 'axios'

export async function getLotes(){
    return Axios.get('https://api.cartolafc.globo.com/atletas/mercado')
    .then(res => res.data.atletas)
}