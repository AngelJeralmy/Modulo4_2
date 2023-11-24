import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

// Recibe nombre de los iconos
const Socialbutton = ({icon1, icon2, icon3}) =>{
    return(
        <>
            <div style={{paddingBottom:"10px", paddingTop:"5px"}}>
                <FontAwesomeIcon icon={['fab', icon1]} size='3x' />
                <FontAwesomeIcon icon={['fab', icon2]} size='3x' style={{paddingLeft:"15px", paddingRight:"15px"}}/>
                <FontAwesomeIcon icon={['fab', icon3]} size='3x' />
            </div>
            <h6>
                O usa tu email para registarte
            </h6>
        </>
    );
}
export default Socialbutton;