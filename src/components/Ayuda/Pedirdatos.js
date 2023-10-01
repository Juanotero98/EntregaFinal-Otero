import productos from "../productos/productos.json"

export const pedirDatos = () =>{

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}

export const pedirItemPorId = (id) =>{
    return new Promise ((resolve, reject)=>{

        const item= productos.find((el)=> el.id === id)

        if (item){
            resolve(item)
        }else{
            reject({error: "producto no encontrado"})
        }
    })
}