import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Cita from "./components/Cita";
import "./styles/styles.css";

function App() {
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <hr />
      <div className="content">
        <Formulario />
        <Listado>
          <Cita />
          <Cita />
          <Cita />
        </Listado>
      </div>
    </>
  );
}

export default App;
