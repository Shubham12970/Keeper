import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Zoom } from "@mui/material";
import IconButton from '@mui/material/IconButton';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
      <IconButton aria-label="delete" onClick={()=>{return props.onChecked(props.id)}} >
        <DeleteIcon />
      </IconButton>
      </Zoom>
    </div>
  );
}

export default Note;
