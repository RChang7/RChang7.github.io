import RepoList from './RepoList'
import useFetch from './useFetch'



const AllRepos = ({backend_url}) => {
    
    const{data: repos, isPending, error} = useFetch(backend_url + '/repos');


    return (  
        <div className="allRepos">
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {repos && <RepoList repos={repos} title="All Repositories" display_count={repos.length}/>}
        </div>
    );
}

export default AllRepos;