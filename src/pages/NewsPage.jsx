import React from "react";
import AllNews from "../components/AllNews";
import "../styles/NewsListPage.css";

import CreateNewButton from "../components/UI/Button/CreateNewButton";

const News = () => {
  
  return (
    <div className="newsList__page"> 
      <div className="news__title">
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12.75 16H17.75M12.75 20H17.75M12.75 24H17.75M21.75 25H24.75C25.5456 25 26.3087 24.6839 26.8713 24.1213C27.4339 23.5587 27.75 22.7956 27.75 22V8.144C27.75 6.63067 26.6233 5.34667 25.1153 5.22133C24.6167 5.17998 24.1175 5.14442 23.618 5.11467M23.618 5.11467C23.7065 5.40145 23.7501 5.69988 23.75 6C23.75 6.26522 23.6446 6.51957 23.4571 6.70711C23.2696 6.89464 23.0152 7 22.75 7H16.75C16.198 7 15.75 6.552 15.75 6C15.75 5.692 15.7967 5.39467 15.8833 5.11467M23.618 5.11467C23.2407 3.89067 22.0993 3 20.75 3H18.75C18.109 3.00015 17.4849 3.20553 16.969 3.58605C16.4532 3.96658 16.0727 4.50226 15.8833 5.11467M15.8833 5.11467C15.382 5.14533 14.8833 5.18133 14.3847 5.22133C12.8767 5.34667 11.75 6.63067 11.75 8.144V11M11.75 11H7.25C6.422 11 5.75 11.672 5.75 12.5V27.5C5.75 28.328 6.422 29 7.25 29H20.25C21.078 29 21.75 28.328 21.75 27.5V12.5C21.75 11.672 21.078 11 20.25 11H11.75ZM9.75 16H9.76067V16.0107H9.75V16ZM9.75 20H9.76067V20.0107H9.75V20ZM9.75 24H9.76067V24.0107H9.75V24Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h3>НОВОСТИ</h3>
        <CreateNewButton/>
      </div>
      <div className="news__list">
        <AllNews/>
      </div>
    </div>
  );
};

export default News;
