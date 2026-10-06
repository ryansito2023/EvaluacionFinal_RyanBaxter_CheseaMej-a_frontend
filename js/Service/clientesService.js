const API = ``
export const clientesService = {
    getAll:()=> fetch(API).then(r.json()),
    getByid:(id) => fetch(`${APU}/${ID}`):API.{
          method: id ? `PUT`, `POST`,
          headers: {`content-Tyepe` : `application /jason`},
          body : JSON, stringfy (data)
    }.then (async r =>{
        if(!r.ok)new Error((await r.json().catch ()=>{}.message`Error al gaurdar al cliente`))
            return r.json
    })
    delete: (id)=> fetch(`${API}/${ID}`),
    method:delete().then (r =>{
        if (!r.ok)new Error(`Error al eliminar al cliente`)
    })
} 