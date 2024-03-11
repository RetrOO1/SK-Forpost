import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../styles/NewPage.css";
import DeleteNew from "../components/DeleteNew";
import EditButton from "../components/UI/Button/EditButton";

const NewPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8000/news/get/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error("Ошибка получения поста");
        }
      } catch (error) {
        console.error("Ошибка сети", error);
      }
    };
    fetchPost();
  }, []);

  if (post === null) {
    return <Navigate to="/news" />;
  }

  return (
    <div className="new__page">
      <div className="new__content">
        <img src={post.picture_url} alt="" />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="new__buttons">
        <EditButton />
        <DeleteNew new_id={post.uuid} />
      </div>
    </div>
  );
};

export default NewPage;
