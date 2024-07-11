import styled from "styled-components";
import AssetsHeader from "./AssetsHeader";
import AssetsRow from "./AssetsRow";
import { usePortocol } from "../../contexts/PortocolContext";

const StyledAssets = styled.div`
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-700);
  margin-top: 3rem;
  padding: 2rem;
  overflow-y: hidden;
  position: relative;
`;

const FilterButton = styled.span`
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

const AssetsContainer = styled.div`
  overflow-y: auto;
  height: 300px;
`;

function Assets() {
  const { assets, filter, dispatch } = usePortocol();

  const filteredAssets =
    filter === "all"
      ? assets
      : assets.filter((item) => item.type === filter.toLowerCase());

  function handleShowAll() {
    dispatch({ type: "filter", payload: "all" });
  }

  return (
    <StyledAssets>
      Assets
      <FilterButton onClick={() => handleShowAll()}>Show All</FilterButton>
      <AssetsHeader />
      <AssetsContainer>
        {filteredAssets.map((data) => (
          <AssetsRow key={data.name} rowData={data} />
        ))}
      </AssetsContainer>
    </StyledAssets>
  );
}

export default Assets;
