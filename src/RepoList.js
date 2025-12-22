import { Link } from 'react-router-dom';

const RepoList = ({repos, title, display_count}) => {

    const exclude_repos = [1119585370,1032529442]



    const filtered_repos = repos.filter(repo => !exclude_repos.includes(repo.id))

    filtered_repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    


    return ( 
        <div className="repo-list">
            <h2>{title}</h2>
            {filtered_repos.slice(0, display_count).map((repo) => (
                <div className="repo-preview" key={repo.id}>
                    <Link to={`/allrepos/${repo.name}`}>
                    <h2>{repo.name.replace(/-/g, " ")}</h2>
                    <p>{repo.description}</p>
                    <p>Last updated: {new Date(repo.updated_at).toLocaleDateString("en-AU")}</p>
                    <p>Language: {repo.language}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default RepoList;