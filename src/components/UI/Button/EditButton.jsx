import React, { useState } from "react";
import EditNew from "../../EditNew";

const EditButton = () => {
    const [modalActive, setModalActive] = useState(false);
    return(
        <button>
            <div className="new__button" onClick={() => setModalActive(true)}>
                <span className="new__text" >РЕДАКТИРОВАТЬ</span>
            </div>
            <EditNew active={modalActive} setActive={setModalActive}/>
        </button>
    )
}

export default EditButton