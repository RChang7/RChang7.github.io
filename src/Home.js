import RepoList from './RepoList'
import useFetch from './useFetch'
import { Tooltip } from 'react-tooltip';
import { FaGithub, FaHtml5, FaLinkedin, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { SiMysql, SiPycharm, SiSqlite, SiFlask, SiJupyter } from 'react-icons/si';
import "react-tooltip/dist/react-tooltip.css";




const Home = () => {

    const{data: Repos, isPending, error} = useFetch('https://api.github.com/users/RChang7/repos');
    const contact_button_size = 30
    const tech_stack_size = 50

    return (  
        <div className="home">
            <div className="intro_section">
                <h2 className="green_text">Hello I'm</h2>
                <h1>Ryan Chang</h1>
                <h2>Aspiring Software Engineer</h2>
                <p>I'm currently a student at the Queensland University of Technology <br />studying Information Technology and Engineering</p>
                <a href="https://github.com/RChang7" className='contact-button'><FaGithub size={contact_button_size}/> </a>
                <a href="https://www.linkedin.com/in/ryanchang-it/" className='contact-button'><FaLinkedin size={contact_button_size} /> </a>
            </div>
            <br/>
            <h2 className='green_text'>Tools and Technologies</h2>
            <div className='tech_stack'>
                {/* languages */}

                <FaPython data-tooltip-id="tooltip" data-tooltip-content="Python" size={tech_stack_size}/>
                <SiFlask data-tooltip-id="tooltip" data-tooltip-content="Flask" size={tech_stack_size}/>
                <SiSqlite data-tooltip-id="tooltip" data-tooltip-content="SQLite" size={tech_stack_size}/>
                <SiMysql data-tooltip-id="tooltip" data-tooltip-content="MySQL" size={tech_stack_size}/>
                <FaReact data-tooltip-id="tooltip" data-tooltip-content="React" size={tech_stack_size}/>
                <FaHtml5 data-tooltip-id="tooltip" data-tooltip-content="HTML5" size={tech_stack_size}/>
                <FaPhp data-tooltip-id="tooltip" data-tooltip-content="PHP" size={tech_stack_size}/>

                {/* IDEs */}
                <VscVscode data-tooltip-id="tooltip" data-tooltip-content="VS Code" size={tech_stack_size}/>
                <SiPycharm data-tooltip-id="tooltip" data-tooltip-content="PyCharm" size={tech_stack_size}/>
                <SiJupyter data-tooltip-id="tooltip" data-tooltip-content="Jupyter Notebook" size={tech_stack_size}/>

                <Tooltip id="tooltip" place="bottom" effect="solid"/>
            </div>

            <br /><br /><br /><br /><br /><br /><br />
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {Repos && <RepoList repos={Repos} title="Recent Projects" display_count={3}/>}
        </div>
    );

}

export default Home;