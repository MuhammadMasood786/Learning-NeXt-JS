import Link from "next/link";
import React from "react";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/muhammadmasood786/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = response.json();
  return data;
}

interface IRepo {
  id: number;
  name: string;
  description: string;
  forks_count: string;
  watchers_count: string;
  stargazers_count: string;
}

const Repo = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo: IRepo) => (
          <li key={repo.id}>
            <Link href={`/code/repo/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>{repo.stargazers_count}</span>
                <span>{repo.forks_count}</span>
                <span>{repo.watchers_count}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repo;
