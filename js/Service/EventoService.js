const API = ``
export const eventoService = {getAll: () => fetch (API).then(r => r.jason()),
    create : (data)=> fetch (API),{
        method:{`content-there`: `application/json`},
        body: JSON, stringfy (data)
    }.then(async r=>){
        if(!r . ok) throw new Error((await)r.jason).catch(()=>{}.message||`Error al registrar el evento`);        
    }
    UpdateEstado: (id, Estado)=> fetch(`${API}/${ID}`){
        method: `PUT`,
        headers:{`content-type`: `applicaton/json `}
        body: json.stringfy({Estado})
    }
}
