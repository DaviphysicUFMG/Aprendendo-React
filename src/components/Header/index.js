import Logo from "../logo";
import OptionsHeaders from "../optionsHeaders";
import IconsHeaders from "../iconsHeaders";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeaders />
      <IconsHeaders />
    </HeaderContainer>
  );
}

export default App;
