import { useState } from 'react';
import { useEffect } from 'react';
import { Joke } from '../components/jokes/joke';
import './style.css';

export const HomePage = () => {
  const [jokess, setJokess] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json');
      const data = await response.json();
      setJokess(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {jokess.map((vtip) => (
        <Joke 
         key={vtip.id} userAvatar={vtip.avatar} userName={vtip.name} text={vtip.text} likes={vtip.likes} dislikes={vtip.dislikes}
        />
      ))}
  </div>
  );
};
