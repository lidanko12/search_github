import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './RepoCard.module.css'

export default function RepoCard() {
  const [repo, setRepo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const fetchRepo = await fetch(
        `https://api.github.com/repositories/${id}`
      );
      if (fetchRepo) {
        const repoJson = await fetchRepo.json();
        setRepo(repoJson);
      }
    })();
  }, [id]);
  return (
    <>
          {repo && (
              
        <div className={s.container}>
                  <h2> Name --{repo.name}</h2>
                  <div className={s.thumb}>
          <img src={repo.owner.avatar_url} alt={repo.owner.login}></img>
                  </div>
          <p className={s.desc}>Login-- {repo.owner.login}</p>
          <a className={s.link}  rel="noopener noreferrer" target="_blank" href={repo.html_url}>link </a>
            <p className={s.desc}>{repo.html_url}</p>
            <p className={s.desc}>Description-- {repo.description}</p>
            <p className={s.desc}>Date: { repo.created_at.split('T').shift()}</p>

        </div>
      )}
    </>
  );
}

