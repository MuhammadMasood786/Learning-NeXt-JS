import Link from 'next/link';

async function fetchRepoContents(name:string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/muhammadmasood786/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }:{name:string}):Promise<JSX.Element> => {
  const contents = await fetchRepoContents(name);
  console.log
  const dirs = contents.filter((content:any) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir:any) => (
          <li key={dir.path}>
            <Link href={`/code/repo/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default RepoDirs;