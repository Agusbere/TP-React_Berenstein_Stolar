export default function Cita({
  nombreMascota = "No se pasó el nombre de la mascota",
  nombreDueno = "No se pasó el nombre del dueño",
  fecha,
  sintomas = "No se pasaron los sintomas",
}) {
  const FECHA = fecha?.toLocaleDateString() ?? "No se pasó fecha";
  const HORA = fecha?.toLocaleTimeString() ?? "No se pasó la hora";
  return (
    <div className="cita">
      <p>
        Mascota: <span>{nombreMascota}</span>
      </p>
      <p>
        Dueño: <span>{nombreDueno}</span>
      </p>
      <p>
        Fecha: <span>{FECHA}</span>
      </p>
      <p>
        Hora: <span>{HORA}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button>Eliminar</button>
    </div>
  );
}
