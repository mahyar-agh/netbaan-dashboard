import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import DashboardBoxs from "./components/boxs/DashboardBoxs";
import Assets from "./components/dashboardAssets/Assets";
import { PortocolContext } from "./contexts/PortocolContext";

const StyledApp = styled.div`
  background-color: var(--color-main-layout);
  color: var(--color-grey-0);
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 1.4rem 20rem;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <PortocolContext>
        <StyledApp>
          <DashboardBoxs />
          <Assets />
        </StyledApp>
      </PortocolContext>
    </>
  );
}

export default App;
