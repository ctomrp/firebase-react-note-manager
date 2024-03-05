import { useState } from "react";
import s from "./style.module.css";
import { Trash } from "react-bootstrap-icons";

function TextCard({ title, subtitle, content, onClick, onClickTrash }) {

    const [isCardHovered, setIsCardHovered] = useState(false)
    const [isTrashHovered, setIsTrashHovered] = useState(false)

    //para evitar el event bubbleling
    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation();
    }

  return (
    <div 
    onClick={onClick}
    className={`card ${s.container}`} style={{borderColor: isCardHovered ? '#0d6efd' : 'transparent'}}
    onMouseEnter={()=>setIsCardHovered(true)}
    onMouseLeave={()=>setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
            <h5 className="card-title">{title}</h5>
            <Trash 
            onClick={onClickTrash_}
            size={20}
                onMouseEnter={()=>setIsTrashHovered(true)}
                onMouseLeave={()=>setIsTrashHovered(false)}
                style={{color: isTrashHovered ? '#ff7373' : '#b8b8b8'}}
            />
        </div>
        <h6 className={`card-subtitle mb-2 text-muted ${s.subtitle}`}>{subtitle}</h6>
        <p className={`card-text ${s.text_content}`}>{content}</p>
      </div>
    </div>
  );
}

export default TextCard;
