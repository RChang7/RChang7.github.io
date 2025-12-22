import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const RepoDetails = () => {
    const { name } = useParams();
    const { data: repo, error, isPending } = useFetch('https://api.github.com/repos/RChang7/' + name);


    return (
        <div className="repo-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { repo && (
            <article>
                <h2>{repo.name.replace(/-/g, " ")}</h2>
                <br />
                <p>{ repo.description }</p>
                <br />
                <p>Created on: {new Date(repo.created_at).toLocaleDateString("en-AU")}</p>
                <p>Last updated: {new Date(repo.updated_at).toLocaleDateString("en-AU")}</p>
                <p>Language: {repo.language}</p>
                <p>Topics:</p>
                <ul>
                    {repo.topics.map(topic => <li key={topic}>{topic.replace(/-/g, ' ')}</li>)}
                </ul>
                <br />
                <a href={repo.html_url}>Visit Github</a>
            </article>
            )}
        </div>
    );
}

export default RepoDetails;