import logo from "../../imgs/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const AppLogoImg = styled.img`
  margin-right: 15px;
`;

const AppTitle = styled.p`
  display: flex;
  align-items: center;
  color: #000000;
  font-size: 40px;
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
  line-height: 80px;
`;

function Logo() {
  return (
    <LogoContainer>
      <AppLogoImg src={logo} alt="logo" />
      <AppTitle>
        <strong>Alura</strong> Books
      </AppTitle>
    </LogoContainer>
  );
}

export default Logo;
