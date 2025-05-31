import './joke.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likess, setLikess] = useState(likes);
  const [dislikess, setDislikess] = useState(dislikes);

  const handleClick = () => {
    setLikess(likes + 1)};

  const handleClick2 = () => {
    setDislikess(dislikes + 1)};
    
  return(

    <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={userAvatar} />
              <p className="user-name">{userName}</p>
            </div>

            <p className="joke__text">
              {text}
            </p>
          </div>
          <div className="joke__likes">
            <button id="btn-up" className="btn-like btn-like--up" onClick={handleClick}></button>
            
            <span id="likes-up" className="likes-count likes-count--up">{likess}</span>
            <button id="btn-down" className="btn-like btn-like--down" onClick={handleClick2}></button>
            <span id="likes-down" className="likes-count likes-count--down">{dislikess}</span>
          </div>
        </div>
    )
    }