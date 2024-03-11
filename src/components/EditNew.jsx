import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/ModalSubmit.css";

const EditNew = ({ active, setActive }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const { id } = useParams();

  const handleEdit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      body,
      picture_url,
      uuid: id,
    };
    await axios.post("http://localhost:8000/news/edit", payload);
    window.location.reload();
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleEdit}>
          <input
            сlassName="title__input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
          />
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Описание"
          />
          <input
            сlassName="picture__input"
            type="url"
            value={picture_url}
            onChange={(e) => setPicture_url(e.target.value)}
            placeholder="Изображение"
          />
          <button onClick={handleEdit}>Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default EditNew;
