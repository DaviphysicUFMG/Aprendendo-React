import "./App.css";
import Logo from "./components/logo";
import perfil from "./imgs/perfil.svg";
import bag from "./imgs/sacola.svg";

const textOptions = ["Categorias", "Estante", "Favoritos"];
const icons = [perfil, bag];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo> </Logo>

        <ul className="App-menu">
          {textOptions.map((text) => (
            <li className="App-menu-item">{text}</li>
          ))}
        </ul>

        <ul className="Icons-menu">
          {icons.map((icons) => (
            <li className="Icons-menu-item">
              <img src={icons} alt="icone"></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
