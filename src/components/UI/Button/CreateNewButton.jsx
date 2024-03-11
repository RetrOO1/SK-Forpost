import React, {useState} from "react";
import CreateNew from "../../CreateNew";
import './CreateNewButton.css'

const CreateNewButton = () => {
    const [modalActive, setModalActive] = useState(false); 
    return (
        <button>
            <div className="new__button" onClick={() => setModalActive(true)}>
                <span className="new__text" >ДОБАВИТЬ НОВОСТЬ</span>
            </div>
            <CreateNew active={modalActive} setActive={setModalActive}/>
        </button>
    )
}

export default CreateNewButton