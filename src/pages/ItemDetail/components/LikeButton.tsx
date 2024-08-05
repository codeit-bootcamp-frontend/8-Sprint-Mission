import React from "react";
import HeartIcon from "../../../assets/ic_heart.svg";
import "./LikeButton.css";

interface LikeButtonProps {
  favoriteCount: number;
}

function LikeButton({ favoriteCount }: LikeButtonProps) {
  return (
    <div className="like-button-container">
      <img src={HeartIcon} alt="좋아요 버튼 이미지" />
      <p className="like-button-favoriteCount">{favoriteCount}</p>
    </div>
  );
}

export default LikeButton;
