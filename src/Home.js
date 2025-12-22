import RepoList from './RepoList'
import useFetch from './useFetch'



const Home = () => {

    const{data: Repos, isPending, error} = useFetch('https://api.github.com/users/RChang7/repos');


    return (  
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {Repos && <RepoList repos={Repos} title="Recent Repositories" display_count={3}/>}
        </div>
    );

}

export default Home;