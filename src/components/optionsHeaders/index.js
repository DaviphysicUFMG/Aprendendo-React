import styled from "styled-components";
const textOptions = ["Categorias", "Estante", "Favoritos"];

const OptionsHeadersContainer = styled.ul`
  display: flex;
`;

const AppMenuItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 0 5px;
  height: 100%;
  min-width: 120px;
  font-size: 16px;
`;

function OptionsHeaders() {
  return (
    <OptionsHeadersContainer>
      {textOptions.map((text) => (
        <AppMenuItemContainer>{text}</AppMenuItemContainer>
      ))}
    </OptionsHeadersContainer>
  );
}

export default OptionsHeaders;
