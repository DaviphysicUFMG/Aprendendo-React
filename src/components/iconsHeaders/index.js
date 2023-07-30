import "./style.css";
import profile from "../../imgs/perfil.svg";
import bag from "../../imgs/sacola.svg";

const icons = [profile, bag];

function IconsHeader() {
  return (
    <ul className="Icons-menu">
      {icons.map((icons) => (
        <li className="Icons-menu-item">
          <img src={icons} alt="icone"></img>
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
