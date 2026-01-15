import RepoList from './RepoList'
import useFetch from './useFetch'



const AllRepos = () => {
    
    const{data: repos, isPending, error} = useFetch('http://3.24.62.163:5000/repos');


    return (  
        <div className="allRepos">
            { error && <div>{error}</div>}
            {isPending && <div>Loading. . .</div>}
            {repos && <RepoList repos={repos} title="All Repositories" display_count={repos.length}/>}
        </div>
    );
}

export default AllRepos;