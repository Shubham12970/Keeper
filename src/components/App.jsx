import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes,setAllNotes]=useState([]);

  function create(note){
    setAllNotes((prevValue)=>{
      return [...prevValue,note]
    })
  }
  function handleDelete(id){
    setAllNotes((prevValue)=>{
      return  prevValue.filter((name,index)=>{
        return index !== id;
      })
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea createNote={create}/>
      {allNotes.map((value,index)=>{
       return  <Note key={index} id={index} title={value.title} content={value.content} onChecked={handleDelete} />
      })}
      <Footer />
    </div>
  );
}

export default App;
