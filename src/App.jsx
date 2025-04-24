import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Cita from "./components/Cita";
import "./styles/styles.css";

function App() {
  return (
    <>
      <h1>Administrador de citas medicas</h1>
      <hr />
      <div className="content">
        <Formulario />
        <Listado>
          <Cita nombreMascota={"Tobi"} nombreDueno={"Monica Galindo"} fecha={new Date()} sintomas={"Le lele la pancha"}/>
          <Cita />
          <Cita />
        </Listado>
      </div>
    </>
  );
}

export default App;
