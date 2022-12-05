import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
 
  function onPress() {
    props.onDelete(props.id)
    
  }
  
  return (
    <div className="note">
      <h3 className  = "head ">{props.title}</h3>
      <p className = "paragraph ">{props.content}</p>
    <button onClick={onPress} className="bad"  ><DeleteIcon/></button>    
    </div>
  );
}
