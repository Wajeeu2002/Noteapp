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
      <h1 className="keeper">Keeper</h1>
       <Form onAdd ={addNote}/>
       {notes.map((bee,index) => {
  return <Note id={index} key={index}title={bee.title} content={bee.content} onDelete={deleteNote}/>;
})}
     
      <Footer />
    </div>
  );
}
