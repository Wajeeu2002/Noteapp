import "./styles.css";
import Footer from "./footer";
import Note from "./note";
import Form from  "./Form"
import { useState } from "react";


export default function App() {
  const[notes,setNotes] =useState([])
  function addNote (note) {
    setNotes(prevValue=>{
      return[...prevValue,note]
    })
    
  }
  function deleteNote(id) {
    setNotes(prevValue=>{
      return prevValue.filter((item,index)=>{
        return  index !==id;
      }) 
    })
    
  }
 
  return (
    <div className="App">
      <h1 className="keeper">Note Pad</h1>
       <Form onAdd ={addNote}/>
       <div className="notes-container">
         {notes.map((note,index) => {
           return <Note id={index} key={index} title={note.title} content={note.content} onDelete={deleteNote}/>;
         })}
       </div>
      <Footer />
    </div>
  );
}
