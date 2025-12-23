import RepoList from './RepoList'
import useFetch from './useFetch'
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Home = () => {

    const{data: Repos, isPending, error} = useFetch('https://api.github.com/users/RChang7/repos');
    const contact_button_size = 30

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

            <br /><br /><br /><br /><br /><br /><br />
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {Repos && <RepoList repos={Repos} title="Recent Projects" display_count={3}/>}
        </div>
    );

}

export default Home;