import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Cita from "./components/Cita";

import "./styles/cita.css";
import "./styles/formulario.css";
import "./styles/listado.css";
import "./styles/app.css";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      nombreMascota: "Tobi",
      nombreDueno: "Monica Galindo",
      fecha: new Date(),
      sintomas: "Le lele la pancha",
    },
  ]);

  const agregarCita = (nuevaCita) => {
    if (
      !nuevaCita.nombre.trim() ||
      !nuevaCita.dueno.trim() ||
      !nuevaCita.fecha.trim() ||
      !nuevaCita.hora.trim() ||
      !nuevaCita.sintomas.trim()
    ) {
      alert("Por favor, complete todos los campos antes de agregar la cita.");
      return;
    }

    if (
      window.confirm(
        `¿Confirmás agregar la cita para ${nuevaCita.nombre.trim()}?`
      )
    ) {
      const fechaHora = new Date(`${nuevaCita.fecha}T${nuevaCita.hora}`);

      setCitas([
        ...citas,
        {
          id: Date.now(),
          nombreMascota: nuevaCita.nombre.trim(),
          nombreDueno: nuevaCita.dueno.trim(),
          fecha: fechaHora,
          sintomas: nuevaCita.sintomas.trim(),
        },
      ]);
    }
  };

  const eliminarCita = (id) => {
    const cita = citas.find((cita) => cita.id === id);

    if (
      window.confirm(
        `¿Estás seguro que querés eliminar la cita de ${cita.nombreMascota}?`
      )
    ) {
      setCitas(citas.filter((cita) => cita.id !== id));
    }
  };

  return (
    <>
      <h1>Administrador de citas médicas</h1>
      <hr />
      <div className="content">
        <Formulario agregarCita={agregarCita} />
        <Listado>
          {citas.map(({ id, nombreMascota, nombreDueno, fecha, sintomas }) => (
            <Cita
              key={id}
              nombreMascota={nombreMascota}
              nombreDueno={nombreDueno}
              fecha={fecha}
              sintomas={sintomas}
              onEliminar={() => eliminarCita(id)}
            />
          ))}
        </Listado>
      </div>
    </>
  );
}

export default App;
