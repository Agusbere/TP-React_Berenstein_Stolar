export default function Formulario() {
  return (
    <div className="form">
      <h2>Crear una cita</h2>
      <form className="content column">
        <label>Nombre Mascota</label>
        <input type="text" placeholder="Nombre Mascota" />
        <label>Nombre Dueño</label>
        <input type="text" placeholder="Nombre dueño de la mascota" />
        <label>Fecha</label>
        <input type="date" />
        <label>hora</label>
        <input type="time" />
        <label>Sintomas</label>
        <textarea placeholder="Sucedió que ..."></textarea>
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}
