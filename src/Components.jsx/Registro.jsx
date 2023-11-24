import Socialbutton from "./SocialButton";
import Formulario from "./Formulario";
import Aviso from "./Aviso";

// Recibe algunas props desde App.jsx y las envía en función de los requerimientos del desafío
const Registro = ({mensaje, setMensaje, setColor, color}) =>{

    return(
        <>   
            <div className="div">
                <div className="div">
                    <Socialbutton 
                        icon1="facebook"
                        icon2="github"
                        icon3="linkedin"  
                    />
                    <Formulario setMensaje={setMensaje} setColor={setColor}/>
                </div>
                <div className="aviso">
                    <Aviso mensaje={mensaje} color={color}/>
                </div>
            </div> 
        </>
    );
}
export default Registro;