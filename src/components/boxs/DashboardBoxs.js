import styled from "styled-components";
import DashboardBoxItem from "./DashboardBoxItem";
import { usePortocol } from "../../contexts/PortocolContext";

const StyledBoxs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;

function DashboardBoxs() {
  const { portocols, dispatch } = usePortocol();

  function handleFilter(filterType) {
    dispatch({ type: "filter", payload: filterType });
  }

  return (
    <StyledBoxs>
      {portocols.map((portocol) => (
        <DashboardBoxItem
          key={portocol.portocolName}
          onClick={() => handleFilter(portocol.portocolName)}
          portocol={portocol}
        />
      ))}
    </StyledBoxs>
  );
}

export default DashboardBoxs;
