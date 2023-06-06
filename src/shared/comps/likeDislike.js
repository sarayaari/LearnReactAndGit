import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";


const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  return (
    <div className="like-dislike">
      <div className="btn-group">
      
        <button
          type="button"
          className={`btn btn-outline-primary ${disliked ? "active" : ""}`}
          onClick={handleDislike}
        >
          <FontAwesomeIcon icon={faThumbsDown} />          
        </button>
        <button
          type="button"
          className={`btn btn-outline-primary ${liked ? "active" : ""}`}
          onClick={handleLike}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <span className="ml-1">{likes}</span>
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;


