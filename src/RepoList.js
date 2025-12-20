

const RepoList = ({repos, title}) => {

    const exclude_repos = [1119585370,1032529442]

// (repo.id !== 1119585370) && (repo.id !== 1032529442))

    return ( 
        <div className="repo-list">
            <h2>{title}</h2>
            {repos.filter(repo => !exclude_repos.includes(repo.id)).map((repo) => (
                <div className="repo-preview" key={repo.id}>
                    <a href={repo.html_url}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                    </a>

                </div>
            ))}
        </div>
    );
}

export default RepoList;