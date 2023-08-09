import React,{useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function CreateArea(props) {

  const [note,setNote]=useState({title:"",content:""});
  const [isExpanded,setExpanded]=useState(false);

  function handleChange(event){
    const {name,value}=event.target;
    setNote((prevValue)=>{
       return {...prevValue,[name]:value
      }
    })
  }

  function handleSubmit(event){
   event.preventDefault();
   props.createNote(note);
   setNote({title:"",content:""})
   setExpanded(false);
  }

  function handleExpand(){
   setExpanded(true);
  }

  return (
    <div>
      <form  className="create-note">
        <input onClick={handleExpand} onChange={handleChange} name="title" placeholder={isExpanded?"Title":"Take a note..." } value={note.title} />
        {isExpanded?(<textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} /> ):null}
        <Zoom in={isExpanded} >
          <Fab color="primary" aria-label="add" onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
