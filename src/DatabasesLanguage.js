
import { SiMysql, SiSqlite } from 'react-icons/si';
import "react-tooltip/dist/react-tooltip.css";





const DatabasesLanguage = ({tech_stack_size}) => {

    return (  
        <div className='tech_stack'>
            <SiMysql data-tooltip-id="tooltip" data-tooltip-content="MySQL" size={tech_stack_size}/>
            <SiSqlite data-tooltip-id="tooltip" data-tooltip-content="SQLite" size={tech_stack_size}/>
        </div>
    );

}

export default DatabasesLanguage;