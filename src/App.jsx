import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Cita from "./components/Cita";
import "./styles/cita.css";
import "./styles/formulario.css";
import "./styles/input.css";
import "./styles/listado.css";
import "./styles/app.css";

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
