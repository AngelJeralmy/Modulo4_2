import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Formulario = ({setMensaje, setColor}) => {

const bandera = [0];

//Arreglo de estados para los 'inputs' del formulario.
const [formulario, setFormulario]=useState({
    nombre:"",
    email:"",
    contraseña:"",
    confirmartucontraseña:""});


// Recibe el valor retornado por la función validadora y envia mensaje y color para el Alert bootstrap
const enviarformulario = (e) =>{

    e.preventDefault();
    const answer = validatedata ();

    if (answer === 0) {
        setMensaje("¡Formulario enviado correctamente!");
        setColor("success");
    } else if (answer === 1) {
        setMensaje("¡Contraseñas no coinciden!");
        setColor("danger");
    } else if (answer === 2) {
        setMensaje("¡Debe ingresar todos los campos!");
        setColor("danger");
    } else if (answer === false) {
        setMensaje("¡Formato de correo incorrecto!");
        setColor("danger");
    }

}


// Se valida y retorna un valor en función de si los datos fueron o no introducidos correctamente
const validatedata = () =>{

    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let cont = 0; 


    if(!formato.test(formulario.email) && formulario.email.length > 0){
        return(false);
    }

    else if(formulario.contraseña != formulario.confirmartucontraseña){
        return(1);
    }

    else if(formulario.email == 0 || formulario.contraseña == 0 || formulario.confirmartucontraseña == 0 || formulario.nombre == 0)
        return (2);

    else    
        return(0);

}

// Recibe y guarda cada estado ingresado al input, luego llama a la función para validar
const changestate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormulario({...formulario, [name]:value});
    validatedata ();
}



    return(
        <>
            <form style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", paddingTop:"10px"}} onSubmit={enviarformulario}>
                <div>
                    <input type="text" name="nombre" placeholder="Nombre"onChange={(e)=>{changestate (e)}}/>
                </div>
                <div>
                    <input type="password" name="contraseña" placeholder="Contraseña" onChange={(e) => {changestate (e)}} />
                </div>
                <div>
                    <input type="password" name="confirmartucontraseña" placeholder="Confirmar tu contraseña" onChange={(e) => {changestate (e)}} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="Email" onChange={(e) => {changestate (e)}} />
                </div>
                <Button variant="success" type="submit">
                    Registrar
                </Button>
            </form>
        </>
    );
}
export default Formulario;