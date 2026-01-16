import { useState } from 'react';
import RepoList from './RepoList'
import useFetch from './useFetch'
import {DatabasesLanguage, PythonLanguage, JavascriptLanguage} from './LanguageEcosystems';

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from 'react-tooltip';

import { FaDatabase, FaGithub, FaHtml5, FaLinkedin, FaPhp, FaPython } from 'react-icons/fa';
import { SiPycharm, SiJupyter, SiJavascript } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";



const Home = (backend_url) => {
    
    const{data: Repos, isPending, error} = useFetch(backend_url.backend_url + '/repos');
    const contact_button_size = 30
    const tech_stack_size = 50
    const [activeLanguage, setActiveLanguage] = useState("python");

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
            <h2 className='green_text'>Skills</h2>
            <div className='tech_stack'>
                {/* languages */}

                <button onClick={() => setActiveLanguage("python")}>
                    <FaPython data-tooltip-id="tooltip" data-tooltip-content="Python" size={tech_stack_size}/>
                </button>
                {/* <button onClick={() => setActiveLanguage(null)}> */}
                    <FaHtml5 data-tooltip-id="tooltip" data-tooltip-content="HTML5" size={tech_stack_size}/>
                {/* </button> */}
                {/* <button onClick={() => setActiveLanguage(null)}> */}
                    <FaPhp data-tooltip-id="tooltip" data-tooltip-content="PHP" size={tech_stack_size}/>
                {/* </button> */}
                <button onClick={() => setActiveLanguage("javascript")}>
                    <SiJavascript data-tooltip-id="tooltip" data-tooltip-content="JavaScript" size={tech_stack_size}/>
                </button>
                <button onClick={() => setActiveLanguage("databases")}>
                    <FaDatabase data-tooltip-id="tooltip" data-tooltip-content="Databases" size={tech_stack_size}/>
                </button>
                <Tooltip id="tooltip" place="bottom" effect="solid"/>
            </div>

            <br />
            {activeLanguage && <h3 className='green_text'>Ecosystem</h3>}
            <div className='tech_stack'>
                {activeLanguage === "python" && <PythonLanguage tech_stack_size={tech_stack_size}/>}
                {activeLanguage === "javascript" && <JavascriptLanguage tech_stack_size={tech_stack_size}/>}
                {activeLanguage === "databases" && <DatabasesLanguage tech_stack_size={tech_stack_size}/>}
            </div>



            <br />
            <h2 className='green_text'>Tools & Environments</h2>
            <div className='tech_stack'>

                {/* IDEs */}
                <VscVscode data-tooltip-id="tooltip" data-tooltip-content="VS Code" size={tech_stack_size}/>
                <SiPycharm data-tooltip-id="tooltip" data-tooltip-content="PyCharm" size={tech_stack_size}/>
                <SiJupyter data-tooltip-id="tooltip" data-tooltip-content="Jupyter Notebook" size={tech_stack_size}/>

                <Tooltip id="tooltip" place="bottom" effect="solid"/>
            </div>

            
            <br /><br /><br />
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {Repos && <RepoList repos={Repos} title="Recent Projects" display_count={3}/>}
        </div>
    );

}

export default Home;