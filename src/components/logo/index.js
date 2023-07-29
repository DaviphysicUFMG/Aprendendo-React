import "./style.css";
import logo from "../../imgs/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-title">
        <strong>Alura</strong> Books
      </p>
    </div>
  );
}

export default Logo;
