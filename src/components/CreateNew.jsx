import React, { useState } from "react";
import axios from "axios";
import "../styles/ModalSubmit.css";

const CreateNew = ({ active, setActive }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [picture_url, setPicture_url] = useState("");
  const [file, setFile] = useState(null);

  const formData = new FormData();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("file", file);
    const response = await axios.post("http://localhost:8000/news/picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    setPicture_url(response.data);
    console.log(picture_url);
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
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Описание"
          />
          <input
            type="file"
            onChange={handleFileChange}
            placeholder="Изображение"
          />
          <button onClick={handleSubmit}>ДОБАВИТЬ НОВОСТЬ</button>
        </form>
      </div>
    </div>
  );
};
export default CreateNew;
