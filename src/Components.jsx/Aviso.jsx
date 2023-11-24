import Alert from 'react-bootstrap/Alert'

const Aviso = ({mensaje, color}) =>{

   return(
    <>
       <div className='aviso_int'>
            <Alert className='alert' variant={color} key={color}>
                {mensaje}
            </Alert>
       </div>
    </>
   );
}
export default Aviso;