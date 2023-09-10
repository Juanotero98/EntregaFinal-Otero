import productos from "../productos/productos.json"

export const pedirDatos = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}