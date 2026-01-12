
import { FaReact } from 'react-icons/fa';
import "react-tooltip/dist/react-tooltip.css";





const JavascriptLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
                <FaReact data-tooltip-id="tooltip" data-tooltip-content="React" size={tech_stack_size}/>
        </div>
    );

}

export default JavascriptLanguage;