import { useForm } from "react-hook-form"

const Contacto = () => {

    const {register, handleSubmit} = useForm()

    const enviar = (data) =>{
        console.log(data)
    }

  return (
    <div className='container'>
        <h1 className='main-title'>Contacto:</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>

        <input type='text'  placeholder='ingrese su nombre' {...register("nombre")}/>
        
        <input type='email' placeholder='ingrese su email' {...register("email")}/>

        <input type='phone' placeholder='ingrese su numero de telefono' {...register("telefono")}/>
        
        <button className="Enviar" type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto