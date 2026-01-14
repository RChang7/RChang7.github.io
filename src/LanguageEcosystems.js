
import { SiMysql, SiSqlite, SiFlask } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import "react-tooltip/dist/react-tooltip.css";



 export const DatabasesLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
            <SiMysql data-tooltip-id="tooltip" data-tooltip-content="MySQL" size={tech_stack_size}/>
            <SiSqlite data-tooltip-id="tooltip" data-tooltip-content="SQLite" size={tech_stack_size}/>
        </div>
    );

}

export const PythonLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
                <SiFlask data-tooltip-id="tooltip" data-tooltip-content="Flask" size={tech_stack_size}/>
        </div>
    );

}

export const JavascriptLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
                <FaReact data-tooltip-id="tooltip" data-tooltip-content="React" size={tech_stack_size}/>
        </div>
    );

}
