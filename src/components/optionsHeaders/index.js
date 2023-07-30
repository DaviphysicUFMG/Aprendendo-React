
import "./style.css"
const textOptions = ["Categorias", "Estante", "Favoritos"];

function OptionsHeaders() {
  return (
    <ul className="App-menu">
      {textOptions.map((text) => (
        <li className="App-menu-item">{text}</li>
      ))}
    </ul>
  );
}



export default OptionsHeaders;
