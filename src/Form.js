import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function Form(props) {
  const [expand, isExpand] = useState(false);
  function expanded() {
    isExpand(true);
  }

  const [contact, setContact] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    setContact({
      title: "",
      content: ""
    });
    props.onAdd(contact);
  }
  return (
    <div>
      <form>
        {expand ? (
          <input
            onChange={handleChange}
            name="title"
            value={contact.title}
            placeholder="title"
          />
        ) : null}
        <textarea
          rows={expand ? "2" : "1"}
          onClick={expanded}
          onChange={handleChange}
          name="content"
          value={contact.content}
          placeholder="content"
        ></textarea>
        <Zoom in={expand}>
          <Fab size="small" onClick={handleClick} className="good">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
