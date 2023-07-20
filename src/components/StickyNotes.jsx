import React from "react";
import "../css/Notes.css"

import { ListNotes, ListNotesImport } from "./ListNotes";

function StickyNotes({notes}) {
  return (
    // Obtenemos la lista de las notas y hacemos una fila con la clase de boostrap
    <div className="row">
     {notes.map((note) => {
        return (
          // Luego cuando exista una nuevo dato en la array se hara una nueva columna para dicho elemento
          // luego hacemos una comparacion, preguntando si la nota.checkbox es importante si es asi llamamos a nuestra respectiva función
          <div className="col" key={note.id}>
            {note.checkBox ? 
              <ListNotesImport title={note.title} description={note.description} />
           :
              <ListNotes title={note.title} description={note.description}/>
           }
          </div>
        )
     })}
    </div>
    
  );
}

export default StickyNotes;
