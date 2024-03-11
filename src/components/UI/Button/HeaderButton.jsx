import React, {useState} from "react";
import ModalSubmit from "../../ModalSubmit";
import './HeaderButton.css'

const HeaderButton = () => {
    const [modalActive, setModalActive] = useState(false); 
    return (
        <button>
            <div className="submit__button" onClick={() => setModalActive(true)}>
                <span className="submit__text" >ПОДАТЬ ЗАЯВКУ</span>
                
            </div>
            <ModalSubmit active={modalActive} setActive={setModalActive}/>
        </button>
    )
}

export default HeaderButton