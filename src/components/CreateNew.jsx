import React, { useState } from "react";
import axios from "axios";
import "../styles/ModalSubmit.css";

const CreateNew = ({ active, setActive }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [picture_url, setPicture_url] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/news/add", {
      title,
      body,
      picture_url,
    });
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Описание"
          />
          <input
            type="url"
            value={picture_url}
            onChange={(e) => setPicture_url(e.target.value)}
            placeholder="Изображение"
          />
          <button onClick={handleSubmit}>
            ДОБАВИТЬ НОВОСТЬ
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateNew;
