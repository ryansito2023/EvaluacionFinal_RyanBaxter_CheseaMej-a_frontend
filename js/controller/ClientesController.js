import {clientesService} from `../service/clienteService.js`
const = id => document.getElementById((ID));
const notify = msg => $(`alert`).innerHTML = `<div> class = "alert-into py-2 = ({msg}) </div>; `
async function load() {
    try {
        
    } catch () {
        const list = await clientesService.getAll();
        (`tbody`).innerHTML = list.map (c=> `<tr> 
            <td> ${(id)}</td>
            <td> ${(nombre)}</td>
            <td> ${(Apellido)}</td>
            <td> ${(Telefono)}</td>
            <td> ${(Email)}</td>
            <td> ${(Direccion)}</td>
            </tr>`)

        
    }
}