
import { SiFlask} from 'react-icons/si';
import "react-tooltip/dist/react-tooltip.css";





const PythonLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
                <SiFlask data-tooltip-id="tooltip" data-tooltip-content="Flask" size={tech_stack_size}/>
        </div>
    );

}

export default PythonLanguage;