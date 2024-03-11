import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import classes from "../styles/AllNews.module.css";

const AllNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/news/all");
        setNews(response.data);
      } catch (error) {}
    };
    fetchNews();
  }, []);

  return (
    <div className={classes.newsList}>
      {news.map((newItem) => (
        <NewsItem
          key={newItem.uuid}
          picture_url={newItem.picture_url}
          title={newItem.title}
          body={newItem.body}
          new_id={newItem.uuid}
        />
      ))}
    </div>
  );
};

export default AllNews;
