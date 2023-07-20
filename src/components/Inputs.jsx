import React, { useEffect, useState, useRef } from "react";
import StickyNotes from "../components/StickyNotes";
import { v4 as uuid } from 'uuid';

function Inputs() {

  const [notes, setNotes] = useState([]);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const checkBoxRef = useRef();


  const KEY = 'mis-notas-app';
  let divErrorDescription
  let inputDescription


  // recuperar datos desde el localStorage
  useEffect(()=>{
      const misNotas = JSON.parse(localStorage.getItem(KEY));
      if (misNotas){
          setNotes(misNotas);
      }
  }, []);

  // almacenar datos en localStorage cuando se produzca un cambio en el array de tareas
  useEffect(()=>{
      const json = JSON.stringify(notes);
      console.log(json);
      localStorage.setItem(KEY, json);
  }, [notes]);
  

  // Cuando en el formulario se hace el submit en el boton, pasa por esta funcion de flecha
  // la cual primero valida si al descripción es vacio tirandole un error al usuario de lo contrario
  // llama a la funcion agregar nota
  const handleSubmit = (e) => {
    e.preventDefault();

    divErrorDescription = document.getElementById("err_description");
    inputDescription = document.getElementById("validationDescription")

    if (descriptionRef.current.value === "") {
      divErrorDescription.innerText = "El campo descripcion es obligatorio"
      inputDescription.className = "form-control is-invalid";
      divErrorDescription.className = "text-danger"
      return;
    }

    divErrorDescription.innerText = ""
    inputDescription.className = "form-control";

    // Funcion de AGREGAR NOTA
    agregarNota()


  }
    // Esta función se encarga de agregar nuevas notas a la lista
    const agregarNota = () => {

      // Se recuperan los datos de los inputs y el checkbox
      const title  = titleRef.current.value
      const description = descriptionRef.current.value
      const checkBox = checkBoxRef.current.checked

        const newNote = {
            id: uuid(),
            title: title,
            description: description,
            checkBox: checkBox
        };

        // se insertan las notas a la lista
        setNotes((prevNotes) => [...prevNotes, newNote]);

        // Reseteamos los Input 
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        checkBoxRef.current.checked = false
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="x">
        <div>
          <input
            type="text"
            ref={titleRef}
            placeholder="Ingresar Título (Opcional)"
            className="form-control title"
          />
        </div>
        <div>
          <input
            type="text"
            ref={descriptionRef}
            id="validationDescription"
            placeholder="Ingresar Descripción"
            className="form-control"
          />
          <div id="err_description"></div>
        </div>
        <div className="col-md-2">
          <div className="form-check">
            <input
              ref={checkBoxRef}
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Importante
            </label>
          </div>
        </div>
        <div className="col-md-3 d-grid gap-2">
          <button
            type="submit"
            className="btn btn-secondary"
          >
            AGREGAR
          </button>
        </div>
      </div>

      <StickyNotes notes={notes} />
    </form>
  );
}

export default Inputs;
