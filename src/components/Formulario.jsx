import Input from "./Input";

export default function Formulario() {
  return (
    <div className="form">
      <h2>Crear una cita</h2>
      <form className="content column">
        <Input tipo={"text"} titulo={"Nombre de la mascota"} />
        <Input tipo={"text"} titulo={"Nombre del dueño de la mascota"} />
        <Input tipo={"date"} titulo={"Fecha"} />
        <Input tipo={"time"} titulo={"Hora"} />
        <Input
          tipo={"textarea"}
          titulo={"Sintomas"}
          placeholder={"Sucedió que..."}
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}
