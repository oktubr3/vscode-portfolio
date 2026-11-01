import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'oktubr3';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={username}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

// Los datos son públicos: el token sólo sube el límite de consultas. Si falta
// o venció, GitHub responde 401 y se reintenta sin él.
async function fetchGitHub(path) {
  const token = process.env.GITHUB_API_KEY;
  const url = `https://api.github.com${path}`;
  let res = await fetch(url, {
    headers: token ? { Authorization: `token ${token}` } : {},
  });
  if (res.status === 401 && token) {
    res = await fetch(url);
  }
  return res.ok ? res.json() : null;
}

export async function getStaticProps() {
  const user = (await fetchGitHub(`/users/${username}`)) || {
    login: username,
    avatar_url: `https://avatars.githubusercontent.com/${username}`,
    public_repos: 0,
    followers: 0,
  };

  let repos = await fetchGitHub(`/users/${username}/repos?per_page=100`);

  if (!Array.isArray(repos)) {
    repos = [];
  }
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 17)
    // Elimino el elemento con el titulo 'img'
    .filter((repo) => repo.name !== 'img' && repo.name !== 'oktubr3');

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
