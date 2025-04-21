export default function Listado({ children }) {
  return (
    <div className="listado">
      <h2>Listado de citas</h2>
      <ul>{children}</ul>
    </div>
  );
}
