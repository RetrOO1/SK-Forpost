import React from "react";
import "../styles/DeleteNew.css";

const DeleteNew = ({ new_id }) => {
  const handleDelete = async (e) => {
    e.preventDefault((e) => e.stopPropagation());
    fetch(`http://localhost:8000/news/delete/${new_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.ok ? window.location.reload() : console.log("error");
    });
  };

  return (
  
    <button type="submit" className="delete__button" onClick={handleDelete}>
      УДАЛИТЬ
    </button>
   
  );
};

export default DeleteNew;