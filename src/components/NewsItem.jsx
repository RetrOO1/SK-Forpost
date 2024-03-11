import React from "react";
import classes from "../styles/NewsItem.module.css";
import { useNavigate } from "react-router-dom";

const NewsItem = (props) => {
  const router = useNavigate();
  return (
    <div className={classes.newsItem} onClick={() => router(`/news/${props.new_id}`)}>
      <img src={props.picture_url} alt="" />
      <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default NewsItem;
