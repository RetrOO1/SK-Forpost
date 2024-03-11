import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ModalSubmit.css";

const isModalOpen = localStorage.getItem("isModalOpen") === "true";
const ModalSubmit = ({ active, setActive, children }) => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [localActive] = useState(isModalOpen);

  useEffect(() => {
    if (localActive) {
      setActive(true);
      localStorage.setItem("isModalOpen", "true");
    } else {
      setActive(false);
      localStorage.setItem("isModalOpen", "false");
    }
  }, [localActive, setActive]);

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    const payload = {
      name: firstName,
      phone_number: phoneNumber,
      email: email,
      message: message,
    };
    await axios.post("http://localhost:8000/mail/feedback", payload);
    setActive(false);
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
        {children}
        <form>
          <div className="form__feedback">
            <svg
              className="svg1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 4.5C1.5 10.0227 5.97733 14.5 11.5 14.5H13C13.3978 14.5 13.7794 14.342 14.0607 14.0607C14.342 13.7794 14.5 13.3978 14.5 13V12.0853C14.5 11.7413 14.266 11.4413 13.932 11.358L10.9833 10.6207C10.69 10.5473 10.382 10.6573 10.2013 10.8987L9.55467 11.7607C9.36667 12.0113 9.042 12.122 8.748 12.014C7.65659 11.6128 6.66544 10.9791 5.84319 10.1568C5.02094 9.33456 4.38725 8.34341 3.986 7.252C3.878 6.958 3.98867 6.63333 4.23933 6.44533L5.10133 5.79867C5.34333 5.618 5.45267 5.30933 5.37933 5.01667L4.642 2.068C4.60143 1.9058 4.50781 1.7618 4.37604 1.65889C4.24426 1.55598 4.08187 1.50006 3.91467 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V4.5Z"
                stroke="#555555"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>ФОРМА ОБРАТНОЙ СВЯЗИ</p>
            <span onClick={() => setActive(false)} className="close__feedback">
              <svg
                className="svg2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L12 4M4 4L12 12"
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="input__feedback">
            <input
              className="input__name"
              type="text"
              placeholder="Ваше имя"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <input
              className="input__phone"
              type="text"
              placeholder="Ваш телефона"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            ></input>
            <input
              className="input__email"
              type="text"
              placeholder="Ваша почта"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <textarea
              className="input__message"
              type="text"
              placeholder="Сообщение"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button onClick={handleSubmitFeedback}>ПРОДОЛЖИТЬ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSubmit;
