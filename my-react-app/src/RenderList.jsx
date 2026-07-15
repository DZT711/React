import { useEffect, useState } from 'react';
import { footballers } from './Footballers.jsx';
import { getPlayerAvatar } from './Utils.jsx';

export default function RenderList() {
  const [avatars, setAvatars] = useState({});

  useEffect(() => {
    let isCancelled = false;

    async function loadAvatars() {
      const nextAvatars = {};

      for (const footballer of footballers) {
        const avatarUrl = await getPlayerAvatar(footballer.name);
        if (!isCancelled) {
          nextAvatars[footballer.id] = avatarUrl;
        }
      }

      if (!isCancelled) {
        setAvatars(nextAvatars);
      }
    }

    loadAvatars();

    return () => {
      isCancelled = true;
    };
  }, []);

  const listItems = footballers.map((footballer) => (
    <li key={footballer.id} className="player-card">
      <img
        className="player-avatar"
        src={avatars[footballer.id] || ''}
        alt={footballer.name}
      />
      <div className="player-info">
        <b>{footballer.name}</b>
        <p>Age: {footballer.age}</p>
        <p>Position: {footballer.position}</p>
        <p>Club: {footballer.club}</p>
        <p>Country: {footballer.country}</p>
      </div>
    </li>
  ));

  return (
    <article>
      <ul>{listItems}</ul>
    </article>
  );
}