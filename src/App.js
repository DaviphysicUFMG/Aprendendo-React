import Header from "./components/Header";
import Search from "./components/Search";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, #6f58c9 25%, #b6b8d6 100%);

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
    </AppContainer>
  );
}

export default App;
