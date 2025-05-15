import Input from "./Input";
import React, { useState } from "react";
import "../styles/formulario.css";

export default function Formulario({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    dueno: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const cambiarInput = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    agregarCita(formulario);
    setFormulario({
      nombre: "",
      dueno: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div className="form">
      <h2>Crear una cita</h2>
      <form className="content column" onSubmit={enviarFormulario}>
        <Input
          tipo={"text"}
          titulo={"Nombre de la mascota"}
          name="nombre"
          value={formulario.nombre}
          onChange={cambiarInput}
        />
        <Input
          tipo={"text"}
          titulo={"Nombre del dueño de la mascota"}
          name="dueno"
          value={formulario.dueno}
          onChange={cambiarInput}
        />
        <Input
          tipo={"date"}
          titulo={"Fecha"}
          name="fecha"
          value={formulario.fecha}
          onChange={cambiarInput}
        />
        <Input
          tipo={"time"}
          titulo={"Hora"}
          name="hora"
          value={formulario.hora}
          onChange={cambiarInput}
        />
        <Input
          tipo={"textarea"}
          titulo={"Sintomas"}
          name="sintomas"
          placeholder={"Sucedió que..."}
          value={formulario.sintomas}
          onChange={cambiarInput}
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}
