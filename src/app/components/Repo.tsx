import Link from "next/link";

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/muhammadmasood786/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}

const RepoView = async ({ name }: { name: string }):Promise<JSX.Element> => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};
export default RepoView;
