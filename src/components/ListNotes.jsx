function ListNotesImport(props) {
    return (
        <ul> 
                  <li> 
                    <a href="#" className="important-target"> 
                      <h2>{props.title}</h2> 
                      <p>{props.description}</p> 
                    </a> 
                  </li>
         </ul>  
    )
}

function ListNotes(props) {
    return (
        <ul> 
        <li> 
          <a href="#"> 
            <h2>{props.title}</h2> 
            <p>{props.description}</p> 
          </a> 
        </li>
      </ul>
    )
}



export {ListNotes, ListNotesImport};