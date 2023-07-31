import profile from "../../imgs/perfil.svg";
import bag from "../../imgs/sacola.svg";
import styled from "styled-components";

const icons = [profile, bag];

const IconsHeaderContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconsMenuItem = styled.li`
  margin-right: 40px;
  width: 25px;
`;

function IconsHeader() {
  return (
    <IconsHeaderContainer>
      {icons.map((icons) => (
        <IconsMenuItem>
          <img src={icons} alt="icone"></img>
        </IconsMenuItem>
      ))}
    </IconsHeaderContainer>
  );
}

export default IconsHeader;
